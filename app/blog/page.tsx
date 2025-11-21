"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Image from 'next/image';

const posts = [
    {
        slug: 'future-of-offline-ai',
        title: 'The Future of Offline-First AI',
        excerpt: 'Why local inference is the key to privacy, security, and the next generation of intelligent agents.',
        date: 'Nov 15, 2024',
        author: 'Dr. Sarah Chen',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
        category: 'Technology'
    },
    {
        slug: 'securing-enterprise-grids',
        title: 'Securing Enterprise Energy Grids',
        excerpt: 'How autonomous agent swarms are revolutionizing the protection of critical infrastructure.',
        date: 'Nov 02, 2024',
        author: 'David Okonjo',
        image: 'https://images.unsplash.com/photo-1558494949-efc52728101c?auto=format&fit=crop&q=80&w=800',
        category: 'Security'
    },
    {
        slug: 'vexo-os-2-release',
        title: 'Announcing VEXO OS 2.0',
        excerpt: 'A deep dive into the new features, performance improvements, and architectural changes in our latest release.',
        date: 'Oct 20, 2024',
        author: 'Marcus Rodriguez',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
        category: 'Product'
    }
];

export default function BlogPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">Latest <span className="text-gradient">Insights</span></h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        News, updates, and technical deep dives from the AVERO team.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative h-48 overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                                    {post.category}
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center">
                                        <User size={14} className="mr-1" />
                                        {post.author}
                                    </div>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="block mb-3">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                                </Link>

                                <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:text-primary-dark transition-colors mt-auto">
                                    Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
