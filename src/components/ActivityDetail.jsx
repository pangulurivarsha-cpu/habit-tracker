import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Clock } from 'lucide-react';
import './ActivityDetail.css';

export const ActivityDetail = () => {
    const { activityName } = useParams();
    const navigate = useNavigate();

    const [participants, setParticipants] = useState([]);
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

    // Month and Year state
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [selectedMonth, setSelectedMonth] = useState(currentMonth); // 0-11
    const [scrollLeft, setScrollLeft] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    const scrollMasterRef = useRef(null);



    // Generate years (3 previous + current + 50 future = 54 years)
    const years = Array.from({ length: 54 }, (_, i) => currentYear - 3 + i);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
        const savedParticipants = localStorage.getItem(`activity_${activityName}_participants`);
        if (savedParticipants) {
            setParticipants(JSON.parse(savedParticipants));
        }

        const savedTimings = localStorage.getItem(`activity_${activityName}_timings`);
        if (savedTimings) {
            setTimings(savedTimings);
        }
    }, [activityName]);

    const saveParticipants = (updatedParticipants) => {
        setParticipants(updatedParticipants);
        localStorage.setItem(`activity_${activityName}_participants`, JSON.stringify(updatedParticipants));
    };

    const handleSaveTimings = () => {
        const newTimings = `${startHour}:${startMinute} ${startPeriod.toLowerCase()} to ${endHour}:${endMinute} ${endPeriod.toLowerCase()}, ${startHour2}:${startMinute2} ${startPeriod2.toLowerCase()} to ${endHour2}:${endMinute2} ${endPeriod2.toLowerCase()}`;
        setTimings(newTimings);
        localStorage.setItem(`activity_${activityName}_timings`, newTimings);
        setShowTimingsModal(false);
    };

    const handleAddParticipant = () => {
        if (!newName.trim()) return;
        const newParticipant = {
            id: Date.now(),
            name: newName.trim(),
            attendance: {}
        };
        saveParticipants([...participants, newParticipant]);
        setNewName('');
        setShowAddModal(false);
    };

    const handleRemoveParticipant = (id) => {
        if (confirm('Remove this person?')) {
            saveParticipants(participants.filter(p => p.id !== id));
        }
    };

    const toggleAttendance = (participantId, dateStr) => {
        const updated = participants.map(p => {
            if (p.id === participantId) {
                const newAttendance = { ...p.attendance };
                newAttendance[dateStr] = !newAttendance[dateStr];
                return { ...p, attendance: newAttendance };
            }
            return p;
        });
        saveParticipants(updated);
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

    // Get dates for current week (based on TODAY)
    const getWeekDates = () => {
        const today = new Date(); // Always use today for week view
        const dayOfWeek = today.getDay();
        const dates = [];

        // Start from Sunday of current week
        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - dayOfWeek + i);
            dates.push(date);
        }
        return dates;
    };

    const calculateTotal = (participant) => {
        const dates = viewMode === 'week' ? getWeekDates() : getCalendarDates().filter(d => d !== null);
        let count = 0;
        dates.forEach(date => {
            const dateStr = date.toISOString().split('T')[0];
            if (participant.attendance[dateStr]) count++;
        });
        return count;
    };

    const displayDates = viewMode === 'week' ? getWeekDates() : getCalendarDates();

    return (
        <div className="activity-detail">
            <div className="mobile-frame">
                <div className="activity-header">
                    <button onClick={() => navigate(-1)} className="back-btn">
                        <ArrowLeft size={20} />
                        Back
                    </button>
                    <div className="activity-info">
                        <h1>{activityName}</h1>
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

                    {participants.map((participant, pIndex) => {
                        const dates = viewMode === 'week' ? getWeekDates() : displayDates;
                        return (
                            <div key={participant.id} className="participant-row">
                                <div className="participant-name">
                                    <span>{participant.name}</span>
                                    <button onClick={() => handleRemoveParticipant(participant.id)} className="remove-btn-inline">
                                        <X size={14} />
                                    </button>
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
                                                const dateStr = date.toISOString().split('T')[0];
                                                const isChecked = participant.attendance[dateStr] || false;
                                                return (
                                                    <label key={dateStr} className="checkbox-cell">
                                                        <span className="date-num">{date.getDate()}</span>
                                                        <input
                                                            type="checkbox"
                                                            checked={isChecked}
                                                            onChange={() => toggleAttendance(participant.id, dateStr)}
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
                        <button onClick={() => setShowAddModal(true)} className="add-name-btn-compact">
                            <Plus size={16} />
                            Add Names
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Participant Modal */}
            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Add Participant</h3>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddParticipant()}
                            autoFocus
                        />
                        <div className="modal-actions">
                            <button onClick={() => setShowAddModal(false)} className="cancel-btn">Cancel</button>
                            <button onClick={handleAddParticipant} className="confirm-btn">Add</button>
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
        </div>
    );
};
