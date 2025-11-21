"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AITextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function AITextReveal({ text, className = '', delay = 0 }: AITextRevealProps) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 30 + Math.random() * 30);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <div className={`relative ${className}`}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay }}
            >
                {displayText}
                {currentIndex < text.length && (
                    <motion.span
                        className="inline-block w-0.5 h-5 bg-primary ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                )}
            </motion.div>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    delay,
                }}
                style={{ mixBlendMode: 'overlay' }}
            />
        </div>
    );
}
