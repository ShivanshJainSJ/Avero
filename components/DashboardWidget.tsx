"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DashboardWidgetProps {
    title: string;
    value: string | number;
    icon: React.ReactNode;
    trend?: number;
    progress?: number;
}

export default function DashboardWidget({ title, value, icon, trend, progress }: DashboardWidgetProps) {
    const [animatedValue, setAnimatedValue] = useState(0);
    const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/[^0-9]/g, ''));

    useEffect(() => {
        if (typeof value === 'number') {
            let start = 0;
            const duration = 2000;
            const increment = numericValue / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    setAnimatedValue(numericValue);
                    clearInterval(timer);
                } else {
                    setAnimatedValue(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [value, numericValue]);

    return (
        <motion.div
            className="glass-card p-6 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="text-muted-foreground text-sm font-medium">{title}</div>
                <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                >
                    {icon}
                </motion.div>
            </div>

            <motion.div
                className="text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                {typeof value === 'number' ? animatedValue.toLocaleString() : value}
            </motion.div>

            {trend !== undefined && (
                <div className={`text-sm ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}% from last month
                </div>
            )}

            {progress !== undefined && (
                <div className="mt-4">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-primary to-secondary"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        />
                    </div>
                </div>
            )}

            <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </motion.div>
    );
}
