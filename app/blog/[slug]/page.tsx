"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock data for a single post
const post = {
    title: 'The Future of Offline-First AI',
    date: 'Nov 15, 2024',
    author: 'Dr. Sarah Chen',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
    content: `
        <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
            In an era where cloud connectivity is often taken for granted, the reliance on centralized servers for AI inference poses significant risks. From privacy concerns to latency issues and single points of failure, the current paradigm is shifting. At AVERO, we believe the future of Artificial General Intelligence (AGI) lies in offline-first architectures.
        </p>
        
        <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Why Offline-First?</h2>
        <p class="mb-6 text-muted-foreground">
            Offline-first AI isn't just about working without internet; it's about sovereignty. When your AI agent runs locally on your hardware, your data never leaves your premises. This is crucial for industries like healthcare, defense, and finance where data privacy is non-negotiable.
        </p>
        
        <h3 class="text-xl font-bold text-foreground mb-3 mt-6">1. Zero Latency</h3>
        <p class="mb-6 text-muted-foreground">
            By eliminating the round-trip to a cloud server, local inference achieves near-zero latency. This is essential for real-time applications like autonomous driving, robotics, and high-frequency trading.
        </p>

        <h3 class="text-xl font-bold text-foreground mb-3 mt-6">2. Uncompromised Privacy</h3>
        <p class="mb-6 text-muted-foreground">
            With VEXO OS, your neural weights and inference data are encrypted and processed locally. There is no "cloud" to hack, no data stream to intercept.
        </p>

        <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">The Technical Challenge</h2>
        <p class="mb-6 text-muted-foreground">
            Running large language models (LLMs) and complex agents on consumer hardware requires massive optimization. Our team has developed a proprietary quantization engine that reduces model size by up to 60% with negligible accuracy loss, allowing powerful agents to run on standard GPUs.
        </p>

        <div class="my-8 p-6 border-l-4 border-primary bg-primary/5 rounded-r-lg">
            <p class="italic text-foreground font-medium">
                "The true test of an intelligent system is its ability to function autonomously in isolation. Connectivity should be a feature, not a requirement."
            </p>
        </div>

        <h2 class="text-2xl font-bold text-foreground mb-4 mt-8">Looking Ahead</h2>
        <p class="mb-6 text-muted-foreground">
            As hardware accelerators become more powerful and efficient, the gap between cloud and edge performance will close. AVERO is at the forefront of this revolution, building the operating system that will power the next generation of autonomous, offline-first intelligence.
        </p>
    `
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <article className="pt-24 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium border border-primary/20">
                            {post.category}
                        </span>
                        <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                        <span className="flex items-center"><Clock size={14} className="mr-1" /> {post.readTime}</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-white/10 py-6 mb-10">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{post.author}</p>
                                <p className="text-xs text-muted-foreground">Author</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                            <Share2 size={20} />
                        </Button>
                    </div>

                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-red-glow">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div
                        className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary-dark"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>
            </div>
        </article>
    );
}
