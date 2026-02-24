import React, { useState, useEffect, useRef } from 'react';
import { useHabits, useUser } from '../App';
import { useNavigate } from 'react-router-dom';
import { Plus, X, MoreVertical, Trash2 } from 'lucide-react';
import './Dashboard.css';

const STATIC_IMAGES = {
    'tennis': 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
    'badminton': 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80',
    'pickleball': 'https://images.unsplash.com/photo-1698687777085-f55a15998a1a?auto=format&fit=crop&q=80',
    'basketball': 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80',
    'soccer': 'https://images.unsplash.com/photo-1518605368461-1ee12522bdcc?auto=format&fit=crop&q=80',
    'football': 'https://images.unsplash.com/photo-1518605368461-1ee12522bdcc?auto=format&fit=crop&q=80',
    'swimming': 'https://images.unsplash.com/photo-1519315901367-f34f9274ceb3?auto=format&fit=crop&q=80',
    'gym': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    'workout': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    'running': 'https://images.unsplash.com/photo-1552674605-15cff2f2be31?auto=format&fit=crop&q=80',
    'yoga': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    'volleyball': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80',
    'cricket': 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
    'baseball': 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&q=80',
    'boxing': 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80',
    'martialarts': 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80',
    'pilates': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80',
    'dance': 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80',
    'cycling': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80',
    'zumba': 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80', // using pilates/dance vibe
    'squash': 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80' // using badminton vibe
};

// Return a fixed, gorgeous image based on the activity name. 
const getActivityImage = (name) => {
    // If user provided a manual custom URL, we would traditionally use that, but here we enforce static matching
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the exact cleaned name matches a known key
    if (STATIC_IMAGES[cleanName]) {
        return STATIC_IMAGES[cleanName];
    }

    // Check if the cleaned name contains any of the known keys as a substring (e.g. 'morning yoga')
    const matchedKey = Object.keys(STATIC_IMAGES).find(key => cleanName.includes(key));
    if (matchedKey) {
        return STATIC_IMAGES[matchedKey];
    }

    // Default beautiful abstract/generic active background if no keywords match
    return 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80';
};

const DEFAULT_ACTIVITIES = [
    { id: 'tennis', name: 'Tennis' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'pickleball', name: 'Pickleball' },
    { id: 'basketball', name: 'Basket Ball' },
];

export const Dashboard = () => {
    const { user } = useUser();
    const { activities, addActivity, deleteActivity, updateActivityImage } = useHabits();
    const navigate = useNavigate();

    const [isAdding, setIsAdding] = useState(false);
    const [newActivityName, setNewActivityName] = useState('');
    // const [newActivityImage, setNewActivityImage] = useState(''); // Removed as per request
    const [activeMenu, setActiveMenu] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    // Edit Image State
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);
    const [editImageUrl, setEditImageUrl] = useState('');

    const menuRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveMenu(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Remove the migration effect - no longer needed
    // Images are now instant gradients

    const handleSelectActivity = (activity) => {
        navigate(`/activity/${encodeURIComponent(activity.name)}`);
    };

    const handleAddActivity = async (e) => {
        e.preventDefault();
        if (!newActivityName.trim()) return;
        await addActivity(newActivityName.trim()); // Auto-image only
        setNewActivityName('');
        // setNewActivityImage(''); // Removed

        // Show success message
        setShowSuccess(true);

        // Auto-close modal faster (0.5s) for snappy feel
        setTimeout(() => {
            setIsAdding(false);
            setShowSuccess(false);
        }, 500);
    };

    const handleEditImage = (activity) => {
        setEditingActivity(activity);
        setEditImageUrl(activity.imgUrl || '');
        setIsEditingImage(true);
        setActiveMenu(null);
    }

    const saveImageUpdate = async () => {
        if (editingActivity && editImageUrl) {
            await updateActivityImage(editingActivity.id, editImageUrl);
            setIsEditingImage(false);
            setEditingActivity(null);
            setEditImageUrl('');
        }
    };

    const handleDeleteActivity = async (e, activity) => {
        e.stopPropagation();
        if (!window.confirm(`Delete ${activity.name}?`)) return;
        await deleteActivity(activity);
        setActiveMenu(null);
    };

    const hiddenDefaults = user?.hiddenSports || [];
    const visibleDefaults = DEFAULT_ACTIVITIES.filter(s => !hiddenDefaults.includes(s.id));
    const allActivities = [...visibleDefaults, ...activities];

    // Greeting logic
    const today = new Date();
    const hour = today.getHours();
    let greeting = "Good morning";
    if (hour >= 12 && hour < 17) greeting = "Good afternoon";
    else if (hour >= 17) greeting = "Good evening";

    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear();
    const getOrdinal = (n) => {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };
    const formattedDate = `${getOrdinal(day)} ${month} ${year}`;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header animate-fade-in" style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <div>
                        <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: 500 }}>{formattedDate}</div>
                        <h1 className="greeting-text" style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>
                            {greeting}, <span className="text-gradient">{user?.name || "User"}</span>
                        </h1>
                    </div>
                    {/* Desktop Add Button (Hidden on Mobile) */}
                    <button
                        className="btn btn-primary desktop-only"
                        onClick={() => setIsAdding(true)}
                        style={{ display: window.innerWidth > 768 ? 'inline-flex' : 'none' }}
                    >
                        <Plus size={20} /> Add Activity
                    </button>
                </div>
            </header>

            {/* Activities Grid */}
            <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white' }}>Your Activities</h3>
                <span onClick={() => setIsAdding(true)} style={{ color: 'var(--primary-400)', cursor: 'pointer', fontSize: '0.9rem', display: window.innerWidth <= 768 ? 'block' : 'none' }}>+ Add New</span>
            </div>

            <div className="grid-responsive animate-slide-up">
                {allActivities.map((activity, index) => (
                    <div
                        key={activity.id || index}
                        className="activity-card card"
                        style={{
                            position: 'relative',
                            padding: 0,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            height: '200px',
                            border: '1px solid var(--border-subtle)'
                        }}
                        onClick={() => handleSelectActivity(activity)}
                    >
                        {/* Fast Unsplash image background */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${getActivityImage(activity.name)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0
                        }}></div>
                        {/* Dark gradient overlay for text readability */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))',
                            zIndex: 1
                        }}></div>

                        {/* Content */}
                        <div style={{ position: 'relative', zIndex: 2, padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>{activity.name}</span>
                                <div
                                    className="icon-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveMenu(activeMenu === activity.id ? null : activity.id);
                                    }}
                                    style={{ color: 'rgba(255,255,255,0.7)' }}
                                >
                                    <MoreVertical size={18} />
                                </div>
                            </div>
                        </div>

                        {/* Dropdown Menu */}
                        {activeMenu === activity.id && (
                            <div style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'var(--slate-800)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '8px',
                                padding: '8px',
                                zIndex: 10,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                width: '120px'
                            }} ref={menuRef} className="fade-in">
                                <div
                                    onClick={(e) => { e.stopPropagation(); handleEditImage(activity); }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', color: 'var(--text-main)', fontSize: '0.85rem', cursor: 'pointer', marginBottom: '4px' }}
                                >
                                    <span>🖼️ Edit Image</span>
                                </div>
                                <div
                                    onClick={(e) => handleDeleteActivity(e, activity)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', color: '#ef4444', fontSize: '0.85rem', cursor: 'pointer' }}
                                >
                                    <Trash2 size={14} /> Delete
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                {/* Add New Card (Empty State) */}
                <div
                    className="card activity-card"
                    onClick={() => setIsAdding(true)}
                    style={{
                        height: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px dashed var(--border-subtle)',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: 'var(--text-muted)',
                        gap: '12px'
                    }}
                >
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Plus size={20} />
                    </div>
                    <span>Add New Activity</span>
                </div>
            </div>

            {/* Modal: Add New Activity */}
            {isAdding && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
                }} onClick={() => setIsAdding(false)}>
                    <div className="card animate-scale-in" style={{ width: '100%', maxWidth: '400px', background: 'var(--slate-900)' }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>New Activity</h3>
                            <X size={20} onClick={() => setIsAdding(false)} style={{ cursor: 'pointer', color: 'white' }} />
                        </div>
                        <form onSubmit={handleAddActivity}>
                            <input
                                autoFocus
                                className="input"
                                placeholder="Activity Name (e.g., Yoga)"
                                value={newActivityName}
                                onChange={(e) => setNewActivityName(e.target.value)}
                                style={{ marginBottom: '20px' }}
                            />
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Activity</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Modal: Edit Image */}
            {isEditingImage && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
                }} onClick={() => setIsEditingImage(false)}>
                    <div className="card animate-scale-in" style={{ width: '100%', maxWidth: '400px', background: 'var(--slate-900)' }} onClick={e => e.stopPropagation()}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                            <h3>Edit Image</h3>
                            <X size={20} onClick={() => setIsEditingImage(false)} style={{ cursor: 'pointer', color: 'white' }} />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <img
                                src={editImageUrl || 'https://via.placeholder.com/400x200?text=No+Image'}
                                alt="Preview"
                                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px', border: '1px solid var(--border-subtle)' }}
                            />
                            <input
                                autoFocus
                                className="input"
                                placeholder="Paste new image URL..."
                                value={editImageUrl}
                                onChange={(e) => setEditImageUrl(e.target.value)}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button onClick={() => setIsEditingImage(false)} className="btn btn-secondary" style={{ flex: 1 }}>Cancel</button>
                            <button onClick={saveImageUpdate} className="btn btn-primary" style={{ flex: 1 }}>Save Image</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Toast */}
            {showSuccess && (
                <div style={{
                    position: 'fixed',
                    bottom: '90px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent-500)',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontWeight: 500,
                    boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.4)',
                    animation: 'fadeIn 0.3s ease-out',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <span>✨ Activity Added!</span>
                </div>
            )}
        </div>
    );
};
