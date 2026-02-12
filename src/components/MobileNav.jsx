import React, { useState, useEffect, useRef } from 'react';
import { Home, Music, Lightbulb, BookOpen, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../App';

export const MobileNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useUser();
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    // Close menu when clicking outside
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowProfileMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navItemStyle = { cursor: 'pointer', padding: '8px', color: 'var(--text-muted)', transition: 'all 0.2s' };
    const activeStyle = { ...navItemStyle, color: 'var(--primary-400)', transform: 'translateY(-2px)' };

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '400px',
            background: 'var(--glass-bg)',
            backdropFilter: 'blur(12px)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-around',
            padding: '12px 16px',
            alignItems: 'center',
            boxShadow: 'var(--glass-shadow)',
            zIndex: 100
        }} className="mobile-nav">
            <Home size={24} style={location.pathname === '/' ? activeStyle : navItemStyle} onClick={() => navigate('/')} />
            <Music size={24} style={location.pathname === '/music' ? activeStyle : navItemStyle} onClick={() => navigate('/music')} />
            <Lightbulb size={24} style={location.pathname === '/heart' ? activeStyle : navItemStyle} onClick={() => navigate('/heart')} />
            <BookOpen size={24} style={location.pathname === '/tracker' ? activeStyle : navItemStyle} onClick={() => navigate('/tracker')} />

            <div style={{ position: 'relative' }} ref={menuRef}>
                {showProfileMenu && (
                    <div style={{
                        position: 'absolute',
                        bottom: '50px',
                        right: '-10px',
                        width: '140px',
                        background: 'var(--slate-800)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-lg)',
                        zIndex: 101,
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                        animation: 'fadeIn 0.2s ease-out'
                    }}>
                        <div
                            style={{ padding: '10px', color: 'var(--text-main)', cursor: 'pointer', borderRadius: '4px', fontSize: '14px' }}
                            onClick={() => { setShowProfileMenu(false); navigate('/profile'); }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                            Profile
                        </div>
                        <div style={{ height: '1px', background: 'var(--border-subtle)', margin: '2px 0' }}></div>
                        <div
                            style={{ padding: '10px', color: 'var(--accent-400)', cursor: 'pointer', borderRadius: '4px', fontSize: '14px' }}
                            onClick={() => { setShowProfileMenu(false); logout(); }}
                            onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                        >
                            Sign Out
                        </div>
                    </div>
                )}
                <User
                    size={24}
                    style={showProfileMenu || location.pathname === '/profile' ? activeStyle : navItemStyle}
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                />
            </div>
        </div>
    );
};
