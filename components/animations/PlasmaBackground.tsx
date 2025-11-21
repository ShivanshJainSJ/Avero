"use client";

import { motion } from 'framer-motion';

export default function PlasmaBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(255,26,26,0.3) 0%, rgba(196,0,0,0.1) 50%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                animate={{
                    x: ['-20%', '120%'],
                    y: ['-20%', '80%', '-20%'],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(122,0,0,0.4) 0%, rgba(255,26,26,0.2) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
                animate={{
                    x: ['100%', '-20%'],
                    y: ['80%', '-20%', '80%'],
                    scale: [0.8, 1.3, 1, 0.8],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-[700px] h-[700px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(196,0,0,0.25) 0%, rgba(122,0,0,0.15) 50%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
                animate={{
                    x: ['50%', '10%', '50%'],
                    y: ['10%', '90%', '10%'],
                    scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </div>
    );
}
