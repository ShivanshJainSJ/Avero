"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    skills?: string[];
    image: string;
    email?: string;
    socials?: {
        twitter?: string;
        linkedin?: string;
        github?: string;
    };
}

export default function TeamCard({ member }: { member: TeamMember }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden max-w-2xl mx-auto"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                    className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 group-hover:border-primary shadow-red-glow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                    <motion.h3
                        className="text-3xl font-bold mb-2 text-gradient"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {member.name}
                    </motion.h3>

                    <motion.p
                        className="text-primary text-lg mb-4 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {member.role}
                    </motion.p>

                    <motion.p
                        className="text-muted-foreground mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {member.description}
                    </motion.p>

                    {member.skills && (
                        <motion.div
                            className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {member.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs text-primary font-medium"
                                    whileHover={{ scale: 1.05, borderColor: 'rgba(255,26,26,0.6)' }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    )}

                    <motion.div
                        className="flex gap-4 justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        {member.email && (
                            <motion.a
                                href={`mailto:${member.email}`}
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <Mail size={18} className="text-primary" />
                            </motion.a>
                        )}
                        {member.socials?.linkedin && (
                            <motion.a
                                href={member.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <Linkedin size={18} className="text-primary" />
                            </motion.a>
                        )}
                        {member.socials?.github && (
                            <motion.a
                                href={member.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                <Github size={18} className="text-primary" />
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
