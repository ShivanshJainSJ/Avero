import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Products: [
            { name: 'VEXO OS', href: '/products/vexo' },
            { name: 'CropAssist', href: '/products/crop-assist' },
            { name: 'SECC', href: '/products/secc' },
        ],
        Company: [
            { name: 'About Us', href: '/team' },
            { name: 'Roadmap', href: '/roadmap' },
            { name: 'Blog', href: '/blog' },
            { name: 'Contact', href: '/contact' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
        ],
    };

    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <span className="text-2xl font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">AVERO</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Pioneering the future of intelligent systems. We build secure, scalable, and offline-first AI infrastructure for the next era of computing.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com/shivansh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-red-glow"><Twitter size={20} /></a>
                            <a href="https://www.linkedin.com/in/shivansh-jain-sj/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-red-glow"><Linkedin size={20} /></a>
                            <a href="https://github.com/ShivanshJainSJ" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-red-glow"><Github size={20} /></a>
                            <a href="mailto:sjshivanshjain@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-red-glow"><Mail size={20} /></a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-foreground font-semibold mb-6">{category}</h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm hover:translate-x-1 inline-block duration-200">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} AVERO Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <span className="text-muted-foreground text-sm flex items-center">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
