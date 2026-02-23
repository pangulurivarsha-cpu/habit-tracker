import React, { useState, useRef } from 'react';
import { useUser } from '../App';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Mail, Phone, User as UserIcon, Camera, Edit2, Check, X, ChevronRight } from 'lucide-react';
import { updatePassword, updateProfile, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

export const Profile = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    // UI State
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingMobile, setIsEditingMobile] = useState(false);
    const [editedName, setEditedName] = useState('');
    const [editedMobile, setEditedMobile] = useState('');
    const [profileImage, setProfileImage] = useState(localStorage.getItem('profileImage') || null);

    // Password Form State
    // Password Form State
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Safe access to user data
    const userData = {
        name: user?.name || 'User',
        mobile: user?.mobile,
        email: user?.email
    };

    const handleImageUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const imageData = event.target?.result;
                setProfileImage(imageData);
                localStorage.setItem('profileImage', imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setProfileImage(null);
        localStorage.removeItem('profileImage');
    };

    const handleNameEdit = () => {
        setEditedName(currentName);
        setIsEditingName(true);
    };

    const handleNameSave = async () => {
        try {
            // Allow any value, including empty string or email
            const newName = editedName.trim();

            // Update Firebase Auth profile
            const currentUser = auth.currentUser;
            if (currentUser) {
                await updateProfile(currentUser, {
                    displayName: newName || 'User' // Use 'User' if empty
                });
            }

            // Update Firestore
            if (user?.id) {
                await updateDoc(doc(db, 'users', user.id), {
                    name: newName || 'User' // Use 'User' if empty
                });
            }

            // Update local state and localStorage
            const updatedUser = { ...user, name: newName || 'User' };
            setUser(updatedUser);
            localStorage.setItem('currentUser', JSON.stringify(updatedUser));

            console.log('✅ Name saved successfully:', newName || 'User');
            // Close edit mode immediately to show the change
            setIsEditingName(false);
        } catch (err) {
            console.error('Error saving name:', err);
            alert('❌ Failed to save name: ' + err.message);
            setIsEditingName(false);
        }
    };

    const handleMobileEdit = () => {
        setEditedMobile(currentMobile);
        setIsEditingMobile(true);
    };

    const handleMobileSave = async () => {
        if (editedMobile.trim()) {
            try {
                // Update Firestore
                if (user?.id) {
                    await updateDoc(doc(db, 'users', user.id), {
                        mobile: editedMobile.trim()
                    });
                }

                // Update local state and localStorage
                const updatedUser = { ...user, mobile: editedMobile.trim() };
                setUser(updatedUser);
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
                localStorage.setItem('userMobile', editedMobile.trim());
                localStorage.setItem(`mobile_${user.email}`, editedMobile.trim());

                console.log('✅ Mobile saved successfully:', editedMobile.trim());
                // Close edit mode immediately to show the change
                setIsEditingMobile(false);
            } catch (err) {
                console.error('Error saving mobile:', err);
                alert('❌ Failed to save mobile: ' + err.message);
                setIsEditingMobile(false);
            }
        } else {
            setIsEditingMobile(false);
        }
    };

    const handlePasswordUpdate = async () => {
        if (!newPassword || newPassword !== confirmPassword) {
            alert("Passwords do not match or are empty.");
            return;
        }

        if (!currentPassword) {
            alert("Please enter your current password to confirm changes.");
            return;
        }

        try {
            const user = auth.currentUser;
            if (user && user.email) {
                // Re-authenticate to prevent 'auth/requires-recent-login'
                const credential = EmailAuthProvider.credential(user.email, currentPassword);
                await reauthenticateWithCredential(user, credential);

                await updatePassword(user, newPassword);
                alert("Password updated successfully!");
                setIsChangingPassword(false);
                setNewPassword('');
                setConfirmPassword('');
                setCurrentPassword('');
            } else {
                alert("User session not found. Please log in again.");
            }
        } catch (err) {
            console.error("Password update error:", err);
            if (err.code === 'auth/wrong-password') {
                alert("Incorrect current password.");
            } else {
                alert(err.message || "Failed to update password");
            }
        }
    };

    // Get current user data (refreshes when user state changes)
    const currentName = user?.name || 'User';
    const currentMobile = user?.mobile || '';
    const currentEmail = user?.email || '';

    return (
        <div className="page-container animate-fade-in">
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <button
                    onClick={() => {
                        if (isChangingPassword) setIsChangingPassword(false);
                        else navigate('/');
                    }}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '10px' }}
                >
                    <ArrowLeft size={24} />
                </button>
                <h2 style={{ marginLeft: '10px', fontSize: '20px', fontWeight: 600 }}>
                    {isChangingPassword ? 'Change Password' : 'Profile'}
                </h2>
            </div>

            {/* Content Switcher */}
            {!isChangingPassword ? (
                <>
                    {/* VIEW PROFILE MODE */}

                    {/* Avatar Section */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: profileImage ? 'transparent' : 'linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '15px',
                            position: 'relative',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
                            overflow: 'hidden',
                            border: '3px solid rgba(100, 255, 218, 0.2)'
                        }}>
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                                <UserIcon size={60} color="#0c1a2c" />
                            )}
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                style={{ display: 'none' }}
                            />

                            {/* Camera Button */}
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    right: '0',
                                    backgroundColor: 'var(--primary-600)',
                                    borderRadius: '50%',
                                    padding: '8px',
                                    border: '3px solid var(--bg-main)', // Creates a 'cutout' look
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                    zIndex: 10
                                }}
                                className="hover:scale-110 active:scale-95"
                            >
                                <Camera size={16} color="white" />
                            </div>

                            {/* Remove Button (top-right, subtle) */}
                            {profileImage && (
                                <div
                                    onClick={handleRemoveImage}
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        right: '0',
                                        backgroundColor: 'var(--slate-700)',
                                        borderRadius: '50%',
                                        padding: '6px',
                                        border: '3px solid var(--bg-main)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                                        zIndex: 10
                                    }}
                                >
                                    <X size={12} color="var(--slate-300)" />
                                </div>
                            )}
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '5px' }}>{currentName}</h3>
                        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Tap camera to change photo</span>
                    </div>

                    {/* Details Card */}
                    <div className="glass" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                        {/* Name */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                <UserIcon size={20} color="#64ffda" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Full Name</div>
                                {isEditingName ? (
                                    <input
                                        type="text"
                                        value={editedName}
                                        onChange={(e) => setEditedName(e.target.value)}
                                        style={{
                                            background: 'rgba(100,255,218,0.1)',
                                            border: '1px solid #64ffda',
                                            borderRadius: '8px',
                                            padding: '8px',
                                            color: 'white',
                                            fontSize: '16px',
                                            width: '100%',
                                            marginTop: '5px'
                                        }}
                                        autoFocus
                                    />
                                ) : (
                                    <div style={{ fontSize: '16px', fontWeight: 500 }}>{currentName}</div>
                                )}
                            </div>
                            {isEditingName ? (
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={handleNameSave} style={{ background: '#64ffda', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                        <Check size={16} color="#0c1a2c" />
                                    </button>
                                    <button onClick={() => setIsEditingName(false)} style={{ background: 'rgba(255,107,107,0.3)', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                        <X size={16} color="white" />
                                    </button>
                                </div>
                            ) : (
                                <button onClick={handleNameEdit} style={{ background: 'rgba(100,255,218,0.1)', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                    <Edit2 size={16} color="#64ffda" />
                                </button>
                            )}
                        </div>

                        {/* Mobile */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                <Phone size={20} color="#64ffda" />
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Mobile Number</div>
                                {isEditingMobile ? (
                                    <input
                                        type="tel"
                                        value={editedMobile}
                                        onChange={(e) => setEditedMobile(e.target.value)}
                                        style={{
                                            background: 'rgba(100,255,218,0.1)',
                                            border: '1px solid #64ffda',
                                            borderRadius: '8px',
                                            padding: '8px',
                                            color: 'white',
                                            fontSize: '16px',
                                            width: '100%',
                                            marginTop: '5px'
                                        }}
                                        autoFocus
                                    />
                                ) : (
                                    <div style={{ fontSize: '16px', fontWeight: 500 }}>{currentMobile || 'Not provided'}</div>
                                )}
                            </div>
                            {isEditingMobile ? (
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button onClick={handleMobileSave} style={{ background: '#64ffda', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                        <Check size={16} color="#0c1a2c" />
                                    </button>
                                    <button onClick={() => setIsEditingMobile(false)} style={{ background: 'rgba(255,107,107,0.3)', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                        <X size={16} color="white" />
                                    </button>
                                </div>
                            ) : (
                                <button onClick={handleMobileEdit} style={{ background: 'rgba(100,255,218,0.1)', border: 'none', borderRadius: '6px', padding: '6px', cursor: 'pointer' }}>
                                    <Edit2 size={16} color="#64ffda" />
                                </button>
                            )}
                        </div>

                        {/* Email */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px 0' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                <Mail size={20} color="#64ffda" />
                            </div>
                            <div>
                                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Email</div>
                                <div style={{ fontSize: '16px', fontWeight: 500 }}>{currentEmail || 'Not provided'}</div>
                            </div>
                        </div>

                    </div>

                    {/* Change Password Button */}
                    <div
                        className="glass"
                        style={{
                            marginTop: '20px',
                            padding: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer'
                        }}
                        onClick={() => setIsChangingPassword(true)}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                                <Lock size={20} color="#64ffda" />
                            </div>
                            <span style={{ fontSize: '16px', fontWeight: 500 }}>Change Password</span>
                        </div>
                        <ChevronRight size={20} color="rgba(255,255,255,0.5)" />
                    </div>
                </>
            ) : (
                <div className="glass animate-slide-up" style={{ padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* CHANGE PASSWORD MODE */}

                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <div style={{
                            background: 'rgba(100, 255, 218, 0.1)',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '0 auto 15px auto'
                        }}>
                            <Lock size={30} color="#64ffda" />
                        </div>
                        <h3 style={{ fontSize: '18px', fontWeight: 500 }}>Create New Password</h3>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Your new password must be different from previous used passwords.</p>
                    </div>

                    <div className="form-group">
                        <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginLeft: '5px' }}>Current Password</label>
                        <input
                            type="password"
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '16px',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%'
                            }}
                            placeholder="Enter current password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginLeft: '5px' }}>New Password</label>
                        <input
                            type="password"
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '16px',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%'
                            }}
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginLeft: '5px' }}>Confirm Password</label>
                        <input
                            type="password"
                            style={{
                                background: 'rgba(0,0,0,0.3)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '16px',
                                borderRadius: '12px',
                                color: 'white',
                                outline: 'none',
                                width: '100%'
                            }}
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handlePasswordUpdate}
                        style={{
                            marginTop: '20px',
                            background: '#64ffda',
                            color: '#0c1a2c',
                            border: 'none',
                            padding: '16px',
                            borderRadius: '12px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            width: '100%'
                        }}
                    >
                        Update Password
                    </button>

                    <button
                        onClick={() => setIsChangingPassword(false)}
                        style={{
                            background: 'transparent',
                            color: 'rgba(255,255,255,0.6)',
                            border: 'none',
                            padding: '10px',
                            fontSize: '14px',
                            cursor: 'pointer',
                            marginTop: '5px'
                        }}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};
