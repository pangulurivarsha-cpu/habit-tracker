import { useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

/**
 * This component runs once when the app loads and ensures
 * the current user's Firestore document has all required fields
 */
export const UserDataMigration = () => {
    useEffect(() => {
        const migrateUserData = async () => {
            const user = auth.currentUser;
            if (!user) return;

            try {
                const userDocRef = doc(db, 'users', user.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const data = userDoc.data();

                    // Check if migration is needed
                    const needsMigration = !data.id || !data.hasOwnProperty('hiddenSports');

                    if (needsMigration) {
                        console.log('Migrating user data for:', user.uid);

                        // Update with missing fields
                        await setDoc(userDocRef, {
                            id: user.uid,
                            name: data.name || user.displayName || 'User',
                            email: data.email || user.email,
                            mobile: data.mobile || '',
                            hiddenSports: data.hiddenSports || [],
                            created_at: data.created_at || new Date().toISOString()
                        }, { merge: true });

                        console.log('User data migration completed');
                    }
                } else {
                    // Create user document if it doesn't exist
                    console.log('Creating user document for:', user.uid);
                    await setDoc(userDocRef, {
                        id: user.uid,
                        name: user.displayName || 'User',
                        email: user.email,
                        mobile: '',
                        hiddenSports: [],
                        created_at: new Date().toISOString()
                    });
                }
            } catch (err) {
                console.error('User data migration error:', err);
            }
        };

        // Run migration after a short delay to ensure auth is ready
        const timer = setTimeout(migrateUserData, 1000);
        return () => clearTimeout(timer);
    }, []);

    return null; // This component doesn't render anything
};
