"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function AuthCard({ children, title, subtitle, className }: { children: React.ReactNode; title: string; subtitle?: string; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("w-full max-w-md mx-auto", className)}
        >
            <div className="glass-card rounded-2xl p-8 md:p-10 border-t border-white/20 shadow-2xl shadow-black/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-red-500 to-primary-dark"></div>
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
                    {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
                </div>
                {children}
            </div>
        </motion.div>
    );
}
