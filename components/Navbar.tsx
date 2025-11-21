"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleLogoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleLogoMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsLogoHovered(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/products', label: 'Products' },
        { href: '/solutions', label: 'Solutions' },
        {
            label: 'Explore',
            dropdown: [
                { href: '/demos', label: 'Demos' },
                { href: '/showcase', label: 'Showcase' },
                { href: '/developers', label: 'Developers' },
                { href: '/dashboard', label: 'Dashboard' },
            ]
        },
        { href: '/roadmap', label: 'Roadmap' },
        { href: '/team', label: 'Team' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
    ];

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <motion.nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center space-x-3">
                        <motion.div
                            className="relative"
                            style={{
                                rotateX: isLogoHovered ? rotateX : "0deg",
                                rotateY: isLogoHovered ? rotateY : "0deg",
                                transformStyle: "preserve-3d",
                            }}
                            onMouseMove={handleLogoMouseMove}
                            onMouseEnter={() => setIsLogoHovered(true)}
                            onMouseLeave={handleLogoMouseLeave}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                                animate={isLogoHovered ? {
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                } : {}}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <Image
                                src="/averologo.png"
                                alt="AVERO"
                                width={40}
                                height={40}
                                className="relative"
                            />
                        </motion.div>
                        <span className="relative text-xl font-bold text-gradient">AVERO</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {link.dropdown ? (
                                    <>
                                        <button className="text-muted-foreground hover:text-primary transition-colors relative group flex items-center gap-1">
                                            {link.label}
                                            <motion.svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                animate={{ rotate: openDropdown === link.label ? 180 : 0 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </motion.svg>
                                            <motion.span
                                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {openDropdown === link.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full left-0 mt-2 w-48 glass-card border border-primary/30 rounded-xl overflow-hidden shadow-xl"
                                                >
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                                        >
                                                            {item.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href!}
                                        className="text-muted-foreground hover:text-primary transition-colors relative group"
                                    >
                                        {link.label}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                                        />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <Link href="/login">
                            <Button variant="ghost">Log In</Button>
                        </Link>
                        <Link href="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/10"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <div key={link.label}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="text-sm font-semibold text-primary">{link.label}</div>
                                            <div className="pl-4 space-y-2">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block text-muted-foreground hover:text-primary transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href!}
                                            className="block text-muted-foreground hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-4 border-t border-white/10 space-y-2">
                                <Link href="/login" className="block">
                                    <Button variant="ghost" className="w-full">Log In</Button>
                                </Link>
                                <Link href="/register" className="block">
                                    <Button className="w-full">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
