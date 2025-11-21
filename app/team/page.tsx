"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import TeamCard from '@/components/TeamCard';
import teamData from '@/data/team.json';
import { motion } from 'framer-motion';

export default function TeamPage() {
    const founder = teamData[0];

    return (
        <div className="pt-20 min-h-screen">
            <SectionWrapper>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">
                        Meet the <span className="text-gradient">Founder</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The visionary mind behind AVERO and the creator of VEXO.
                    </p>
                </motion.div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10" />
                    <TeamCard member={founder} />
                </motion.div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto border-l-4 border-primary pl-6">
                        "Building intelligent systems for the next era."
                    </p>
                    <p className="text-sm text-primary mt-2">— Shivansh Jain</p>
                </motion.div>
            </SectionWrapper>
        </div>
    );
}
