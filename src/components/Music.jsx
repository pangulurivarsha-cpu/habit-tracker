import React, { useState } from 'react';
import { Music as MusicIcon, Play, Filter, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const SONGS_PER_PAGE = 5;

const musicLibrary = [
    // Telugu Songs
    { id: 1, title: "Saami Saami", artist: "Mounika Reddy", year: 2021, language: "Telugu", youtubeId: "KeChg8J7wH0" },
    { id: 2, title: "Butta Bomma", artist: "Armaan Malik", year: 2020, language: "Telugu", youtubeId: "OTUXhz1ZhoY" },
    { id: 3, title: "Inkem Inkem Kaavaale", artist: "Sid Sriram", year: 2018, language: "Telugu", youtubeId: "KMjYNKED0U0" },
    { id: 4, title: "Rowdy Baby", artist: "Dhanush, Dhee", year: 2018, language: "Telugu", youtubeId: "x6Q7c9RyMzk" },
    { id: 5, title: "Vachinde", artist: "Madhu Priya", year: 2018, language: "Telugu", youtubeId: "NEnKGNJE7lk" },
    { id: 6, title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni", year: 2020, language: "Telugu", youtubeId: "CZgcoYvuWF8" },
    { id: 7, title: "Oo Antava", artist: "Indravathi Chauhan", year: 2021, language: "Telugu", youtubeId: "0sfMlJEujBg" },
    { id: 8, title: "Mind Block", artist: "Tanishk Bagchi", year: 2019, language: "Telugu", youtubeId: "VCaAdWoBRPE" },
    { id: 9, title: "Srivalli", artist: "Javed Ali", year: 2021, language: "Telugu", youtubeId: "BddP6PYo2gs" },
    { id: 10, title: "Rang De", artist: "Haricharan", year: 2021, language: "Telugu", youtubeId: "w6HHcuadtT8" },

    // Hindi/Bollywood
    { id: 11, title: "Kesariya", artist: "Arijit Singh", year: 2022, language: "Hindi", youtubeId: "zIlWzlW2lrY" },
    { id: 12, title: "Chaleya", artist: "Arijit Singh & Shilpa Rao", year: 2023, language: "Hindi", youtubeId: "HOmC1_aXh1k" },
    { id: 13, title: "Tum Hi Ho", artist: "Arijit Singh", year: 2017, language: "Hindi", youtubeId: "Umqb9KENgmk" },
    { id: 14, title: "Apna Bana Le", artist: "Arijit Singh", year: 2022, language: "Hindi", youtubeId: "qwhO_1KV6Pk" },
    { id: 15, title: "Deva Deva", artist: "Arijit Singh & Jonita Gandhi", year: 2022, language: "Hindi", youtubeId: "Z_vvEYbA6WA" },

    // Malayalam Songs  
    { id: 16, title: "Vaathi Coming", artist: "Gana Balachandar", year: 2020, language: "Malayalam", youtubeId: "KZ5pz4_zRPU" },
    { id: 17, title: "Kannana Kanne", artist: "Sid Sriram", year: 2020, language: "Malayalam", youtubeId: "NGAsdSrkIaI" },
    { id: 18, title: "Marakkavillaye", artist: "Vineeth Sreenivasan", year: 2021, language: "Malayalam", youtubeId: "9l6VUCGlZ8c" },
    { id: 19, title: "Parayathe", artist: "Yazin Nizar", year: 2022, language: "Malayalam", youtubeId: "BqU-JHO26gs" },
    { id: 20, title: "Nenjinile", artist: "Srinisha Jayaseelan", year: 2019, language: "Malayalam", youtubeId: "67BO_-xOW2c" },

    // Kannada Songs
    { id: 21, title: "Hombisilu", artist: "Sonu Nigam", year: 2018, language: "Kannada", youtubeId: "_1kpxFOOQPk" },
    { id: 22, title: "Jogaiah Thambi", artist: "Armaan Malik", year: 2019, language: "Kannada", youtubeId: "mJKPeTIVoAc" },
    { id: 23, title: "Yeneno Yeneno", artist: "Vijay Prakash", year: 2021, language: "Kannada", youtubeId: "4lB_TQ0GWCU" },
    { id: 24, title: "Ee Bhoomi Aa Bhoomi", artist: "Anirudh Ravichander", year: 2022, language: "Kannada", youtubeId: "vb3-kkFjz2M" },
    { id: 25, title: "Saahore Baahubali", artist: "Daler Mehndi", year: 2017, language: "Kannada", youtubeId: "jkl9EJ62w5A" },
    { id: 26, title: "Kannad Gothilla", artist: "Nakash Aziz", year: 2019, language: "Kannada", youtubeId: "nNrwwgaRbmw" },
    { id: 27, title: "Ale Ale", artist: "Armaan Malik", year: 2020, language: "Kannada", youtubeId: "sBGnr5l-KoI" },
    { id: 28, title: "Ninna Danigaagi", artist: "Sonu Nigam", year: 2021, language: "Kannada", youtubeId: "V8kbj7yRv8Q" },

    // English/Pop
    { id: 29, title: "Blinding Lights", artist: "The Weeknd", year: 2020, language: "English", youtubeId: "4NRXx6U8ABQ" },
    { id: 30, title: "Shape of You", artist: "Ed Sheeran", year: 2017, language: "English", youtubeId: "JGwWNGJdvx8" },
    { id: 31, title: "Levitating", artist: "Dua Lipa", year: 2020, language: "English", youtubeId: "TUVcZfQe-Kw" },
    { id: 32, title: "Anti-Hero", artist: "Taylor Swift", year: 2022, language: "English", youtubeId: "b1kbLwvqugk" },
    { id: 33, title: "As It Was", artist: "Harry Styles", year: 2022, language: "English", youtubeId: "H5v3kku4y6Q" },
    { id: 34, title: "Believer", artist: "Imagine Dragons", year: 2017, language: "English", youtubeId: "7wtfhZwyrcc" },
    { id: 35, title: "High Hopes", artist: "Panic! At The Disco", year: 2018, language: "English", youtubeId: "IPXIgEAGe4U" },
];

export const Music = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const languages = ['All', 'Telugu', 'Hindi', 'Malayalam', 'Kannada', 'English'];

    let filteredMusic = musicLibrary;

    if (selectedLanguage !== 'All') {
        filteredMusic = filteredMusic.filter(m => m.language === selectedLanguage);
    }

    if (searchTerm) {
        filteredMusic = filteredMusic.filter(m =>
            m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            m.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Pagination
    const totalPages = Math.ceil(filteredMusic.length / SONGS_PER_PAGE);
    const startIndex = (currentPage - 1) * SONGS_PER_PAGE;
    const displayedSongs = filteredMusic.slice(startIndex, startIndex + SONGS_PER_PAGE);

    const handleLanguageChange = (lang) => {
        setSelectedLanguage(lang);
        setCurrentPage(1);
    };

    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="page-container animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <MusicIcon size={32} color="#64ffda" />
                <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    margin: 0,
                    background: 'linear-gradient(135deg, #64ffda 0%, #38b6ff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Music Library
                </h2>
            </div>

            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '25px' }}>
                {musicLibrary.length} curated songs • Telugu, Hindi, Malayalam, English
            </p>

            {/* Search */}
            <div style={{ marginBottom: '20px' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    gap: '10px'
                }}>
                    <Search size={20} color="rgba(255, 255, 255, 0.5)" />
                    <input
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        placeholder="Search songs or artists..."
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            fontSize: '15px',
                            outline: 'none',
                            width: '100%'
                        }}
                    />
                </div>
            </div>

            {/* Language Filter */}
            <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <Filter size={18} color="#64ffda" />
                    <span style={{ fontSize: '15px', color: '#64ffda', fontWeight: 700 }}>Language</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {languages.map(lang => (
                        <button
                            key={lang}
                            onClick={() => handleLanguageChange(lang)}
                            style={{
                                padding: '8px 18px',
                                borderRadius: '12px',
                                border: selectedLanguage === lang ? '2px solid #64ffda' : '1px solid rgba(100, 255, 218, 0.3)',
                                background: selectedLanguage === lang
                                    ? 'linear-gradient(135deg, rgba(100, 255, 218, 0.2) 0%, rgba(56, 182, 255, 0.2) 100%)'
                                    : 'rgba(255, 255, 255, 0.05)',
                                color: selectedLanguage === lang ? '#64ffda' : 'rgba(255, 255, 255, 0.7)',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: 600,
                                transition: 'all 0.3s ease',
                                boxShadow: selectedLanguage === lang ? '0 4px 12px rgba(100, 255, 218, 0.25)' : 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedLanguage !== lang) {
                                    e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                                    e.currentTarget.style.borderColor = '#64ffda';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedLanguage !== lang) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.3)';
                                }
                            }}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Count */}
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '20px' }}>
                Showing {startIndex + 1}-{Math.min(startIndex + SONGS_PER_PAGE, filteredMusic.length)} of {filteredMusic.length} songs (Page {currentPage} of {totalPages})
            </p>

            {/* Music Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                {displayedSongs.map(song => (
                    <div
                        key={song.id}
                        className="glass"
                        style={{
                            padding: '15px',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(100, 255, 218, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#64ffda';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <div style={{
                            width: '100%',
                            height: '150px',
                            borderRadius: '8px',
                            background: `url(https://img.youtube.com/vi/${song.youtubeId}/mqdefault.jpg) center/cover`,
                            marginBottom: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <a
                                href={`https://www.youtube.com/watch?v=${song.youtubeId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    background: 'rgba(100, 255, 218, 0.9)',
                                    borderRadius: '50%',
                                    padding: '12px',
                                    display: 'flex',
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <Play size={24} color="#0c1a2c" fill="#0c1a2c" />
                            </a>
                        </div>

                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#64ffda',
                            margin: '0 0 5px 0',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>
                            {song.title}
                        </h3>

                        <p style={{
                            fontSize: '14px',
                            color: 'rgba(255, 255, 255, 0.7)',
                            margin: '0 0 8px 0'
                        }}>
                            {song.artist}
                        </p>

                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <span style={{
                                fontSize: '11px',
                                padding: '3px 8px',
                                borderRadius: '10px',
                                background: 'rgba(100, 255, 218, 0.1)',
                                color: '#64ffda'
                            }}>
                                {song.genre}
                            </span>
                            <span style={{
                                fontSize: '11px',
                                padding: '3px 8px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'rgba(255, 255, 255, 0.6)'
                            }}>
                                {song.year}
                            </span>
                            <span style={{
                                fontSize: '11px',
                                padding: '3px 8px',
                                borderRadius: '10px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'rgba(255, 255, 255, 0.6)'
                            }}>
                                {song.language}
                            </span>
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
                    marginTop: '30px'
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

                    <span style={{ color: '#64ffda', fontSize: '14px', fontWeight: 600 }}>
                        Page {currentPage} of {totalPages}
                    </span>

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

            {filteredMusic.length === 0 && (
                <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: 'rgba(255, 255, 255, 0.5)'
                }}>
                    <MusicIcon size={48} color="rgba(255, 255, 255, 0.3)" style={{ marginBottom: '15px' }} />
                    <p style={{ fontSize: '16px' }}>No songs found matching your filters</p>
                </div>
            )}
        </div>
    );
};
