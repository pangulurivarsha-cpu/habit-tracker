import React, { useState } from 'react';
import { BookOpen, ChevronRight, ChevronLeft, Heart } from 'lucide-react';
import { storiesData } from '../data/stories';

const STORIES_PER_PAGE = 5;

export const TrackerView = () => {
    const [selectedStory, setSelectedStory] = useState(null);
    const [filterCategory, setFilterCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    // Get all unique categories
    const categories = ['All', ...new Set(storiesData.map(s => s.category))];

    // Filter stories by category
    const filteredStories = filterCategory === 'All'
        ? storiesData
        : storiesData.filter(s => s.category === filterCategory);

    // Calculate pagination
    const totalPages = Math.ceil(filteredStories.length / STORIES_PER_PAGE);
    const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
    const displayedStories = filteredStories.slice(startIndex, startIndex + STORIES_PER_PAGE);

    // Reset to page 1 when filter changes
    const handleFilterChange = (newCategory) => {
        setFilterCategory(newCategory);
        setCurrentPage(1);
    };

    // Pagination handlers
    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render page numbers
    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage < maxPagesToShow - 1) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    style={{
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: currentPage === i ? '2px solid #64ffda' : '1px solid rgba(100, 255, 218, 0.3)',
                        background: currentPage === i ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                        color: currentPage === i ? '#64ffda' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,
                        minWidth: '40px'
                    }}
                >
                    {i}
                </button>
            );
        }

        return pages;
    };

    if (selectedStory) {
        return (
            <div className="page-container animate-fade-in">
                <button
                    onClick={() => setSelectedStory(null)}
                    style={{
                        background: 'rgba(100, 255, 218, 0.1)',
                        border: '1px solid #64ffda',
                        color: '#64ffda',
                        padding: '10px 20px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        marginBottom: '20px',
                        fontSize: '14px',
                        fontWeight: 600
                    }}
                >
                    ← Back to Stories
                </button>

                <div className="glass" style={{ padding: '30px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '20px',
                        paddingBottom: '20px',
                        borderBottom: '2px solid rgba(100, 255, 218, 0.2)'
                    }}>
                        {selectedStory.category === 'Romance' ? (
                            <Heart size={40} color="#ff6b9d" fill="#ff6b9d" />
                        ) : (
                            <BookOpen size={40} color="#64ffda" />
                        )}
                        <div>
                            <h1 style={{
                                fontSize: '28px',
                                fontWeight: 700,
                                margin: '0 0 5px 0',
                                background: selectedStory.category === 'Romance'
                                    ? 'linear-gradient(135deg, #ff6b9d 0%, #c471ed 100%)'
                                    : 'linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                {selectedStory.title}
                            </h1>
                            <p style={{
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.6)',
                                margin: 0
                            }}>
                                {selectedStory.author} • {selectedStory.category}
                            </p>
                        </div>
                    </div>

                    <div style={{
                        background: selectedStory.category === 'Romance'
                            ? 'rgba(255, 107, 157, 0.05)'
                            : 'rgba(100, 255, 218, 0.05)',
                        padding: '20px',
                        borderRadius: '12px',
                        borderLeft: `4px solid ${selectedStory.category === 'Romance' ? '#ff6b9d' : '#64ffda'}`,
                        marginBottom: '25px'
                    }}>
                        <h3 style={{
                            fontSize: '16px',
                            color: selectedStory.category === 'Romance' ? '#ff6b9d' : '#64ffda',
                            marginTop: 0
                        }}>
                            Moral of the Story
                        </h3>
                        <p style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: '1.6' }}>
                            {selectedStory.lesson}
                        </p>
                    </div>

                    <div style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        color: 'rgba(255, 255, 255, 0.85)',
                        textAlign: 'justify'
                    }}>
                        {selectedStory.content}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container animate-fade-in">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '20px'
            }}>
                <BookOpen size={32} color="#64ffda" />
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    margin: 0,
                    background: 'linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Story Library
                </h2>
            </div>

            <p style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '20px'
            }}>
                {storiesData.length} stories across multiple genres
            </p>

            {/* Category Filter */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleFilterChange(cat)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: filterCategory === cat ? '2px solid #64ffda' : '1px solid rgba(100, 255, 218, 0.3)',
                            background: filterCategory === cat ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                            color: filterCategory === cat ? '#64ffda' : 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {cat} ({cat === 'All' ? storiesData.length : storiesData.filter(s => s.category === cat).length})
                    </button>
                ))}
            </div>

            {/* Showing count */}
            <p style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '20px'
            }}>
                Showing {startIndex + 1}-{Math.min(startIndex + STORIES_PER_PAGE, filteredStories.length)} of {filteredStories.length} stories (Page {currentPage} of {totalPages})
            </p>

            {/* Stories Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
                {displayedStories.map(story => (
                    <div
                        key={story.id}
                        className="glass"
                        style={{
                            padding: '20px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            border: `1px solid ${story.category === 'Romance' ? 'rgba(255, 107, 157, 0.1)' : 'rgba(100, 255, 218, 0.1)'}`
                        }}
                        onClick={() => setSelectedStory(story)}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = story.category === 'Romance' ? '#ff6b9d' : '#64ffda';
                            e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = story.category === 'Romance' ? 'rgba(255, 107, 157, 0.1)' : 'rgba(100, 255, 218, 0.1)';
                            e.currentTarget.style.transform = 'translateX(0)';
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: 600,
                                        color: story.category === 'Romance' ? '#ff6b9d' : '#64ffda',
                                        margin: 0
                                    }}>
                                        {story.title}
                                    </h3>
                                    {story.category === 'Romance' && (
                                        <Heart size={18} color="#ff6b9d" fill="#ff6b9d" />
                                    )}
                                </div>
                                <p style={{
                                    fontSize: '13px',
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    margin: '0 0 10px 0'
                                }}>
                                    {story.author} • {story.category}
                                </p>
                                <p style={{
                                    fontSize: '15px',
                                    color: 'rgba(255, 255, 255, 0.8)',
                                    margin: 0,
                                    lineHeight: '1.5'
                                }}>
                                    {story.summary}
                                </p>
                            </div>
                            <ChevronRight size={24} color="rgba(255, 255, 255, 0.4)" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '30px',
                    flexWrap: 'wrap'
                }}>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                            background: currentPage === 1 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            color: currentPage === 1 ? 'rgba(255, 255, 255, 0.3)' : '#64ffda',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            fontSize: '14px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                    >
                        <ChevronLeft size={16} /> Previous
                    </button>

                    {renderPageNumbers()}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '8px',
                            border: '1px solid rgba(100, 255, 218, 0.3)',
                            background: currentPage === totalPages ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                            color: currentPage === totalPages ? 'rgba(255, 255, 255, 0.3)' : '#64ffda',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            fontSize: '14px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}
                    >
                        Next <ChevronRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};
