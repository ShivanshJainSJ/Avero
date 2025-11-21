"use client";

import { motion } from 'framer-motion';
import { BarChart3, Activity, Zap, TrendingUp } from 'lucide-react';

export default function GlassmorphismDashboard() {
    const stats = [
        { label: 'Active Agents', value: '6', icon: Activity, change: '+12%' },
        { label: 'Tasks Completed', value: '1,247', icon: Zap, change: '+23%' },
        { label: 'System Uptime', value: '99.9%', icon: TrendingUp, change: '+0.1%' },
        { label: 'Performance', value: '94', icon: BarChart3, change: '+5%' },
    ];

    const chartData = [65, 78, 82, 75, 88, 92, 85, 90, 95, 89, 94, 97];

    return (
        <div className="space-y-6">
            {/* System booting animation */}
            <motion.div
                className="glass-card rounded-2xl border border-primary/30 p-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <motion.div
                        className="w-3 h-3 rounded-full bg-primary"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-semibold">System Status: Online</span>
                </div>
                <motion.div
                    className="h-1 bg-white/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                    />
                </motion.div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={i}
                            className="glass-card rounded-xl border border-white/10 p-6 relative overflow-hidden group hover:border-primary/50 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Floating gradient */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                }}
                                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                            />

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <Icon className="text-primary" size={24} />
                                    <span className="text-xs text-primary font-semibold">{stat.change}</span>
                                </div>
                                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Animated chart */}
            <motion.div
                className="glass-card rounded-2xl border border-primary/30 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
                <div className="h-64 flex items-end gap-2">
                    {chartData.map((value, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t relative group"
                            initial={{ height: 0 }}
                            animate={{ height: `${value}%` }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ opacity: 0.8 }}
                        >
                            <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                                initial={{ y: 10 }}
                                whileHover={{ y: 0 }}
                            >
                                {value}%
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Dec</span>
                </div>
            </motion.div>
        </div>
    );
}
