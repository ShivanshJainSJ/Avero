"use client";

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Achievement {
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
}

interface AchievementCounterProps {
    achievements: Achievement[];
}

export default function AchievementCounter({ achievements }: AchievementCounterProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => (
                <CounterCard key={i} achievement={achievement} index={i} />
            ))}
        </div>
    );
}

function CounterCard({ achievement, index }: { achievement: Achievement; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000 });
    const displayValue = useMotionValue(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(achievement.value);
        }
    }, [isInView, achievement.value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on('change', (latest) => {
            displayValue.set(Math.round(latest));
        });
        return unsubscribe;
    }, [springValue, displayValue]);

    return (
        <motion.div
            ref={ref}
            className="glass-card p-6 rounded-xl border border-primary/30 text-center relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,26,26,0.6)' }}
        >
            {/* Red glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
            />

            {/* Animated number */}
            <motion.div className="text-4xl md:text-5xl font-bold text-primary mb-2 relative z-10">
                {achievement.prefix}
                <motion.span>
                    {isInView ? Math.round(springValue.get()) : 0}
                </motion.span>
                {achievement.suffix}
            </motion.div>

            {/* Label */}
            <div className="text-sm text-muted-foreground relative z-10">{achievement.label}</div>

            {/* Pulse ring */}
            <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-xl"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
        </motion.div>
    );
}
