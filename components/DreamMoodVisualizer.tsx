"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Smile, Meh, Frown, Moon, Sun } from 'lucide-react';

const moods = [
    { name: 'Happy', icon: Smile, color: '#FFD700', gradient: 'from-yellow-500/30 to-orange-500/30' },
    { name: 'Neutral', icon: Meh, color: '#87CEEB', gradient: 'from-blue-500/30 to-cyan-500/30' },
    { name: 'Sad', icon: Frown, color: '#4169E1', gradient: 'from-blue-700/30 to-purple-700/30' },
];

export default function DreamMoodVisualizer() {
    const [currentMood, setCurrentMood] = useState(0);
    const [wavePhase, setWavePhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMood((prev) => (prev + 1) % moods.length);
        }, 5000);

        const waveInterval = setInterval(() => {
            setWavePhase((prev) => (prev + 1) % 360);
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(waveInterval);
        };
    }, []);

    const mood = moods[currentMood];
    const MoodIcon = mood.icon;

    return (
        <div className="glass-card rounded-2xl border border-primary/30 p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-6 text-center relative z-10">
                Dream Mood Predictor
            </h3>

            {/* Animated fog background */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${mood.gradient} blur-3xl`}
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Mood waves */}
            <div className="relative h-64 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full">
                    {[0, 1, 2].map((i) => (
                        <motion.path
                            key={i}
                            d={`M 0 ${128 + i * 20} Q 100 ${100 + Math.sin((wavePhase + i * 30) * (Math.PI / 180)) * 30} 200 ${128 + i * 20} T 400 ${128 + i * 20}`}
                            stroke={mood.color}
                            strokeWidth="2"
                            fill="none"
                            opacity={0.3 - i * 0.1}
                            animate={{
                                d: [
                                    `M 0 ${128 + i * 20} Q 100 ${100 + Math.sin((wavePhase + i * 30) * (Math.PI / 180)) * 30} 200 ${128 + i * 20} T 400 ${128 + i * 20}`,
                                    `M 0 ${128 + i * 20} Q 100 ${156 + Math.sin((wavePhase + i * 30 + 180) * (Math.PI / 180)) * 30} 200 ${128 + i * 20} T 400 ${128 + i * 20}`,
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                        />
                    ))}
                </svg>

                {/* Mood icon */}
                <motion.div
                    className="relative z-10"
                    key={currentMood}
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="w-24 h-24 rounded-full flex items-center justify-center"
                        style={{
                            backgroundColor: `${mood.color}20`,
                            border: `2px solid ${mood.color}`,
                        }}
                        animate={{
                            boxShadow: [
                                `0 0 0px ${mood.color}40`,
                                `0 0 40px ${mood.color}80`,
                                `0 0 0px ${mood.color}40`,
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <MoodIcon size={48} style={{ color: mood.color }} />
                    </motion.div>
                </motion.div>
            </div>

            {/* Mood indicators */}
            <div className="flex justify-center gap-4 mt-8 relative z-10">
                {moods.map((m, i) => {
                    const Icon = m.icon;
                    return (
                        <motion.button
                            key={i}
                            onClick={() => setCurrentMood(i)}
                            className={`p-3 rounded-lg border-2 transition-all ${i === currentMood
                                    ? 'border-primary bg-primary/20'
                                    : 'border-white/10 bg-white/5 hover:border-primary/50'
                                }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Icon size={24} style={{ color: i === currentMood ? m.color : '#666' }} />
                        </motion.button>
                    );
                })}
            </div>

            {/* Sleep cycle indicator */}
            <div className="mt-6 flex items-center justify-center gap-4 relative z-10">
                <Moon className="text-primary" size={20} />
                <div className="flex-1 max-w-xs h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        animate={{ width: ['0%', '100%'] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                </div>
                <Sun className="text-primary" size={20} />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-4 relative z-10">
                Current Mood: <span className="font-semibold" style={{ color: mood.color }}>{mood.name}</span>
            </p>
        </div>
    );
}
