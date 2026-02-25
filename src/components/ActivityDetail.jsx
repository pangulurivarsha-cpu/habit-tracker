import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Clock, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { capitalizeName } from './Dashboard';
import './ActivityDetail.css';
import { db } from '../firebase';
import { doc, onSnapshot, collection, query, setDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { useUser, useHabits } from '../App';

export const ActivityDetail = () => {
    const { activityName } = useParams();
    const navigate = useNavigate();

    const { user } = useUser(); // Get authenticated user
    const { activities, addActivity } = useHabits(); // Get activities to find current activity ID

    // Store participants per month-year combination
    const [participantsByMonth, setParticipantsByMonth] = useState({});
    const [showAddModal, setShowAddModal] = useState(false);
    const [showTimingsModal, setShowTimingsModal] = useState(false);
    const [newName, setNewName] = useState('');
    const [viewMode, setViewMode] = useState('week');
    const [timings, setTimings] = useState("5:00 am to 10:00 am, 4:00 pm to 6:00 pm");

    // Time picker state
    const [startHour, setStartHour] = useState('5');
    const [startMinute, setStartMinute] = useState('00');
    const [startPeriod, setStartPeriod] = useState('AM');
    const [endHour, setEndHour] = useState('10');
    const [endMinute, setEndMinute] = useState('00');
    const [endPeriod, setEndPeriod] = useState('AM');
    const [startHour2, setStartHour2] = useState('4');
    const [startMinute2, setStartMinute2] = useState('00');
    const [startPeriod2, setStartPeriod2] = useState('PM');
    const [endHour2, setEndHour2] = useState('6');
    const [endMinute2, setEndMinute2] = useState('00');
    const [endPeriod2, setEndPeriod2] = useState('PM');

    // New participant details state
    const [newClasses, setNewClasses] = useState('');
    const [newPaidStatus, setNewPaidStatus] = useState(false); // false = Unpaid, true = Paid
    const [newPaymentDate, setNewPaymentDate] = useState('');

    // Expanded row state
    const [expandedParticipantId, setExpandedParticipantId] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingParticipant, setEditingParticipant] = useState(null);

    // Month and Year state
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth); // 0-11
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const scrollMasterRef = useRef(null);

    // Filter state
    const [filterMode, setFilterMode] = useState('all'); // 'all', 'active', 'completed'

    // Form Validation Error
    const [formError, setFormError] = useState('');

    // Custom Delete Modal State
    const [deleteConfirmId, setDeleteConfirmId] = useState(null);



    // Generate years (3 previous + current + 50 future = 54 years)
    const years = Array.from({ length: 54 }, (_, i) => currentYear - 3 + i);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Helper to get month key
    const getMonthKey = (year, month) => `${year}-${String(month + 1).padStart(2, '0')}`;

    // Current month key for getting participants
    const currentMonthKey = getMonthKey(selectedYear, selectedMonth);

    // Find the current activity ID from context based on the URL name parameter
    // This is crucial because Firestore needs the ID, not just the name
    const currentActivity = activities.find(a =>
        a.name.toLowerCase() === activityName.toLowerCase() ||
        a.id.toLowerCase() === activityName.toLowerCase()
    );

    // --- AUTO-CREATE DEFAULT ACTIVITIES ---
    // If the user navigates to "Badminton" but hasn't "added" it yet, we create it on the fly.
    const [isCreatingDefault, setIsCreatingDefault] = useState(false);
    useEffect(() => {
        if (!user || !activities || isCreatingDefault) return;
        
        // If we found it, great.
        if (currentActivity) return;

        // If not found, check if it's a known default sport
        const DEFAULT_SPORTS = ['tennis', 'badminton', 'pickleball', 'basketball'];
        const normalizedName = activityName.toLowerCase();
        
        if (DEFAULT_SPORTS.includes(normalizedName)) {
            setIsCreatingDefault(true);
            const createDefault = async () => {
                try {
                    console.log(`Creating default activity document for ${activityName}...`);
                    await addActivity(capitalizeName(activityName));
                    // The listener will pick it up and re-render
                } catch (err) {
                    console.error("Error creating default activity:", err);
                } finally {
                    setIsCreatingDefault(false);
                }
            };
            createDefault();
        }
    }, [user, activities, activityName, currentActivity, addActivity, isCreatingDefault]);


    // 1. Sync Timings from the Activity Document
    useEffect(() => {
        if (!currentActivity?.id) return;

        const activityRef = doc(db, 'activities', currentActivity.id);
        const unsubscribe = onSnapshot(activityRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                if (data.timings) {
                    setTimings(data.timings);
                }
            }
        });

        return () => unsubscribe();
    }, [currentActivity?.id]);

    // 2. Sync Participants from Sub-collection
    useEffect(() => {
        if (!currentActivity?.id) return;

        const participantsRef = collection(db, 'activities', currentActivity.id, 'participants');
        const q = query(participantsRef);

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const loadedParticipants = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // Group by month for existing UI logic compatibility
            // We'll reconstruct the participantsByMonth object
            const grouped = {};

            // To be safe, we'll initialize the current month
            grouped[currentMonthKey] = [];

            // In the Firestore model, we'll store specific month data on the participant or assume they exist across months
            // For this app's logic, participants seem to be persistent but attendance is per month.
            // Let's assume all participants loaded are relevant.

            // The existing app logic expects `participantsByMonth` to be { "2024-02": [customers] }
            // We need to map our flat Firestore list into this structure.
            // Since customers carry over, we can just put ALL customers into EVERY accessed month key 
            // OR simpler: Just store the flat list and filter in the UI. 
            // BUT, to minimize refactoring risk, let's map the flat list to the current view's month key.

            grouped[currentMonthKey] = loadedParticipants;

            // Also populate for other months if we have attendance data for them?
            // Actually, the previous logic duplicated data across keys. 
            // The Firestore way is cleaner: One list of participants, each has an `attendance` map.
            // We can just set the same list for all looked-up months to suffice the UI.

            setParticipantsByMonth(prev => ({
                ...prev, // Keep other keys if needed, though likely we just overwrite
                [currentMonthKey]: loadedParticipants
            }));

        });

        return () => unsubscribe();
    }, [currentActivity?.id, currentMonthKey]);

    // 3. One-time Migration: Upload LocalStorage to Firestore
    useEffect(() => {
        const migrateToCloud = async () => {
            if (!currentActivity?.id || !user?.id) return;

            const hasMigratedKey = `migrated_${currentActivity.id}`;
            if (localStorage.getItem(hasMigratedKey)) return;

            // Check if Firestore is empty
            const participantsRef = collection(db, 'activities', currentActivity.id, 'participants');
            const snapshot = await getDocs(participantsRef);

            if (snapshot.size === 0) {
                console.log("Empty Firestore. Checking for local data to migrate...");
                const localData = localStorage.getItem(`activity_${activityName}_participantsByMonth`);

                if (localData) {
                    try {
                        const parsed = JSON.parse(localData);
                        // Flatten all participants from all months
                        const distinctParticipants = new Map();

                        Object.values(parsed).forEach(monthList => {
                            monthList.forEach(p => {
                                // Use ID if present, else Name as key
                                const key = p.id || p.name;
                                if (!distinctParticipants.has(key)) {
                                    distinctParticipants.set(key, p);
                                } else {
                                    // Merge attendance
                                    const existing = distinctParticipants.get(key);
                                    existing.attendance = { ...existing.attendance, ...p.attendance };
                                    distinctParticipants.set(key, existing);
                                }
                            });
                        });

                        console.log(`Migrating ${distinctParticipants.size} participants to cloud...`);

                        // Upload
                        const batchPromises = Array.from(distinctParticipants.values()).map(async (p) => {
                            // Ensure valid ID
                            const pId = p.id ? String(p.id) : `p_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
                            await setDoc(doc(db, 'activities', currentActivity.id, 'participants', pId), {
                                ...p,
                                id: pId,
                                migrated_at: new Date().toISOString()
                            }, { merge: true });
                        });

                        await Promise.all(batchPromises);
                        localStorage.setItem(hasMigratedKey, 'true');
                        console.log("Migration complete!");

                    } catch (e) {
                        console.error("Migration failed:", e);
                    }
                }
            } else {
                // Firestore has data, mark migrated to skip future checks
                localStorage.setItem(hasMigratedKey, 'true');
            }
        };

        migrateToCloud();
    }, [currentActivity?.id, user?.id]);

    useEffect(() => {
        const handleClickOutside = () => {
            if (activeMenu) setActiveMenu(null);
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeMenu]);

    const saveParticipantsForMonth = (monthKey, updatedParticipants) => {
        // Deprecated: No longer manually saving to state/localstorage. 
        // Firestore listener updates state automatically.
    };

    // Calculate total attendance ACROSS ALL MONTHS for this participant
    // Uses ID if available, falls back to Name for older legacy data
    const calculateGlobalAttendance = (participant) => {
        let globalAttendedCount = 0;

        Object.values(participantsByMonth).forEach(monthParticipants => {
            const p = monthParticipants.find(mp => {
                if (participant.id && mp.id) {
                    return participant.id === mp.id;
                }
                return mp.name.toLowerCase() === participant.name.toLowerCase();
            });

            if (p && p.attendance) {
                globalAttendedCount += Object.values(p.attendance).filter(Boolean).length;
            }
        });

        return globalAttendedCount;
    };

    const calculateTotal = (participant) => {
        // We now want a global remaining count regardless of view mode.
        const globalAttendedCount = calculateGlobalAttendance(participant);
        const totalClasses = parseInt(participant.classes) || 0;

        if (totalClasses > 0) {
            return totalClasses - globalAttendedCount;
        }

        // If they don't have a set number of classes, just show how many they've attended total
        return globalAttendedCount;
    };

    // Dynamically filter current month's explicitly saved participants to prune legacy forwards
    const rawCurrentParticipants = participantsByMonth[currentMonthKey] || [];
    const savedCurrentParticipants = rawCurrentParticipants.filter(p => {
        const remaining = p.classes ? calculateTotal(p) : 1;
        // Check if they have ANY actual ticks in the current month rendering
        const hasAttendanceThisMonth = Object.keys(p.attendance || {}).some(dateStr => {
            return dateStr.startsWith(currentMonthKey) && p.attendance[dateStr] === true;
        });

        // If they have a defined package size, 0 classes left globally, AND no activity THIS month...
        // They are a legacy ghost from the old manual adding bug. Strip them from this month's local view to keep it clean.
        if (parseInt(p.classes) > 0 && remaining <= 0 && !hasAttendanceThisMonth) {
            return false;
        }
        return true;
    });

    const carriedForwardParticipants = [];

    Object.keys(participantsByMonth).forEach(monthKey => {
        if (monthKey < currentMonthKey) {
            participantsByMonth[monthKey].forEach(pastParticipant => {
                const totalClasses = parseInt(pastParticipant.classes) || 0;
                if (totalClasses > 0) {
                    const alreadyInCurrent = savedCurrentParticipants.some(p => p.id === pastParticipant.id || p.name.toLowerCase() === pastParticipant.name.toLowerCase());
                    const alreadyCarried = carriedForwardParticipants.some(p => p.id === pastParticipant.id || p.name.toLowerCase() === pastParticipant.name.toLowerCase());

                    if (!alreadyInCurrent && !alreadyCarried) {
                        const remaining = calculateTotal(pastParticipant);
                        if (remaining > 0) {
                            carriedForwardParticipants.push({
                                ...pastParticipant,
                                attendance: {}
                            });
                        }
                    }
                }
            });
        }
    });

    const currentParticipants = [...savedCurrentParticipants, ...carriedForwardParticipants];

    // Cleanup legacy data effect
    useEffect(() => {
        if (!currentParticipants.length) return;

        const cleanParticipants = currentParticipants.filter(p => {
            // Keep if it has classes OR payment date OR paid status is true OR has some attendance
            const hasDetails = p.classes || p.paymentDate || p.paidStatus || Object.keys(p.attendance || {}).length > 0;
            return hasDetails;
        });

        if (cleanParticipants.length !== currentParticipants.length) {
            console.log("Cleaning up incomplete participants...");
            saveParticipantsForMonth(currentMonthKey, cleanParticipants);
        }
    }, [currentParticipants.length, currentMonthKey]); // Only run when list length changes or month changes

    const toggleParticipantExpand = (id) => {
        setExpandedParticipantId(expandedParticipantId === id ? null : id);
    };

    const generateGoogleCalendarLink = (name, date) => {
        if (!date) return '#';
        const title = encodeURIComponent(`${name} - ${activityName} Class Payment`);
        const details = encodeURIComponent(`Payment due/made for ${activityName} classes.`);
        const d = new Date(date);
        const start = d.toISOString().replace(/-|:|\.\d\d\d/g, ""); // Basic ISO format required by GCal
        const end = d.toISOString().replace(/-|:|\.\d\d\d/g, "");

        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=${start}/${end}`;
    };

    const togglePaidStatus = async (participantId) => {
        if (!currentActivity?.id) return;

        const participant = currentParticipants.find(p => p.id === participantId);
        if (!participant) return;

        try {
            const pRef = doc(db, 'activities', currentActivity.id, 'participants', String(participantId));
            await updateDoc(pRef, { paidStatus: !participant.paidStatus });
        } catch (err) {
            console.error("Failed to toggle paid status:", err);
        }
    };

    const handleSaveTimings = async () => {
        const newTimings = `${startHour}:${startMinute} ${startPeriod.toLowerCase()} to ${endHour}:${endMinute} ${endPeriod.toLowerCase()}, ${startHour2}:${startMinute2} ${startPeriod2.toLowerCase()} to ${endHour2}:${endMinute2} ${endPeriod2.toLowerCase()}`;

        setTimings(newTimings); // Optimistic
        setShowTimingsModal(false);

        if (currentActivity?.id) {
            const activityRef = doc(db, 'activities', currentActivity.id);
            try {
                await updateDoc(activityRef, { timings: newTimings });
            } catch (err) {
                console.error("Error saving timings:", err);
            }
        }
    };

    const openAddModal = () => {
        setNewName('');
        setNewClasses('');
        setNewPaidStatus(false);
        setNewPaymentDate('');
        setFormError('');
        setShowAddModal(true);
    };

    const handleAddParticipant = async () => {
        setFormError('');
        if (!newName.trim()) {
            setFormError('Name is required.');
            return;
        }
        if (!newClasses || parseInt(newClasses) < 0) {
            setFormError('No. of Classes must be 0 or greater.');
            return;
        }
        if (newPaidStatus && !newPaymentDate) {
            setFormError('Payment Date is required when status is Paid.');
            return;
        }

        if (!currentActivity?.id) {
            setFormError('Activity ID missing. Please refresh.');
            return;
        }

        const baseId = String(Date.now());
        const newParticipant = {
            id: baseId,
            name: capitalizeName(newName.trim()),
            classes: newClasses,
            paidStatus: newPaidStatus,
            paymentDate: newPaymentDate,
            attendance: {}
        };

        // Save to Firestore
        try {
            await setDoc(doc(db, 'activities', currentActivity.id, 'participants', baseId), newParticipant);
            setNewName('');
            setNewClasses('');
            setNewPaidStatus(false);
            setNewPaymentDate('');
            setShowAddModal(false);
        } catch (err) {
            setFormError('Failed to save to cloud: ' + err.message);
        }
    };

    const handleRemoveParticipant = (id) => {
        setDeleteConfirmId(id);
    };

    const confirmDelete = async () => {
        if (!deleteConfirmId || !currentActivity?.id) return;

        try {
            await deleteDoc(doc(db, 'activities', currentActivity.id, 'participants', String(deleteConfirmId)));
            setDeleteConfirmId(null);
        } catch (err) {
            console.error("Error deleting participant:", err);
            alert("Failed to delete from cloud");
        }
    };

    const handleEditParticipant = async () => {
        setFormError('');
        if (!editingParticipant || !currentActivity?.id) return;

        // ... validation checks can stay same ...

        try {
            const pRef = doc(db, 'activities', currentActivity.id, 'participants', String(editingParticipant.id));
            await updateDoc(pRef, {
                name: capitalizeName(newName.trim()),
                classes: newClasses,
                paidStatus: newPaidStatus,
                paymentDate: newPaymentDate
            });
            setShowEditModal(false);
            setEditingParticipant(null);
        } catch (err) {
            setFormError("Update failed: " + err.message);
        }
    };

    const openEditModal = (participant) => {
        setEditingParticipant(participant);
        setNewName(participant.name);
        setNewClasses(participant.classes);
        setNewPaidStatus(participant.paidStatus);
        setNewPaymentDate(participant.paymentDate || '');
        setFormError('');
        setShowEditModal(true);
        setActiveMenu(null);
    };

    const toggleAttendance = async (participantId, dateStr) => {
        if (!currentActivity?.id) return;

        const participant = currentParticipants.find(p => p.id === participantId);
        if (!participant) return;

        const newAttendance = { ...participant.attendance };
        if (newAttendance[dateStr]) {
            delete newAttendance[dateStr];
        } else {
            newAttendance[dateStr] = true;
        }

        try {
            const pRef = doc(db, 'activities', currentActivity.id, 'participants', String(participantId));
            await updateDoc(pRef, { attendance: newAttendance });
        } catch (err) {
            console.error("Failed to toggle attendance:", err);
        }
    };

    const handleScroll = (e) => {
        const newScrollLeft = e.target.scrollLeft;
        setScrollLeft(newScrollLeft);

        // Sync all calendar scroll wrappers
        document.querySelectorAll('.calendar-scroll-wrapper').forEach(el => {
            if (el !== e.target) {
                el.scrollLeft = newScrollLeft;
            }
        });

        // Sync master scrollbar if detailed scroll happened elsewhere
        if (scrollMasterRef.current && scrollMasterRef.current !== e.target) {
            scrollMasterRef.current.scrollLeft = newScrollLeft;
        }
    };

    // Get calendar dates with proper alignment
    const getCalendarDates = () => {
        const firstDay = new Date(selectedYear, selectedMonth, 1);
        const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
        const startingDayOfWeek = firstDay.getDay(); // 0 = Sunday
        const dates = [];

        // Add empty cells for alignment
        for (let i = 0; i < startingDayOfWeek; i++) {
            dates.push(null);
        }

        // Add actual dates
        for (let d = 1; d <= lastDay.getDate(); d++) {
            dates.push(new Date(selectedYear, selectedMonth, d));
        }

        return dates;
    };

    const getWeekDates = () => {
        const today = new Date(); // Always use today for week view
        today.setHours(0, 0, 0, 0); // Normalize time to avoid localized shifting
        const dayOfWeek = today.getDay();
        const dates = [];

        // Start from Sunday of current week
        for (let i = 0; i < 7; i++) {
            const date = new Date(today.getTime()); // Clone the base date properly to prevent reference cascading
            date.setDate(today.getDate() - dayOfWeek + i);
            dates.push(date);
        }
        return dates;
    };

    const displayDates = viewMode === 'week' ? getWeekDates() : getCalendarDates();

    // Determine active vs completed status and sort ALL current participants
    const sortedAllParticipants = [...currentParticipants].sort((a, b) => {
        const totalClassesA = parseInt(a.classes) || 0;
        const totalClassesB = parseInt(b.classes) || 0;

        const remainingA = totalClassesA > 0 ? calculateTotal(a) : 1; // 1 means infinite/no-limit (active)
        const remainingB = totalClassesB > 0 ? calculateTotal(b) : 1;

        const isCompletedA = totalClassesA > 0 && remainingA <= 0;
        const isCompletedB = totalClassesB > 0 && remainingB <= 0;

        if (isCompletedA && !isCompletedB) return 1;  // A goes down
        if (!isCompletedA && isCompletedB) return -1; // B goes down
        return 0; // Keep current order otherwise
    });

    // Calculate Summary Stats
    const totalUsersCount = sortedAllParticipants.length;
    const activeUsersCount = sortedAllParticipants.filter(p => {
        const t = parseInt(p.classes) || 0;
        return t === 0 || calculateTotal(p) > 0;
    }).length;
    const completedUsersCount = totalUsersCount - activeUsersCount;

    // Apply the active UI Filter for rendering
    const displayParticipants = sortedAllParticipants.filter(p => {
        if (filterMode === 'all') return true;
        const total = parseInt(p.classes) || 0;
        const isActive = total === 0 || calculateTotal(p) > 0;
        if (filterMode === 'active') return isActive;
        if (filterMode === 'completed') return !isActive;
        return true;
    });

    return (
        <div className="activity-detail">
            <div className="mobile-frame">
                <div className="activity-header">
                    <button onClick={() => navigate(-1)} className="back-btn">
                        <ArrowLeft size={20} />
                        Back
                    </button>
                    <div className="activity-info">
                        <h1>{capitalizeName(activityName)}</h1>
                        <div className="timings-display">
                            <span>Timings: {timings}</span>
                            <button onClick={() => setShowTimingsModal(true)} className="edit-timings-btn">
                                <Clock size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Month and Year Selector */}
                <div className="month-year-selector">
                    <div className="selector-group">
                        <label>Month:</label>
                        <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
                            {months.map((month, idx) => (
                                <option key={idx} value={idx}>{month}</option>
                            ))}
                        </select>
                    </div>
                    <div className="selector-group">
                        <label>Year:</label>
                        <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
                            {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="activity-content-compact">
                    {/* Stats and Filter Row */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        background: 'rgba(0,0,0,0.2)',
                        borderBottom: '1px solid var(--border-subtle)',
                        fontSize: '0.9rem',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap'
                    }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <span
                                onClick={() => setFilterMode('all')}
                                style={{ color: filterMode === 'all' ? 'var(--primary-400)' : 'var(--text-main)', cursor: 'pointer', fontWeight: filterMode === 'all' ? 600 : 400 }}
                            >
                                Total Users: {totalUsersCount}
                            </span>
                            <span style={{ color: 'var(--border-subtle)' }}>|</span>
                            <span
                                onClick={() => setFilterMode('active')}
                                style={{ color: filterMode === 'active' ? 'var(--primary-400)' : 'var(--text-main)', cursor: 'pointer', fontWeight: filterMode === 'active' ? 600 : 400 }}
                            >
                                Active: {activeUsersCount}
                            </span>
                            <span style={{ color: 'var(--border-subtle)' }}>|</span>
                            <span
                                onClick={() => setFilterMode('completed')}
                                style={{ color: filterMode === 'completed' ? 'var(--primary-400)' : 'var(--text-main)', cursor: 'pointer', fontWeight: filterMode === 'completed' ? 600 : 400 }}
                            >
                                Completed: {completedUsersCount}
                            </span>
                        </div>
                    </div>

                    <div className="compact-grid-header">
                        <div className="header-names">Names</div>
                        <div className="header-calendar">
                            <div className="calendar-title">Calendar</div>
                        </div>
                        <div className="header-total">
                            <div className="total-header-flex">
                                <span>Total</span>
                                <div className="toggle-switch">
                                    <button className={viewMode === 'month' ? 'active' : ''} onClick={() => { setViewMode('month'); setCurrentPage(1); }}>
                                        Month
                                    </button>
                                    <button className={viewMode === 'week' ? 'active' : ''} onClick={() => { setViewMode('week'); setCurrentPage(1); }}>
                                        Week
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {displayParticipants.map((participant, pIndex) => {
                        const dates = viewMode === 'week' ? getWeekDates() : displayDates;
                        const totalClasses = parseInt(participant.classes) || 0;
                        const remaining = calculateTotal(participant);
                        const isCompleted = totalClasses > 0 && remaining <= 0;

                        return (
                            <div key={participant.id} className={`participant-row ${isCompleted ? 'completed-participant' : ''}`}>
                                <div className="participant-name">
                                    <div className="name-container">
                                        <span className="name-text">{capitalizeName(participant.name)}</span>
                                        <div className="inline-details">
                                            <button
                                                className={`status-badge ${participant.paidStatus ? 'paid' : 'unpaid'}`}
                                                onClick={() => togglePaidStatus(participant.id)}
                                                title={participant.paidStatus ? "Paid - Click to toggle" : "Unpaid - Click to toggle"}
                                            >
                                                {participant.paidStatus ? 'Paid' : 'Unpaid'}
                                            </button>
                                            {participant.paymentDate && (
                                                <a
                                                    href={generateGoogleCalendarLink(participant.name, participant.paymentDate)}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="date-badge"
                                                    title="Add to Google Calendar"
                                                >
                                                    {(() => {
                                                        const [y, m, d] = participant.paymentDate.split('-');
                                                        return new Date(y, m - 1, d).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
                                                    })()}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="participant-actions-menu">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setActiveMenu(activeMenu === participant.id ? null : participant.id); }}
                                            className="action-menu-btn"
                                            title="Options"
                                        >
                                            <MoreVertical size={16} />
                                        </button>
                                        {activeMenu === participant.id && (
                                            <div className="action-dropdown" onClick={(e) => e.stopPropagation()}>
                                                <button onClick={() => openEditModal(participant)}>
                                                    <Edit2 size={14} /> Edit Details
                                                </button>
                                                <button onClick={() => { setActiveMenu(null); handleRemoveParticipant(participant.id); }} className="delete-action">
                                                    <Trash2 size={14} /> Delete
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="calendar-scroll-wrapper" onScroll={handleScroll}>
                                    <div className="calendar-inner">
                                        {/* Show day headers only for first participant */}
                                        {pIndex === 0 && (
                                            <div className="days-header-inline">
                                                <span>S</span><span>M</span><span>T</span><span>W</span>
                                                <span>T</span><span>F</span><span>S</span>
                                            </div>
                                        )}
                                        <div className="participant-calendar">
                                            {dates.map((date, idx) => {
                                                if (!date) {
                                                    return <div key={`empty-${idx}`} className="checkbox-cell empty"></div>;
                                                }

                                                // Ensure consistency between week and month views by relying strictly on local timezone values
                                                const localDateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

                                                // Remove legacy UTC keys to prevent timezone offset overlap
                                                const isChecked = participant.attendance[localDateStr] || false;

                                                const isPaymentDate = participant.paymentDate === localDateStr;
                                                const noClassesLeft = !participant.classes || parseInt(participant.classes) <= 0;

                                                return (
                                                    <label key={localDateStr} className={`checkbox-cell ${isPaymentDate ? 'payment-date-highlight' : ''} ${noClassesLeft ? 'disabled-cell' : ''}`} title={isPaymentDate ? "Payment Date" : ""}>
                                                        <span className="date-num">{date.getDate()}</span>
                                                        <input
                                                            type="checkbox"
                                                            disabled={noClassesLeft}
                                                            checked={isChecked}
                                                            onChange={() => toggleAttendance(participant.id, localDateStr)}
                                                        />
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="participant-total">
                                    {calculateTotal(participant)}
                                </div>
                            </div>
                        );
                    })}

                    {/* Master Scrollbar at the end */}
                    <div className="master-scroll-container">
                        <div className="scroll-spacer-left"></div>
                        <div
                            className="master-scrollbar"
                            onScroll={handleScroll}
                            ref={scrollMasterRef}
                        >
                            <div style={{ width: `${maxScrollWidth}px`, height: '1px' }}></div>
                        </div>
                        <div className="scroll-spacer-right"></div>
                    </div>



                    <div className="add-name-row">
                        <button onClick={openAddModal} className="add-name-btn-compact">
                            <Plus size={16} />
                            Add Names
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Participant Modal */}
            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add Participant</h2>
                            <button onClick={() => setShowAddModal(false)} className="close-btn">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="modal-body">
                            {formError && <div className="modal-error-text" style={{ color: 'var(--red-400)', marginBottom: '16px', fontSize: '0.9rem', padding: '8px 12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>{formError}</div>}
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    placeholder="Enter name"
                                    className="modal-input"
                                    autoFocus
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>No. of Classes</label>
                                    <input
                                        type="number"
                                        value={newClasses}
                                        onChange={(e) => setNewClasses(e.target.value)}
                                        placeholder="0"
                                        className="modal-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Details</label>
                                    <div className="toggle-wrapper" onClick={() => setNewPaidStatus(!newPaidStatus)}>
                                        <div className={`status-toggle ${newPaidStatus ? 'active' : ''}`}>
                                            {newPaidStatus ? 'Paid' : 'Unpaid'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Payment Date</label>
                                <div className="date-input-wrapper">
                                    <input
                                        type="date"
                                        value={newPaymentDate}
                                        onChange={(e) => setNewPaymentDate(e.target.value)}
                                        className="modal-input"
                                    />
                                    <span className="calendar-icon-indicator">📅</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={() => setShowAddModal(false)} className="cancel-btn">
                                Cancel
                            </button>
                            <button onClick={handleAddParticipant} className="confirm-btn">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Participant Modal */}
            {showEditModal && (
                <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Participant</h2>
                            <button onClick={() => setShowEditModal(false)} className="close-btn">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="modal-body">
                            {formError && <div className="modal-error-text" style={{ color: 'var(--red-400)', marginBottom: '16px', fontSize: '0.9rem', padding: '8px 12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '6px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>{formError}</div>}
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    placeholder="Enter name"
                                    className="modal-input"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>No. of Classes</label>
                                    <input
                                        type="number"
                                        value={newClasses}
                                        onChange={(e) => setNewClasses(e.target.value)}
                                        placeholder="0"
                                        className="modal-input"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Details</label>
                                    <div className="toggle-wrapper" onClick={() => setNewPaidStatus(!newPaidStatus)}>
                                        <div className={`status-toggle ${newPaidStatus ? 'active' : ''}`}>
                                            {newPaidStatus ? 'Paid' : 'Unpaid'}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Payment Date</label>
                                <div className="date-input-wrapper">
                                    <input
                                        type="date"
                                        value={newPaymentDate}
                                        onChange={(e) => setNewPaymentDate(e.target.value)}
                                        className="modal-input"
                                    />
                                    <span className="calendar-icon-indicator">📅</span>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button onClick={() => setShowEditModal(false)} className="cancel-btn">
                                Cancel
                            </button>
                            <button onClick={handleEditParticipant} className="confirm-btn">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Professional Time Picker Modal */}
            {showTimingsModal && (
                <div className="modal-overlay" onClick={() => setShowTimingsModal(false)}>
                    <div className="modal-content timings-modal" onClick={(e) => e.stopPropagation()}>
                        <h3>Edit Activity Timings</h3>
                        <p className="modal-description">Set the schedule for {activityName}</p>

                        <div className="time-range-group">
                            <label>First Session:</label>
                            <div className="time-pickers">
                                <select value={startHour} onChange={(e) => setStartHour(e.target.value)}>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                        <option key={h} value={h}>{h}</option>
                                    ))}
                                </select>
                                <span>:</span>
                                <select value={startMinute} onChange={(e) => setStartMinute(e.target.value)}>
                                    {['00', '15', '30', '45'].map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select value={startPeriod} onChange={(e) => setStartPeriod(e.target.value)}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                                <span>to</span>
                                <select value={endHour} onChange={(e) => setEndHour(e.target.value)}>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                        <option key={h} value={h}>{h}</option>
                                    ))}
                                </select>
                                <span>:</span>
                                <select value={endMinute} onChange={(e) => setEndMinute(e.target.value)}>
                                    {['00', '15', '30', '45'].map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select value={endPeriod} onChange={(e) => setEndPeriod(e.target.value)}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="time-range-group">
                            <label>Second Session:</label>
                            <div className="time-pickers">
                                <select value={startHour2} onChange={(e) => setStartHour2(e.target.value)}>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                        <option key={h} value={h}>{h}</option>
                                    ))}
                                </select>
                                <span>:</span>
                                <select value={startMinute2} onChange={(e) => setStartMinute2(e.target.value)}>
                                    {['00', '15', '30', '45'].map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select value={startPeriod2} onChange={(e) => setStartPeriod2(e.target.value)}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                                <span>to</span>
                                <select value={endHour2} onChange={(e) => setEndHour2(e.target.value)}>
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                                        <option key={h} value={h}>{h}</option>
                                    ))}
                                </select>
                                <span>:</span>
                                <select value={endMinute2} onChange={(e) => setEndMinute2(e.target.value)}>
                                    {['00', '15', '30', '45'].map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                                <select value={endPeriod2} onChange={(e) => setEndPeriod2(e.target.value)}>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-actions">
                            <button onClick={() => setShowTimingsModal(false)} className="cancel-btn">Cancel</button>
                            <button onClick={handleSaveTimings} className="confirm-btn">Save Timings</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Delete Confirmation Modal */}
            {deleteConfirmId && (
                <div className="modal-overlay" onClick={() => setDeleteConfirmId(null)}>
                    <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '350px' }}>
                        <div className="modal-header" style={{ borderBottom: 'none', paddingBottom: '0' }}>
                            <h2 style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Trash2 size={20} color="var(--red-400)" /> Delete User?
                            </h2>
                        </div>
                        <div className="modal-body" style={{ paddingTop: '16px' }}>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                                Are you sure you want to permanently delete <strong>{capitalizeName(currentParticipants.find(p => p.id === deleteConfirmId)?.name || 'this person')}</strong> from your tracking? This action cannot be undone.
                            </p>
                        </div>
                        <div className="modal-footer" style={{ borderTop: 'none', paddingTop: '8px', gap: '12px' }}>
                            <button onClick={() => setDeleteConfirmId(null)} className="cancel-btn">
                                Cancel
                            </button>
                            <button onClick={confirmDelete} className="confirm-btn" style={{ background: 'var(--red-500)' }}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div >
    );
};
