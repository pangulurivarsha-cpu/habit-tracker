import React from 'react';
import { Home, Music, Lightbulb, BookOpen, User, LogOut, LayoutDashboard } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../App';

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useUser();

    // Helper for nav items
    const NavItem = ({ icon: Icon, label, path, danger = false, action }) => {
        const isActive = location.pathname === path;

        return (
            <div
                onClick={() => action ? action() : navigate(path)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    color: danger ? '#ef4444' : (isActive ? 'white' : 'var(--text-muted)'),
                    background: isActive ? 'var(--primary-600)' : 'transparent',
                    transition: 'all 0.2s ease',
                    marginBottom: '4px'
                }}
                onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
            >
                <Icon size={20} />
                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{label}</span>
            </div>
        );
    };

    return (
        <aside style={{
            width: '260px',
            background: 'var(--slate-900)',
            borderRight: '1px solid var(--border-subtle)',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
            position: 'sticky',
            top: 0
        }} className="desktop-sidebar">
            {/* Logo area */}
            <div style={{ marginBottom: '40px', padding: '0 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--primary-500)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <LayoutDashboard size={18} color="white" />
                </div>
                <h2 style={{ fontSize: '1.25rem', color: 'white' }}>HabitFlow</h2>
            </div>

            {/* Navigation Items */}
            <nav style={{ flex: 1 }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-500)', fontWeight: 600, padding: '0 12px 12px' }}>
                    Menu
                </div>
                <NavItem icon={Home} label="Dashboard" path="/" />
                <NavItem icon={BookOpen} label="Stories" path="/tracker" />
                <NavItem icon={Music} label="Music" path="/music" />
                <NavItem icon={Lightbulb} label="Inspiration" path="/heart" />
            </nav>

            {/* User Footer - Merged Profile Access */}
            <div style={{ paddingBottom: '20px' }}>
                <div style={{ margin: '0 0 16px 0', height: '1px', background: 'var(--border-subtle)' }}></div>

                {/* Clickable User Card -> Goes to Profile */}
                <div
                    onClick={() => navigate('/profile')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        background: location.pathname === '/profile' ? 'var(--primary-600)' : 'transparent',
                        marginBottom: '8px'
                    }}
                    onMouseEnter={(e) => {
                        if (location.pathname !== '/profile') e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }}
                    onMouseLeave={(e) => {
                        if (location.pathname !== '/profile') e.currentTarget.style.background = 'transparent';
                    }}
                >
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.rem' }}>
                        {user?.name?.[0] || 'U'}
                    </div>
                    <div style={{ overflow: 'hidden', flex: 1 }}>
                        <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {user?.name || 'User'}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>View Profile</div>
                    </div>
                </div>

                <NavItem icon={LogOut} label="Sign Out" path="#" danger action={logout} />
            </div>
        </aside>
    );
};
