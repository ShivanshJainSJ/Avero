"use client";

import Link from 'next/link';
import { ArrowRight, Zap, Shield, Cpu, Leaf, Moon, Scan, HeartPulse } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

interface Product {
    title: string;
    description: string;
    slug: string;
    features: string[];
    icon?: string;
}

const iconMap: { [key: string]: any } = {
    zap: Zap,
    shield: Shield,
    cpu: Cpu,
    leaf: Leaf,
    moon: Moon,
    scan: Scan,
    'heart-pulse': HeartPulse,
};

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
    const Icon = product.icon && iconMap[product.icon] ? iconMap[product.icon] : Cpu;
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX: isHovered ? rotateX : "0deg",
                rotateY: isHovered ? rotateY : "0deg",
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,26,26,0.1) 0%, transparent 50%, rgba(196,0,0,0.1) 100%)',
                    backgroundSize: '200% 200%',
                }}
                animate={isHovered ? {
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/20"
                animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
            />

            <div className="mb-6 relative z-10">
                <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 border border-primary/20 group-hover:border-primary/50 transition-all shadow-lg shadow-primary/5"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
                >
                    <Icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
            </div>

            <div className="space-y-3 mb-8 relative z-10">
                {product.features.slice(0, 3).map((feature, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shadow-[0_0_5px_#FF1A1A]" />
                        {feature}
                    </motion.div>
                ))}
            </div>

            <div className="mt-auto relative z-10">
                <Link href={`/products/${product.slug}`} className="w-full block">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white border-primary/30">
                        Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
