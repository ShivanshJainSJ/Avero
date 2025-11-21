"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LayoutDashboard, Box, Settings, Users, FileText, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Products', href: '/dashboard/products', icon: Box },
    { name: 'Team', href: '/dashboard/team', icon: Users },
    { name: 'Reports', href: '/dashboard/reports', icon: FileText },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-surface/50 border-r border-white/10 hidden md:flex flex-col h-screen sticky top-16 pt-6">
            <div className="px-6 mb-8">
                <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Menu</h2>
            </div>
            <nav className="flex-1 px-4 space-y-2">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href}>
                            <div className={cn(
                                "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group relative overflow-hidden",
                                isActive
                                    ? "text-primary bg-primary/10 shadow-red-glow"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}>
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute inset-0 bg-primary/10 border-l-2 border-primary"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <item.icon className={cn("mr-3 h-5 w-5 relative z-10", isActive ? "text-primary" : "group-hover:text-primary transition-colors")} />
                                <span className="relative z-10">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 border-t border-white/10">
                <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                    <LogOut className="mr-3 h-5 w-5" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
