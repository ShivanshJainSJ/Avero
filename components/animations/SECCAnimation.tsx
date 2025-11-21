"use client";

import { motion } from 'framer-motion';

export default function SECCAnimation() {
    return (
        <div className="relative w-full h-64 flex items-center justify-center">
            {/* Heartbeat pulse */}
            <motion.div
                className="absolute w-32 h-32 rounded-full border-2 border-primary"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Safety shield */}
            <motion.div
                className="absolute w-40 h-40 rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255,26,26,0.2) 0%, transparent 70%)',
                }}
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
            />

            {/* Fall detection alert pulses */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                        left: '50%',
                        top: '50%',
                    }}
                    animate={{
                        x: [0, Math.cos(i * Math.PI / 2) * 60],
                        y: [0, Math.sin(i * Math.PI / 2) * 60],
                        opacity: [1, 0],
                        scale: [1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeOut',
                    }}
                />
            ))}

            {/* Center icon */}
            <motion.div
                className="relative z-10 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
                animate={{
                    boxShadow: [
                        '0 0 20px rgba(255,26,26,0.5)',
                        '0 0 40px rgba(255,26,26,0.8)',
                        '0 0 20px rgba(255,26,26,0.5)',
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
            </motion.div>
        </div>
    );
}
