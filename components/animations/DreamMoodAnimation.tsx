"use client";

import { motion } from 'framer-motion';

export default function DreamMoodAnimation() {
    const moods = [
        { color: 'rgba(255,26,26,0.3)', icon: '😴' },
        { color: 'rgba(196,0,0,0.3)', icon: '😌' },
        { color: 'rgba(122,0,0,0.3)', icon: '🌙' },
    ];

    return (
        <div className="relative w-full h-64 overflow-hidden">
            {/* Swirling fog */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        width: 150 + i * 30,
                        height: 150 + i * 30,
                        background: `radial-gradient(circle, ${moods[i % moods.length].color} 0%, transparent 70%)`,
                        filter: 'blur(40px)',
                        left: '50%',
                        top: '50%',
                    }}
                    animate={{
                        x: ['-50%', `${-50 + Math.sin(i) * 20}%`],
                        y: ['-50%', `${-50 + Math.cos(i) * 20}%`],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Mood icons emerging */}
            {moods.map((mood, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                        left: `${30 + i * 20}%`,
                        top: '50%',
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: [20, -20],
                        scale: [0, 1, 1, 0.8],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 1.3,
                        ease: 'easeInOut',
                    }}
                >
                    {mood.icon}
                </motion.div>
            ))}

            {/* Dynamic glow */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, rgba(255,26,26,0.1) 0%, transparent 70%)',
                }}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
