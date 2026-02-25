import React, { useState } from 'react';
import { Home, Music, Lightbulb, BookOpen, User, LogOut, LayoutDashboard, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../App';

export const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logout } = useUser();

    // Helper for nav items
    const NavItem = ({ icon: Icon, label, path, danger = false, action }) => {
        const isActive = location.pathname === path;

        return (
            <div
                onClick={() => action ? action() : navigate(path)}
                title={isCollapsed ? label : ""} // Tooltip when collapsed
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: isCollapsed ? '12px' : '12px 16px',
                    justifyContent: isCollapsed ? 'center' : 'flex-start',
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
                <Icon size={20} style={{ flexShrink: 0 }} />
                {!isCollapsed && <span style={{ fontWeight: 500, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>{label}</span>}
            </div>
        );
    };

    return (
        <aside style={{
            width: isCollapsed ? '80px' : '260px',
            transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            background: 'var(--slate-900)',
            borderRight: '1px solid var(--border-subtle)',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '24px 12px',
            position: 'sticky',
            top: 0,
            overflowX: 'hidden'
        }} className="desktop-sidebar">
            {/* Header / Logo / Collapse Toggle Area */}
            <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', padding: '0 4px', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', background: 'var(--primary-500)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LayoutDashboard size={18} color="white" />
                    </div>
                    {!isCollapsed && <h2 style={{ fontSize: '1.25rem', color: 'white', whiteSpace: 'nowrap', margin: 0 }}>HabitFlow</h2>}
                </div>

                {/* Collapse Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--slate-400)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Navigation Items */}
            <nav style={{ flex: 1 }}>
                {!isCollapsed && (
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--slate-500)', fontWeight: 600, padding: '0 12px 12px' }}>
                        Menu
                    </div>
                )}
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
                    title={isCollapsed ? "Profile" : ""}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isCollapsed ? 'center' : 'flex-start',
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
                    <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-800)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>
                        {user?.name?.[0] || 'U'}
                    </div>
                    {!isCollapsed && (
                        <div style={{ overflow: 'hidden', flex: 1 }}>
                            <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {user?.name || 'User'}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>View Profile</div>
                        </div>
                    )}
                </div>

                <NavItem icon={LogOut} label="Sign Out" path="#" danger action={logout} />
            </div>
        </aside>
    );
};
