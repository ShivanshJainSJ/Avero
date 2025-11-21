"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AlertTriangle, Heart, Bell, Activity } from 'lucide-react';

export default function SECCInteractiveDemo() {
    const [activeAlert, setActiveAlert] = useState<string | null>(null);
    const [heartRate, setHeartRate] = useState(72);
    const [showMedicationReminder, setShowMedicationReminder] = useState(false);

    useEffect(() => {
        // Simulate heartbeat
        const heartInterval = setInterval(() => {
            setHeartRate((prev) => 70 + Math.floor(Math.random() * 10));
        }, 1000);

        // Simulate medication reminder
        const medicationInterval = setInterval(() => {
            setShowMedicationReminder(true);
            setTimeout(() => setShowMedicationReminder(false), 3000);
        }, 15000);

        return () => {
            clearInterval(heartInterval);
            clearInterval(medicationInterval);
        };
    }, []);

    const triggerFallDetection = () => {
        setActiveAlert('fall');
        setTimeout(() => setActiveAlert(null), 3000);
    };

    return (
        <div className="glass-card rounded-2xl border border-primary/30 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">SECC Live Demo</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Fall Detection */}
                <motion.div
                    className={`p-6 rounded-xl border-2 ${activeAlert === 'fall'
                            ? 'border-primary bg-primary/10'
                            : 'border-white/10 bg-white/5'
                        }`}
                    animate={
                        activeAlert === 'fall'
                            ? {
                                boxShadow: [
                                    '0 0 0px rgba(255,26,26,0.4)',
                                    '0 0 30px rgba(255,26,26,0.8)',
                                    '0 0 0px rgba(255,26,26,0.4)',
                                ],
                            }
                            : {}
                    }
                    transition={{ duration: 0.5, repeat: activeAlert === 'fall' ? Infinity : 0 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="text-primary" size={24} />
                        <h4 className="font-bold">Fall Detection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                        AI-powered fall detection with instant caregiver alerts
                    </p>
                    <button
                        onClick={triggerFallDetection}
                        className="w-full px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-colors"
                    >
                        Simulate Fall Detection
                    </button>
                    {activeAlert === 'fall' && (
                        <motion.div
                            className="mt-4 p-3 rounded-lg bg-primary/20 border border-primary"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p className="text-sm font-semibold text-primary">⚠️ Fall Detected!</p>
                            <p className="text-xs text-muted-foreground mt-1">
                                Alert sent to caregivers
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Vitals Monitoring */}
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="text-primary" size={24} />
                        <h4 className="font-bold">Vitals Monitoring</h4>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm">Heart Rate</span>
                                <motion.span
                                    className="text-2xl font-bold text-primary"
                                    key={heartRate}
                                    initial={{ scale: 1.2 }}
                                    animate={{ scale: 1 }}
                                >
                                    {heartRate}
                                </motion.span>
                            </div>
                            <div className="h-16 flex items-end gap-1">
                                {[...Array(20)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex-1 bg-primary/30 rounded-t"
                                        animate={{
                                            height: `${30 + Math.sin((i + heartRate) * 0.5) * 20}%`,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medication Reminder */}
                <motion.div
                    className={`p-6 rounded-xl border-2 ${showMedicationReminder
                            ? 'border-primary bg-primary/10'
                            : 'border-white/10 bg-white/5'
                        }`}
                    animate={
                        showMedicationReminder
                            ? {
                                scale: [1, 1.02, 1],
                            }
                            : {}
                    }
                    transition={{ duration: 0.5, repeat: showMedicationReminder ? 3 : 0 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Bell className="text-primary" size={24} />
                        <h4 className="font-bold">Medication Reminder</h4>
                    </div>
                    {showMedicationReminder && (
                        <motion.div
                            className="p-3 rounded-lg bg-primary/20 border border-primary"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <p className="font-semibold">💊 Time for medication</p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Blood pressure medication - 2:00 PM
                            </p>
                        </motion.div>
                    )}
                </motion.div>

                {/* Calm Monitoring */}
                <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5">
                    <div className="flex items-center gap-3 mb-4">
                        <Activity className="text-primary" size={24} />
                        <h4 className="font-bold">Activity Monitoring</h4>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Movement</span>
                            <motion.div
                                className="w-3 h-3 rounded-full bg-primary"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Status</span>
                            <span className="text-sm text-primary">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm">Last Check</span>
                            <span className="text-sm text-muted-foreground">2 min ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
