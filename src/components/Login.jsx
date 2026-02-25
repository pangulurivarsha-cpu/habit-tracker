import React, { useState } from 'react';
import { useUser } from '../App';
import { ArrowRight, Mail, CheckCircle, AlertTriangle } from 'lucide-react';
import './Login.css';
import { auth, db } from '../firebase';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';

export const Login = () => {
    const { login } = useUser();
    // API_URL is removed as we use Firebase SDK

    // View State: 'login', 'signup', 'forgotPassword'
    const [view, setView] = useState('login');

    // Login Form State
    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Sign Up Form State
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Forgot Password Form State
    const [forgotEmail, setForgotEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            let emailToUse = loginIdentifier;

            // Check if input looks like a mobile number (digits only, possibly with + prefix)
            const isMobileNumber = /^[+]?[0-9]{10,15}$/.test(loginIdentifier.trim());

            if (isMobileNumber) {
                console.log('Mobile number detected:', loginIdentifier.trim());

                // First try localStorage (faster and works offline)
                const foundEmail = findEmailByMobile(loginIdentifier.trim());
                if (foundEmail) {
                    console.log('Found email in localStorage:', foundEmail);
                    emailToUse = foundEmail;
                } else {
                    // Fallback to Firestore if localStorage doesn't have it
                    try {
                        const usersRef = collection(db, 'users');
                        const q = query(usersRef, where('mobile', '==', loginIdentifier.trim()));
                        const querySnapshot = await getDocs(q);

                        console.log('Query results:', querySnapshot.size, 'documents found');

                        if (querySnapshot.empty) {
                            alert('No account found with this mobile number');
                            return;
                        }

                        const userDoc = querySnapshot.docs[0];
                        const userData = userDoc.data();
                        console.log('Found user data:', userData);
                        emailToUse = userData.email;

                        if (!emailToUse) {
                            alert('Account found but no email associated. Please contact support.');
                            return;
                        }
                    } catch (firestoreErr) {
                        console.error('Firestore lookup failed:', firestoreErr.message);
                        alert('Cannot verify mobile number. Firestore is unavailable. Try logging in with email instead.');
                        return;
                    }
                }
            }

            // Login with email (either provided directly or looked up from mobile)
            await signInWithEmailAndPassword(auth, emailToUse, loginPassword);
        } catch (err) {
            console.error("Login error:", err);
            alert(err.message || 'Login failed');
        }
    };

    // Helper function to find email by mobile in localStorage
    const findEmailByMobile = (mobile) => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('mobile_')) {
                const storedMobile = localStorage.getItem(key);
                if (storedMobile === mobile) {
                    // Extract email from key (format: mobile_email@example.com)
                    return key.substring(7); // Remove 'mobile_' prefix
                }
            }
        }
        return null;
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        if (signupPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, signupPassword);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: fullName
            });

            // Store mobile in localStorage as fallback (always works)
            if (mobile) {
                localStorage.setItem(`mobile_${email}`, mobile);
                console.log('Mobile saved to localStorage:', mobile);
            }

            // Try to store in Firestore (may fail due to connectivity)
            try {
                await setDoc(doc(db, 'users', user.uid), {
                    id: user.uid,
                    name: fullName,
                    email: email,
                    mobile: mobile,
                    hiddenSports: [],
                    created_at: new Date().toISOString()
                });
                console.log('Data saved to Firestore');
            } catch (firestoreErr) {
                console.warn('Firestore save failed (using localStorage fallback):', firestoreErr.message);
            }

            // onAuthStateChanged in App.jsx will handle the rest
        } catch (err) {
            console.error("Signup error:", err);
            alert(err.message || 'Signup failed');
        }
    };

    const handleForgotPasswordSubmit = async (e) => {
        e.preventDefault();
        const emailToReset = forgotEmail.trim();
        if (!emailToReset) {
            alert("Please enter your email address.");
            return;
        }

        console.log(`Attempting to send password reset email to: '${emailToReset}'`);

        try {
            await sendPasswordResetEmail(auth, emailToReset);
            console.log("Firebase reported success (email sent or queued).");
            setResetSent(true);
        } catch (error) {
            console.error("Error sending password reset email:", error);
            if (error.code === 'auth/user-not-found') {
                // This block might NOT run if Email Enumeration Protection is enabled in Firebase Console.
                alert("No account found with this email address.");
            } else {
                alert("Failed to send reset email: " + error.message);
            }
        }
    };

    if (view === 'forgotPassword') {
        return (
            <div className="login-container">
                <div className="login-card">
                    {resetSent ? (
                        <div className="animate-scale-in" style={{ textAlign: 'center', width: '100%' }}>
                            <div style={{
                                width: '80px', height: '80px', background: 'rgba(6, 182, 212, 0.15)',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 24px auto', color: 'var(--primary-400)'
                            }}>
                                <Mail size={40} />
                            </div>
                            <h2 className="login-title" style={{ fontSize: '2rem' }}>Check your mail</h2>
                            <p className="login-subtitle" style={{ marginBottom: '24px' }}>
                                We have sent a password recover instruction to your email.
                            </p>

                            <div style={{
                                background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)',
                                borderRadius: '12px', padding: '16px', marginBottom: '32px', textAlign: 'left',
                                display: 'flex', gap: '12px', alignItems: 'start'
                            }}>
                                <AlertTriangle size={20} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ fontSize: '0.9rem', color: '#fbbf24' }}>
                                    Did not receive the email? Check your <strong>Spam filter</strong>, or try another email address.
                                </span>
                            </div>

                            <button onClick={() => { setView('login'); setResetSent(false); }} className="login-btn">
                                Back into Login
                            </button>

                            <div className="switch-text" onClick={() => setResetSent(false)}>
                                Try another email
                            </div>
                        </div>
                    ) : (
                        <>
                            <h2 className="login-title">Reset Password</h2>
                            <form className="form-group" onSubmit={handleForgotPasswordSubmit}>
                                <div className="login-subtitle">
                                    Enter your email address to receive a password reset link.
                                </div>
                                <input
                                    type="email"
                                    className="styled-input"
                                    placeholder="Email ID"
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
                                />

                                <button type="submit" className="login-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    Send Link <ArrowRight size={16} />
                                </button>
                            </form>

                            <div className="switch-text" onClick={() => setView('login')}>
                                Back to Login
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    }

    if (view === 'signup') {
        return (
            <div className="login-container">
                <div className="login-card">
                    <h2 className="login-title">Sign Up</h2>
                    <form className="form-group" onSubmit={handleSignUpSubmit}>
                        <input
                            type="text"
                            className="styled-input"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            type="tel"
                            className="styled-input"
                            placeholder="Mobile Number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                        />
                        <input
                            type="email"
                            className="styled-input"
                            placeholder="Email ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="styled-input"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="styled-input"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button type="submit" className="create-account-btn">
                            Create Account <ArrowRight size={16} />
                        </button>
                    </form>

                    <div className="already-have-account" onClick={() => setView('login')}>
                        Already have an account? Sign In
                    </div>
                </div>
            </div>
        );
    }

    // Default: Login View
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form className="form-group" onSubmit={handleLoginSubmit}>
                    <input
                        type="text"
                        className="styled-input"
                        placeholder="Email/Mobile Number"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
                    />
                    <input
                        type="password"
                        className="styled-input"
                        placeholder="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                    <div className="forgot-password" onClick={() => setView('forgotPassword')}>
                        Forgot Password?
                    </div>

                    <button type="submit" className="login-btn">
                        Login <ArrowRight size={16} />
                    </button>
                </form>

                <div className="switch-text" onClick={() => setView('signup')}>
                    Don't have account? sign up
                </div>
            </div>
        </div>
    );
};
