import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X, Clock } from 'lucide-react';
import './ActivityDetail.css';

export const ActivityDetail = () => {
    const { activityName } = useParams();
    const navigate = useNavigate();

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

    // Helper to get month key
    const getMonthKey = (year, month) => `${year}-${String(month + 1).padStart(2, '0')}`;

    // Current month key for getting participants
    const currentMonthKey = getMonthKey(selectedYear, selectedMonth);
    const currentParticipants = participantsByMonth[currentMonthKey] || [];

    useEffect(() => {
        // Load all participants by month
        const savedData = localStorage.getItem(`activity_${activityName}_participantsByMonth`);
        if (savedData) {
            setParticipantsByMonth(JSON.parse(savedData));
        }

        const savedTimings = localStorage.getItem(`activity_${activityName}_timings`);
        if (savedTimings) {
            setTimings(savedTimings);
        }
    }, [activityName]);

    const saveParticipantsForMonth = (monthKey, updatedParticipants) => {
        const updated = { ...participantsByMonth, [monthKey]: updatedParticipants };
        setParticipantsByMonth(updated);
        localStorage.setItem(`activity_${activityName}_participantsByMonth`, JSON.stringify(updated));
    };

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

    const togglePaidStatus = (participantId) => {
        const updated = currentParticipants.map(p => {
            if (p.id === participantId) {
                return { ...p, paidStatus: !p.paidStatus };
            }
            return p;
        });
        saveParticipantsForMonth(currentMonthKey, updated);
    };

    const handleSaveTimings = () => {
        const newTimings = `${startHour}:${startMinute} ${startPeriod.toLowerCase()} to ${endHour}:${endMinute} ${endPeriod.toLowerCase()}, ${startHour2}:${startMinute2} ${startPeriod2.toLowerCase()} to ${endHour2}:${endMinute2} ${endPeriod2.toLowerCase()}`;
        setTimings(newTimings);
        localStorage.setItem(`activity_${activityName}_timings`, newTimings);
        setShowTimingsModal(false);
    };

    const handleAddParticipant = () => {
        if (!newName.trim()) return;

        // Build all updates at once to avoid state batching issues
        const updatedMonths = { ...participantsByMonth };

        // Add to current month
        const baseId = Date.now(); // Generate ONE ID for all months
        const newParticipant = {
            id: baseId,
            name: newName.trim(),
            classes: newClasses,
            paidStatus: newPaidStatus,
            paymentDate: newPaymentDate,
            attendance: {}
        };
        const currentParticipantsList = updatedMonths[currentMonthKey] || [];
        updatedMonths[currentMonthKey] = [...currentParticipantsList, newParticipant];

        // Auto-propagate to next 6 months ONLY if they have a class count (package carrying forward)
        // This stops drop-ins from flooding future months unnecessarily, but allows packages to properly track forwards
        if (newClasses && parseInt(newClasses) > 0) {
            for (let i = 1; i <= 6; i++) {
                const futureDate = new Date(selectedYear, selectedMonth + i, 1);
                const futureYear = futureDate.getFullYear();
                const futureMonth = futureDate.getMonth();
                const futureMonthKey = getMonthKey(futureYear, futureMonth);

                // Get existing participants for that future month from our local copy
                const futureParticipants = updatedMonths[futureMonthKey] || [];

                // Only add if a participant with the same name doesn't already exist
                const alreadyExists = futureParticipants.some(p => p.name.toLowerCase() === newName.trim().toLowerCase());
                if (!alreadyExists) {
                    const futureParticipant = {
                        id: baseId, // Reuse the same ID so we can track them globally
                        name: newName.trim(),
                        classes: newClasses,
                        paidStatus: newPaidStatus,
                        paymentDate: newPaymentDate,
                        attendance: {}
                    };
                    updatedMonths[futureMonthKey] = [...futureParticipants, futureParticipant];
                }
            }
        }

        // Save all at once
        setParticipantsByMonth(updatedMonths);
        localStorage.setItem(`activity_${activityName}_participantsByMonth`, JSON.stringify(updatedMonths));

        setNewName('');
        setNewClasses('');
        setNewPaidStatus(false);
        setNewPaymentDate('');
        setShowAddModal(false);
    };

    const handleRemoveParticipant = (id) => {
        const participantName = currentParticipants.find(p => p.id === id)?.name || 'this person';
        if (confirm(`Remove ${participantName} from ${months[selectedMonth]} ${selectedYear}?`)) {
            saveParticipantsForMonth(currentMonthKey, currentParticipants.filter(p => p.id !== id));
        }
    };

    const toggleAttendance = (participantId, dateStr) => {
        const updated = currentParticipants.map(p => {
            if (p.id === participantId) {
                const newAttendance = { ...p.attendance };
                newAttendance[dateStr] = !newAttendance[dateStr];
                return { ...p, attendance: newAttendance };
            }
            return p;
        });
        saveParticipantsForMonth(currentMonthKey, updated);
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

    // Calculate total attendance ACROSS ALL MONTHS for this participant
    // Uses ID if available, falls back to Name for older legacy data
    const calculateGlobalAttendance = (participant) => {
        let globalAttendedCount = 0;

        Object.values(participantsByMonth).forEach(monthParticipants => {
            const p = monthParticipants.find(mp =>
                (participant.id && mp.id === participant.id) ||
                (mp.name.toLowerCase() === participant.name.toLowerCase())
            );

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

    const displayDates = viewMode === 'week' ? getWeekDates() : getCalendarDates();

    // Determine active vs completed status and sort
    const sortedParticipants = [...currentParticipants].sort((a, b) => {
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

                    {sortedParticipants.map((participant, pIndex) => {
                        const dates = viewMode === 'week' ? getWeekDates() : displayDates;
                        const totalClasses = parseInt(participant.classes) || 0;
                        const remaining = calculateTotal(participant);
                        const isCompleted = totalClasses > 0 && remaining <= 0;

                        return (
                            <div key={participant.id} className={`participant-row ${isCompleted ? 'completed-participant' : ''}`}>
                                <div className="participant-name">
                                    <div className="name-container">
                                        <span className="name-text">{participant.name}</span>
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
                                    <button
                                        onClick={() => handleRemoveParticipant(participant.id)}
                                        className="remove-btn-inline"
                                        title="Remove from this month"
                                    >
                                        <X size={16} />
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

                                                // Ensure consistency between week and month views by relying strictly on local timezone values
                                                const localDateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

                                                // Support legacy UTC keys temporarily by checking both
                                                const utcDateStr = date.toISOString().split('T')[0];
                                                const isChecked = participant.attendance[localDateStr] || participant.attendance[utcDateStr] || false;

                                                const isPaymentDate = participant.paymentDate === localDateStr;

                                                return (
                                                    <label key={localDateStr} className={`checkbox-cell ${isPaymentDate ? 'payment-date-highlight' : ''}`} title={isPaymentDate ? "Payment Date" : ""}>
                                                        <span className="date-num">{date.getDate()}</span>
                                                        <input
                                                            type="checkbox"
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
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Add Participant</h2>
                            <button onClick={() => setShowAddModal(false)} className="close-btn">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="modal-body">
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
            )
            }
        </div >
    );
};
