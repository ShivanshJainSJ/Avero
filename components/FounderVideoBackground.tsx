"use client";

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function FounderVideoBackground() {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(100%)' }}
                >
                    <source src="/video/founder-silhouette.mp4" type="video/mp4" />
                </video>

                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent mix-blend-multiply" />

                {/* Kinetic glow effect */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            'radial-gradient(circle at 20% 50%, rgba(255,26,26,0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 50%, rgba(255,26,26,0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 80%, rgba(255,26,26,0.3) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 50%, rgba(255,26,26,0.3) 0%, transparent 50%)',
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <motion.div
                    className="text-center max-w-4xl px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <h2 className="text-6xl md:text-8xl font-bold mb-6">
                        <span className="text-gradient">Vision</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        Building AGI systems that empower humanity
                    </p>
                </motion.div>
            </div>

            {/* Scanline effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,26,26,0.03) 0px, transparent 2px)',
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground z-20">
                📝 Optional: Add founder-silhouette.mp4 to /public/video/
            </p>
        </div>
    );
}
