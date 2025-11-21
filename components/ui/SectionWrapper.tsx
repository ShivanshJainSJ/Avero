"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            id={id}
            className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
}
