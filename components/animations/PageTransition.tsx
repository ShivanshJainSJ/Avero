"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{
                    scaleX: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    opacity: { duration: 0.3 },
                }}
                style={{
                    transformOrigin: 'center',
                }}
            >
                <motion.div
                    initial={{ boxShadow: '0 0 100px 50px rgba(255,26,26,0.5)' }}
                    animate={{ boxShadow: '0 0 0px 0px rgba(255,26,26,0)' }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
