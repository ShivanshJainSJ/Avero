import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export default function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] border border-primary/20',
        secondary: 'bg-surface border border-primary/30 hover:bg-primary/10 text-white hover:border-primary/50 shadow-[0_0_15px_rgba(255,26,26,0.1)]',
        outline: 'border border-primary text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(255,26,26,0.1)]',
        ghost: 'hover:bg-white/5 text-gray-300 hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={cn(
                'rounded-full font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
