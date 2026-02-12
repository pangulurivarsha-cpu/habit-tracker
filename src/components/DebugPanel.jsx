import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc, collection, getDocs, enableNetwork, disableNetwork, terminate, clearIndexedDbPersistence } from 'firebase/firestore';

/**
 * Debug Panel - Add this temporarily to help diagnose issues
 * Shows current user data and allows manual data fixes
 */
export const DebugPanel = () => {
    const [debugInfo, setDebugInfo] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isFixing, setIsFixing] = useState(false);

    // Helper: Firestore operation with timeout
    const withTimeout = (promise, ms = 5000) => {
        return Promise.race([
            promise,
            new Promise((_, reject) => setTimeout(() => reject(new Error('Firestore operation timed out')), ms))
        ]);
    };

    const resetFirestore = async () => {
        if (!confirm('This will clear Firestore cache and reload the page. Continue?')) return;

        setDebugInfo('Resetting Firestore...');
        try {
            await terminate(db);
            await clearIndexedDbPersistence(db);
            // Automatically reload since the client is now terminated
            window.location.reload();
        } catch (err) {
            setDebugInfo(`Reset Error: ${err.message}`);
            alert('Reset failed: ' + err.message);
        }
    };

    const checkConnectivity = async () => {
        setDebugInfo('Checking connectivity...');
        try {
            // Try to fetch a simple thing from Google (images work, so user should have general internet)
            const response = await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
            const internetStatus = response.type === 'opaque' ? 'Online' : 'Connection issues';
            setDebugInfo(`General Internet: ${internetStatus}\nFirestore State: ${db._terminated ? 'Terminated' : 'Active'}\nUID: ${auth.currentUser?.uid || 'Not logged in'}`);
        } catch (err) {
            setDebugInfo(`General Internet: Offline or Blocked\nError: ${err.message}`);
        }
    };

    const toggleNetwork = async (action) => {
        try {
            if (action === 'enable') {
                await enableNetwork(db);
                setDebugInfo('Firestore Network Enabled');
            } else {
                await disableNetwork(db);
                setDebugInfo('Firestore Network Disabled');
            }
        } catch (err) {
            setDebugInfo(`Network Toggle Error: ${err.message}`);
        }
    };

    const checkCurrentUser = async () => {
        const user = auth.currentUser;
        if (!user) {
            setDebugInfo('No user logged in (Firebase Auth)');
            return;
        }

        try {
            setDebugInfo('Fetching (5s timeout)...');
            const userDocRef = doc(db, 'users', user.uid);
            const userDoc = await withTimeout(getDoc(userDocRef));

            const info = {
                'Firebase Auth UID': user.uid,
                'Firebase Auth Email': user.email,
                'Firebase Auth DisplayName': user.displayName,
                'Firestore Document Exists': userDoc.exists(),
                'Firestore Data': userDoc.exists() ? userDoc.data() : 'No document found'
            };

            setDebugInfo(JSON.stringify(info, null, 2));
        } catch (err) {
            if (err.code === 'unavailable' || err.message.includes('offline')) {
                setDebugInfo('ERROR: Firestore thinks you are OFFLINE.\n' + err.message + '\n\nTry clicking "Force Reconnect" below.');
            } else {
                setDebugInfo('Error: ' + err.message);
            }
        }
    };

    const fixUserData = async () => {
        const user = auth.currentUser;
        if (!user) {
            alert('No user logged in');
            return;
        }

        setIsFixing(true);
        try {
            const userDocRef = doc(db, 'users', user.uid);

            // Try server first, if fails we still try to set
            let existingData = {};
            try {
                // Try to get existing data but don't hang if offline
                const userDoc = await withTimeout(getDoc(userDocRef), 2000).catch(() => null);
                if (userDoc && userDoc.exists()) existingData = userDoc.data();
            } catch (e) {
                console.warn("Offline or timeout during read - proceeding with defaults");
            }

            // Create complete user data
            const completeData = {
                id: user.uid,
                name: existingData.name || user.displayName || 'User',
                email: existingData.email || user.email,
                mobile: existingData.mobile || '',
                hiddenSports: existingData.hiddenSports || [],
                created_at: existingData.created_at || new Date().toISOString()
            };

            // Attempt write with timeout
            await withTimeout(setDoc(userDocRef, completeData, { merge: true }), 10000);

            setDebugInfo('SUCCESS: Data written to Firestore!');
            alert('User data fixed! Reloading page...');
            window.location.reload();
        } catch (err) {
            alert('Error fixing data: ' + err.message);
        } finally {
            setIsFixing(false);
        }
    };

    const listAllUsers = async () => {
        try {
            const usersSnapshot = await getDocs(collection(db, 'users'));
            const users = [];
            usersSnapshot.forEach(doc => {
                users.push({ id: doc.id, ...doc.data() });
            });
            setDebugInfo('All users:\n' + JSON.stringify(users, null, 2));
        } catch (err) {
            setDebugInfo('Error: ' + err.message);
        }
    };

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                style={{
                    position: 'fixed',
                    bottom: '80px',
                    right: '20px',
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    padding: '10px 15px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    zIndex: 1000,
                    fontSize: '12px',
                    fontWeight: 600
                }}
            >
                🐛 Debug
            </button>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            background: 'rgba(0,0,0,0.95)',
            color: 'white',
            border: '1px solid #64ffda',
            borderRadius: '12px',
            padding: '15px',
            maxWidth: '400px',
            maxHeight: '500px',
            overflow: 'auto',
            zIndex: 1000,
            fontSize: '12px',
            fontFamily: 'monospace'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong>Debug Panel</strong>
                <button onClick={() => setIsVisible(false)} style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>×</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
                <button onClick={checkConnectivity} style={{
                    background: '#38b6ff',
                    color: 'white', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600
                }}>
                    Check Connectivity
                </button>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => toggleNetwork('enable')} style={{
                        flex: 1, background: '#64ffda', color: '#0c1a2c', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '10px'
                    }}>
                        Force Online
                    </button>
                    <button onClick={() => toggleNetwork('disable')} style={{
                        flex: 1, background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '10px'
                    }}>
                        Go Offline
                    </button>
                </div>
                <button onClick={checkCurrentUser} style={{
                    background: '#64ffda',
                    color: '#0c1a2c',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600
                }}>
                    Check Firestore Data
                </button>
                <button
                    onClick={fixUserData}
                    disabled={isFixing}
                    style={{
                        background: '#ff6b6b',
                        color: 'white',
                        border: 'none',
                        padding: '8px',
                        borderRadius: '6px',
                        cursor: isFixing ? 'not-allowed' : 'pointer',
                        fontWeight: 600,
                        opacity: isFixing ? 0.7 : 1,
                        marginBottom: '10px'
                    }}>
                    {isFixing ? 'Fixing...' : 'Fix User Data'}
                </button>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', margin: '5px 0' }}></div>

                <button onClick={resetFirestore} style={{
                    background: 'none',
                    border: '1px solid #ff6b6b',
                    color: '#ff6b6b',
                    padding: '8px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '11px'
                }}>
                    Reset Firestore (Clear Cache)
                </button>
            </div>

            {debugInfo && (
                <pre style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '10px',
                    borderRadius: '6px',
                    overflow: 'auto',
                    maxHeight: '300px',
                    fontSize: '11px',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-all'
                }}>
                    {debugInfo}
                </pre>
            )}
        </div>
    );
};
