import React, { useState } from 'react';
import { Heart, Star, Zap, Trophy, Sun, Flame, Smile, Target, Mountain, Award } from 'lucide-react';

const motivationalMessages = [
    {
        title: "Keep Going!",
        message: "Every small step you take is building the person you want to become.",
        subtitle: "Stay consistent, stay motivated, and remember: you're doing amazing! ❤️",
        icon: Heart,
        color: "#ff6b9d"
    },
    {
        title: "You've Got This!",
        message: "Success is the sum of small efforts repeated day in and day out.",
        subtitle: "Don't give up now. Your future self will thank you! 💪",
        icon: Target,
        color: "#64ffda"
    },
    {
        title: "Believe in Yourself!",
        message: "The only person you are destined to become is the person you decide to be.",
        subtitle: "Your determination today creates your reality tomorrow! ✨",
        icon: Star,
        color: "#feca57"
    },
    {
        title: "Progress Over Perfection!",
        message: "You don't have to be great to start, but you have to start to be great.",
        subtitle: "Every expert was once a beginner. Keep pushing forward! 🚀",
        icon: Mountain,
        color: "#54a0ff"
    },
    {
        title: "Stay Strong!",
        message: "Difficult roads often lead to beautiful destinations.",
        subtitle: "The struggle you're in today is developing the strength you need for tomorrow! 💎",
        icon: Trophy,
        color: "#ff9ff3"
    },
    {
        title: "You're Unstoppable!",
        message: "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
        subtitle: "Your habits shape your future. Keep building! 🏆",
        icon: Flame,
        color: "#ff6b6b"
    },
    {
        title: "Dream Big!",
        message: "The future belongs to those who believe in the beauty of their dreams.",
        subtitle: "Chase your dreams with courage and determination! 🌟",
        icon: Star,
        color: "#feca57"
    },
    {
        title: "Keep Pushing!",
        message: "It's not about perfect. It's about effort. And when you implement that effort every day, that's where transformation happens.",
        subtitle: "Your effort today is an investment in your tomorrow! 📈",
        icon: Zap,
        color: "#48dbfb"
    },
    {
        title: "Never Give Up!",
        message: "Fall seven times, stand up eight.",
        subtitle: "Resilience is your superpower. Use it! ⚡",
        icon: Zap,
        color: "#ff9f43"
    },
    {
        title: "You're Making Progress!",
        message: "Don't watch the clock; do what it does. Keep going.",
        subtitle: "Time + consistency = Success. You're on the right path! ⏰",
        icon: Sun,
        color: "#f368e0"
    },
    {
        title: "Embrace the Journey!",
        message: "The secret of getting ahead is getting started.",
        subtitle: "You've already begun. That's the hardest part! 🎯",
        icon: Target,
        color: "#1dd1a1"
    },
    {
        title: "Stay Focused!",
        message: "Your limitation—it's only your imagination.",
        subtitle: "Break through mental barriers and achieve greatness! 🧠",
        icon: Sun,
        color: "#feca57"
    },
    {
        title: "You're Capable!",
        message: "Great things never come from comfort zones.",
        subtitle: "Embrace the challenge. You're stronger than you think! 💪",
        icon: Trophy,
        color: "#5f27cd"
    },
    {
        title: "Shine Bright!",
        message: "Stars can't shine without darkness.",
        subtitle: "Your challenges are making you brilliant! ⭐",
        icon: Star,
        color: "#feca57"
    },
    {
        title: "One Day at a Time!",
        message: "Little by little, a little becomes a lot.",
        subtitle: "Small daily improvements lead to stunning results! 🌱",
        icon: Mountain,
        color: "#10ac84"
    },
    {
        title: "Trust the Process!",
        message: "The only way to do great work is to love what you do.",
        subtitle: "Find joy in the journey, not just the destination! 😊",
        icon: Smile,
        color: "#ff9f43"
    },
    {
        title: "You're Incredible!",
        message: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        subtitle: "Your courage defines you. Keep moving forward! 🦁",
        icon: Award,
        color: "#ff6b6b"
    },
    {
        title: "Make It Happen!",
        message: "Don't wait for opportunity. Create it.",
        subtitle: "You have the power to design your own destiny! 🎨",
        icon: Zap,
        color: "#2e86de"
    },
    {
        title: "Stay Positive!",
        message: "Positive thinking will let you do everything better than negative thinking will.",
        subtitle: "Your mindset determines your success! 🌈",
        icon: Sun,
        color: "#ff9ff3"
    },
    {
        title: "You're Amazing!",
        message: "Believe you can and you're halfway there.",
        subtitle: "Self-belief is your greatest asset. Use it wisely! 🌟",
        icon: Star,
        color: "#feca57"
    }
];


const HeartAnimation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let nextIndex;
            do {
                nextIndex = Math.floor(Math.random() * motivationalMessages.length);
            } while (nextIndex === currentIndex); // Prevent repeating the same one

            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 300);
    };

    const current = motivationalMessages[currentIndex];
    const IconComponent = current.icon || Heart;
    const accentColor = current.color || "#ff6b9d";

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
                <IconComponent
                    size={120}
                    color={accentColor}
                    fill={accentColor}
                    style={{
                        filter: `drop-shadow(0 0 20px ${accentColor}80)` // 80 is roughly 50% opacity in hex
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
                    background: `linear-gradient(135deg, ${accentColor} 0%, #ffffff 100%)`, // Dynamic gradient
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
