import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const motivationalMessages = [
    {
        title: "Keep Going!",
        message: "Every small step you take is building the person you want to become.",
        subtitle: "Stay consistent, stay motivated, and remember: you're doing amazing! ❤️"
    },
    {
        title: "You've Got This!",
        message: "Success is the sum of small efforts repeated day in and day out.",
        subtitle: "Don't give up now. Your future self will thank you! 💪"
    },
    {
        title: "Believe in Yourself!",
        message: "The only person you are destined to become is the person you decide to be.",
        subtitle: "Your determination today creates your reality tomorrow! ✨"
    },
    {
        title: "Progress Over Perfection!",
        message: "You don't have to be great to start, but you have to start to be great.",
        subtitle: "Every expert was once a beginner. Keep pushing forward! 🚀"
    },
    {
        title: "Stay Strong!",
        message: "Difficult roads often lead to beautiful destinations.",
        subtitle: "The struggle you're in today is developing the strength you need for tomorrow! 💎"
    },
    {
        title: "You're Unstoppable!",
        message: "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
        subtitle: "Your habits shape your future. Keep building! 🏆"
    },
    {
        title: "Dream Big!",
        message: "The future belongs to those who believe in the beauty of their dreams.",
        subtitle: "Chase your dreams with courage and determination! 🌟"
    },
    {
        title: "Keep Pushing!",
        message: "It's not about perfect. It's about effort. And when you implement that effort every day, that's where transformation happens.",
        subtitle: "Your effort today is an investment in your tomorrow! 📈"
    },
    {
        title: "Never Give Up!",
        message: "Fall seven times, stand up eight.",
        subtitle: "Resilience is your superpower. Use it! ⚡"
    },
    {
        title: "You're Making Progress!",
        message: "Don't watch the clock; do what it does. Keep going.",
        subtitle: "Time + consistency = Success. You're on the right path! ⏰"
    },
    {
        title: "Embrace the Journey!",
        message: "The secret of getting ahead is getting started.",
        subtitle: "You've already begun. That's the hardest part! 🎯"
    },
    {
        title: "Stay Focused!",
        message: "Your limitation—it's only your imagination.",
        subtitle: "Break through mental barriers and achieve greatness! 🧠"
    },
    {
        title: "You're Capable!",
        message: "Great things never come from comfort zones.",
        subtitle: "Embrace the challenge. You're stronger than you think! 💪"
    },
    {
        title: "Shine Bright!",
        message: "Stars can't shine without darkness.",
        subtitle: "Your challenges are making you brilliant! ⭐"
    },
    {
        title: "One Day at a Time!",
        message: "Little by little, a little becomes a lot.",
        subtitle: "Small daily improvements lead to stunning results! 🌱"
    },
    {
        title: "Trust the Process!",
        message: "The only way to do great work is to love what you do.",
        subtitle: "Find joy in the journey, not just the destination! 😊"
    },
    {
        title: "You're Incredible!",
        message: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        subtitle: "Your courage defines you. Keep moving forward! 🦁"
    },
    {
        title: "Make It Happen!",
        message: "Don't wait for opportunity. Create it.",
        subtitle: "You have the power to design your own destiny! 🎨"
    },
    {
        title: "Stay Positive!",
        message: "Positive thinking will let you do everything better than negative thinking will.",
        subtitle: "Your mindset determines your success! 🌈"
    },
    {
        title: "You're Amazing!",
        message: "Believe you can and you're halfway there.",
        subtitle: "Self-belief is your greatest asset. Use it wisely! 🌟"
    }
];

const HeartAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
            setCurrentIndex(randomIndex);
            setIsAnimating(false);
        }, 300);
    };

    const current = motivationalMessages[currentIndex];

    return (
        <div
            className="page-container animate-fade-in"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                textAlign: 'center',
                padding: '40px 20px',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <div style={{
                animation: 'heartbeat 1.5s ease-in-out infinite',
                marginBottom: '30px',
                transition: 'transform 0.3s ease',
                transform: isAnimating ? 'scale(0.8)' : 'scale(1)'
            }}>
                <Heart
                    size={120}
                    color="#ff6b9d"
                    fill="#ff6b9d"
                    style={{
                        filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.5))'
                    }}
                />
            </div>

            <div style={{
                transition: 'opacity 0.3s ease',
                opacity: isAnimating ? 0.3 : 1
            }}>
                <h1 style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #ff6b9d 0%, #c471ed 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '20px'
                }}>
                    {current.title}
                </h1>

                <p style={{
                    fontSize: '18px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: '500px',
                    lineHeight: '1.6',
                    marginBottom: '15px'
                }}>
                    {current.message}
                </p>

                <p style={{
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    maxWidth: '450px',
                    lineHeight: '1.6'
                }}>
                    {current.subtitle}
                </p>
            </div>

            <p style={{
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 0.4)',
                marginTop: '30px',
                fontStyle: 'italic'
            }}>
                Click anywhere for a new message ✨
            </p>

            <style>
                {`
                    @keyframes heartbeat {
                        0%, 100% {
                            transform: scale(1);
                        }
                        25% {
                            transform: scale(1.1);
                        }
                        50% {
                            transform: scale(1);
                        }
                        75% {
                            transform: scale(1.15);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default HeartAnimation;
