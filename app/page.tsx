"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ProductCard from '@/components/ProductCard';
import FounderSpotlight from '@/components/FounderSpotlight';
import CinematicIntro from '@/components/animations/CinematicIntro';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import productsData from '@/data/products.json';

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);
    const featuredProducts = productsData.slice(0, 3);

    return (
        <>
            {showIntro && (
                <CinematicIntro onComplete={() => setShowIntro(false)} />
            )}
            <Hero />

            <SectionWrapper id="products" className="bg-surface/50">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Solutions</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Cutting-edge technology designed to solve the world&apos;s most complex challenges.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <ProductCard key={product.slug} product={product} index={index} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link href="/products">
                        <Button variant="ghost" className="group">
                            View All Products <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Why <span className="text-gradient">AVERO</span>?</h2>
                        <div className="space-y-6">
                            {[
                                { title: 'Offline-First Architecture', desc: 'Our systems are designed to operate without constant internet connectivity, ensuring reliability and privacy.' },
                                { title: 'Enterprise Grade Security', desc: 'Military-grade encryption and localized data processing keep your sensitive information secure.' },
                                { title: 'Scalable Intelligence', desc: 'From edge devices to massive server clusters, our AI scales seamlessly with your needs.' }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1">
                                        <CheckCircle2 className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-card border-primary/20 shadow-red-glow group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border-2 border-primary/30 rounded-full animate-spin-slow relative">
                                <div className="absolute inset-4 border-2 border-primary/50 rounded-full animate-reverse-spin"></div>
                                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <FounderSpotlight />

            <SectionWrapper>
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to <span className="text-gradient">Get Started?</span></h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join us in building the future of intelligent systems.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="shadow-red-glow hover:shadow-neon">
                            Contact Us <ArrowRight className="ml-2" size={20} />
                        </Button>
                    </Link>
                </div>
            </SectionWrapper>
        </>
    );
}
