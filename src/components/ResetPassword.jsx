import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { Eye, EyeOff, Lock, CheckCircle, ArrowRight } from 'lucide-react';
import './Login.css'; // Re-use login styles

export const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const oobCode = searchParams.get('oobCode');

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    // Verify code on mount
    useEffect(() => {
        if (!oobCode) {
            setError('Invalid or missing reset code.');
            return;
        }
        verifyPasswordResetCode(auth, oobCode)
            .then((email) => {
                setEmail(email);
            })
            .catch((err) => {
                console.error("Invalid code:", err);
                setError('This link is invalid or has expired. Please request a new one.');
            });
    }, [oobCode]);

    const handleReset = async (e) => {
        e.preventDefault();
        setError('');

        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        setLoading(true);
        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            setSuccess(true);
        } catch (err) {
            console.error("Reset failed:", err);
            setError(err.message || "Failed to reset password.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="login-container">
                <div className="login-card animate-scale-in">
                    <div style={{
                        width: '80px', height: '80px', background: 'rgba(34, 197, 94, 0.15)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px auto', color: '#22c55e'
                    }}>
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="login-title" style={{ fontSize: '1.8rem' }}>Password Changed</h2>
                    <p className="login-subtitle">
                        Your password has been updated successfully.
                    </p>
                    <button onClick={() => navigate('/login')} className="login-btn">
                        Login Now <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">New Password</h2>
                <div className="login-subtitle">
                    {email ? `For ${email}` : 'Enter your new password below.'}
                </div>

                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)',
                        color: '#f87171', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '0.9rem'
                    }}>
                        {error}
                    </div>
                )}

                {!oobCode && !error ? (
                    <div className="spinner">Verifying link...</div>
                ) : (
                    <form className="form-group" onSubmit={handleReset}>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="styled-input"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                disabled={!!error || loading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                                    background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer'
                                }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            className="styled-input"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            disabled={!!error || loading}
                        />

                        <button type="submit" className="login-btn" disabled={!!error || loading}>
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                )}

                <div className="switch-text" onClick={() => navigate('/login')}>
                    Back to Login
                </div>
            </div>
        </div>
    );
};
