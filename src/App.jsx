import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useState, createContext, useContext, useEffect, useRef } from 'react';
import { Home, Music as MusicIcon, Lightbulb, BookOpen, User } from 'lucide-react';

import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { TrackerView } from './components/TrackerView';
import { Profile } from './components/Profile';
import HeartAnimation from './components/HeartAnimation';
import { Music } from './components/Music';
import { UserDataMigration } from './components/UserDataMigration';

import { ActivityDetail } from './components/ActivityDetail';

// Contexts
const UserContext = createContext(null);
const HabitContext = createContext(null);

export const useUser = () => useContext(UserContext);
export const useHabits = () => useContext(HabitContext);

// --- Main Layout ---
// --- Main Layout ---
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';

const Layout = ({ children }) => {
    const { user } = useUser();
    const location = useLocation();

    // Don't show any nav on login page
    if (location.pathname === '/login') {
        return <div className="full-screen-login">{children}</div>;
    }

    if (!user) return <>{children}</>;

    return (
        <>
            <Sidebar />

            <main className="main-content">
                {children}
            </main>

            <MobileNav />
        </>
    );
};

import { auth, db } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
    collection,
    query,
    where,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collectionGroup,
    serverTimestamp
} from 'firebase/firestore';

// --- App Component ---
function App() {
    const [user, setUser] = useState(null);
    const [habits, setHabits] = useState([]);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);



    // Optimized Auth State Listener - Instant User State
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // CRITICAL: Always use firebaseUser.uid as the ID for consistency
                // This ensures activities are saved and loaded with the same user_id
                const basicUser = {
                    id: firebaseUser.uid, // ✅ Always use Firebase Auth UID
                    name: firebaseUser.displayName || 'User',
                    email: firebaseUser.email,
                    mobile: 'Loading...',
                    hiddenSports: []
                };
                setUser(basicUser);
                setLoading(false);

                console.log('🔑 User authenticated with ID:', firebaseUser.uid);

                // Re-fetch full details in background with timeout
                try {
                    const fetchWithTimeout = Promise.race([
                        getDoc(doc(db, 'users', firebaseUser.uid)),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('Fetch Timeout')), 5000))
                    ]);

                    const userDoc = await fetchWithTimeout;
                    if (userDoc.exists()) {
                        const firestoreData = userDoc.data();
                        setUser({
                            id: firebaseUser.uid, // ✅ ALWAYS use Firebase Auth UID, not firestoreData.id
                            name: firestoreData.name || firebaseUser.displayName || 'User',
                            email: firestoreData.email || firebaseUser.email,
                            mobile: firestoreData.mobile || '',
                            hiddenSports: firestoreData.hiddenSports || []
                        });
                        console.log('✅ User data loaded from Firestore');
                    } else {
                        console.warn('⚠️ User document not found in Firestore, using basic data');
                    }
                } catch (err) {
                    console.error("BG fetch error:", err.message);
                    // Fallback to localStorage for mobile number
                    const localMobile = localStorage.getItem(`mobile_${firebaseUser.email}`);
                    if (localMobile) {
                        console.log('Using mobile from localStorage:', localMobile);
                        setUser(prev => ({ ...prev, mobile: localMobile }));
                    }
                }
            } else {
                setUser(null);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    // Sync Habits & Activities from Firestore + localStorage
    useEffect(() => {
        if (!user?.id) {
            setHabits([]);
            setActivities([]);
            return;
        }

        // Load activities from localStorage immediately (fast, always works)
        const localStorageKey = `activities_${user.id}`;
        const savedActivities = localStorage.getItem(localStorageKey);
        if (savedActivities) {
            try {
                const parsed = JSON.parse(savedActivities);
                console.log('📦 Loaded', parsed.length, 'activities from localStorage');
                setActivities(parsed);
            } catch (err) {
                console.error('Error parsing localStorage activities:', err);
            }
        }

        // Habits Listener
        const qHabits = query(collection(db, 'habits'), where('user_id', '==', user.id));
        const unsubHabits = onSnapshot(qHabits, (snapshot) => {
            setHabits(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        // Activities Listener (Firestore - background sync)
        const qActivities = query(collection(db, 'activities'), where('user_id', '==', user.id));
        const unsubActivities = onSnapshot(qActivities, (snapshot) => {
            const loadedActivities = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            if (loadedActivities.length > 0) {
                console.log('📋 Synced', loadedActivities.length, 'activities from Firestore');
                setActivities(loadedActivities);
                // Save to localStorage as backup
                localStorage.setItem(localStorageKey, JSON.stringify(loadedActivities));
            }
        }, (error) => {
            console.warn('⚠️ Firestore sync failed, using localStorage:', error.message);
        });

        return () => {
            unsubHabits();
            unsubActivities();
        };
    }, [user?.id]);

    const login = () => { };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    const addHabit = async (habit) => {
        if (!user) return;
        try {
            await addDoc(collection(db, 'habits'), {
                ...habit,
                user_id: user.id,
                checks: {},
                created_at: new Date().toISOString()
            });
        } catch (err) {
            console.error("Error adding habit:", err);
        }
    };

    const toggleCheck = async (habitId, dateKey) => {
        if (!user) return;
        const habitRef = doc(db, 'habits', habitId);
        const habit = habits.find(h => h.id === habitId);
        if (!habit) return;

        const newChecks = { ...habit.checks };
        if (newChecks[dateKey]) delete newChecks[dateKey];
        else newChecks[dateKey] = true;

        try {
            await setDoc(habitRef, { checks: newChecks }, { merge: true });
        } catch (err) {
            console.error("Error toggling check:", err);
        }
    };

    const addActivity = async (activityName, customImgUrl = null) => {
        if (!user) {
            console.error('❌ Cannot add activity: user not logged in');
            return;
        }

        console.log('➕ Adding activity:', activityName, 'for user ID:', user.id);

        // Use Custom URL if provided, otherwise Generate/Search via LoremFlickr
        let imgUrl;
        if (customImgUrl && customImgUrl.trim()) {
            imgUrl = customImgUrl.trim();
        } else {
            // Pollinations.ai is down/upgrading. a LoremFlickr for reliable keyword-based images.
            // Format: https://loremflickr.com/{width}/{height}/{keywords joined by comma}/all
            // Clean the name: remove emojis, special chars, extra spaces to get pure keywords
            const cleanName = activityName.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim();
            const searchTerm = cleanName.replace(/\s+/g, ',');
            // Add 'sport' only if it's likely a sport, or just use the name as primary keyword
            // We append 'sport' to filter out ambiguous terms (e.g. 'Reading' -> 'Reading,sport' might be weird, but for this app it's fine)
            // Actually, for broad activities, just the name might be better if specific.
            // Let's stick to name + sport for now, but cleaned.
            imgUrl = `https://loremflickr.com/800/600/${searchTerm},sport/all`;
        }

        // STEP 1: Save to FIRESTORE FIRST (primary storage)
        try {
            console.log('💾 Saving to Firestore...');
            const docRef = await addDoc(collection(db, 'activities'), {
                name: activityName,
                user_id: user.id,
                created_at: serverTimestamp(),
                imgUrl: imgUrl
            });

            console.log('✅ Activity saved to Firestore! ID:', docRef.id);

            // STEP 2: Also save to localStorage as backup
            const localStorageKey = `activities_${user.id}`;
            const newActivity = {
                id: docRef.id, // Use Firestore document ID
                name: activityName,
                user_id: user.id,
                created_at: new Date().toISOString(),
                imgUrl: imgUrl
            };

            const existing = localStorage.getItem(localStorageKey);
            const currentActivities = existing ? JSON.parse(existing) : [];
            currentActivities.push(newActivity);
            localStorage.setItem(localStorageKey, JSON.stringify(currentActivities));
            console.log('✅ Activity also backed up to localStorage');

            // UI will update automatically via Firestore listener

        } catch (firestoreErr) {
            console.error('❌ Firestore save failed:', firestoreErr.message);

            // FALLBACK: Save to localStorage only
            console.log('⚠️ Falling back to localStorage...');
            const localStorageKey = `activities_${user.id}`;
            const activityId = `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const newActivity = {
                id: activityId,
                name: activityName,
                user_id: user.id,
                created_at: new Date().toISOString(),
                imgUrl: imgUrl
            };

            try {
                const existing = localStorage.getItem(localStorageKey);
                const currentActivities = existing ? JSON.parse(existing) : [];
                currentActivities.push(newActivity);
                localStorage.setItem(localStorageKey, JSON.stringify(currentActivities));
                setActivities(currentActivities);
                console.log('✅ Activity saved to localStorage (Firestore unavailable)');
                alert('⚠️ Activity saved locally. Firestore is unavailable: ' + firestoreErr.message);
            } catch (localErr) {
                console.error('❌ Both Firestore and localStorage failed!');
                alert('Failed to save activity: ' + localErr.message);
            }
        }
    };

    const updateActivityImage = async (activityId, newImgUrl) => {
        if (!user || !newImgUrl) return;

        // Optimistic Update (Local State)
        setActivities(prev => prev.map(a => a.id === activityId ? { ...a, imgUrl: newImgUrl } : a));

        // Update localStorage
        const localStorageKey = `activities_${user.id}`;
        try {
            const existing = localStorage.getItem(localStorageKey);
            if (existing) {
                const currentActivities = JSON.parse(existing);
                const updated = currentActivities.map(a => a.id === activityId ? { ...a, imgUrl: newImgUrl } : a);
                localStorage.setItem(localStorageKey, JSON.stringify(updated));
            }
        } catch (err) {
            console.error("Error updating localStorage image:", err);
        }

        // Update Firestore
        try {
            const activityRef = doc(db, 'activities', activityId);
            await setDoc(activityRef, { imgUrl: newImgUrl }, { merge: true });
            console.log('✅ Image updated in Firestore');
        } catch (err) {
            console.error("Error updating image in Firestore:", err);
        }
    };

    const deleteActivity = async (activity) => {
        if (!user) return;

        const DEFAULT_SPORTS_IDS = ['tennis', 'badminton', 'pickleball', 'basketball'];

        if (DEFAULT_SPORTS_IDS.includes(activity.id)) {
            // Hide default sport/activity
            try {
                const newHidden = [...(user.hiddenSports || []), activity.id];
                await setDoc(doc(db, 'users', user.id), { hiddenSports: newHidden }, { merge: true });
                setUser(prev => ({ ...prev, hiddenSports: newHidden }));
            } catch (err) {
                console.error('Error hiding activity:', err);
            }
        } else {
            // Delete custom activity from localStorage FIRST
            const localStorageKey = `activities_${user.id}`;
            try {
                const existing = localStorage.getItem(localStorageKey);
                if (existing) {
                    const currentActivities = JSON.parse(existing);
                    const filtered = currentActivities.filter(a => a.id !== activity.id);
                    localStorage.setItem(localStorageKey, JSON.stringify(filtered));
                    setActivities(filtered);
                    console.log('✅ Activity deleted from localStorage');
                }
            } catch (localErr) {
                console.error('Error deleting from localStorage:', localErr);
            }

            // Try to delete from Firestore (background)
            try {
                await deleteDoc(doc(db, 'activities', activity.id));
                console.log('✅ Activity also deleted from Firestore');
            } catch (firestoreErr) {
                console.warn('⚠️ Firestore delete failed (activity still deleted locally):', firestoreErr.message);
            }
        }
    };
    if (loading) return <div className="page-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white' }}>Loading...</div>;

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            <HabitContext.Provider value={{ habits, addHabit, toggleCheck, activities, addActivity, deleteActivity, updateActivityImage }}>
                <Router>
                    <AppRoutes />
                </Router>
            </HabitContext.Provider>
        </UserContext.Provider>
    );
};

function AppRoutes() {
    const { user } = useUser();
    if (!user) return <Login />;
    return (
        <Layout>
            <UserDataMigration />

            <Routes>
                <Route path="/login" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/activity/:activityName" element={<ActivityDetail />} />
                <Route path="/tracker" element={<TrackerView />} />
                <Route path="/music" element={<Music />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/heart" element={<HeartAnimation />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Layout>
    );
}

export default App;
