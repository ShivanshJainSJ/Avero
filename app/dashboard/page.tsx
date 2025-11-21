"use client";

import { motion } from 'framer-motion';
import GlassmorphismDashboard from '@/components/GlassmorphismDashboard';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="pt-16">
            <GlassmorphismDashboard />

            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
                        <p className="text-muted-foreground">Manage your AI systems</p>
                    </div>
                    <Button className="shadow-red-glow hover:shadow-neon">
                        <Plus className="mr-2 h-4 w-4" />
                        Deploy New Agent
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card rounded-xl p-6 border border-white/10"
                    >
                        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                        <div>
                                            <p className="text-sm font-medium text-foreground">System Update v2.{i}.0</p>
                                            <p className="text-xs text-muted-foreground">Deployed successfully</p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-muted-foreground">2h ago</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card rounded-xl p-6 border border-white/10"
                    >
                        <h2 className="text-xl font-bold mb-4">System Resources</h2>
                        <div className="space-y-6">
                            {[
                                { name: 'CPU Usage', value: 45, color: 'bg-primary' },
                                { name: 'Memory', value: 72, color: 'bg-blue-500' },
                                { name: 'Storage', value: 28, color: 'bg-green-500' },
                                { name: 'Network', value: 60, color: 'bg-purple-500' },
                            ].map((resource) => (
                                <div key={resource.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium text-muted-foreground">{resource.name}</span>
                                        <span className="text-sm font-bold text-foreground">{resource.value}%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${resource.value}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full rounded-full ${resource.color} shadow-[0_0_10px_currentColor]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
