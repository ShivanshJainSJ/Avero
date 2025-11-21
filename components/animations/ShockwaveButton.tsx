"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShockwaveButton({ children, onClick, className = '', ...props }: any) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples(prev => [...prev, newRipple]);

        setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);

        onClick?.(e);
    };

    return (
        <motion.button
            className={`relative overflow-hidden ${className}`}
            onClick={handleClick}
            whileTap={{ scale: 0.97 }}
            {...props}
        >
            {children}
            {ripples.map(ripple => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-primary pointer-events-none"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                    }}
                    initial={{ width: 0, height: 0, opacity: 0.6, x: '-50%', y: '-50%' }}
                    animate={{
                        width: 300,
                        height: 300,
                        opacity: 0,
                    }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />
            ))}
        </motion.button>
    );
}
