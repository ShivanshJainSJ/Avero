"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-primary/30 bg-background hover:bg-primary/10 hover:text-primary",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const newRipple = { x, y, id: Date.now() };
            setRipples(prev => [...prev, newRipple]);

            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== newRipple.id));
            }, 600);

            onClick?.(e);
        };

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                onClick={handleClick}
                {...props}
            >
                {props.children}
                {ripples.map(ripple => (
                    <motion.span
                        key={ripple.id}
                        className="absolute rounded-full bg-primary pointer-events-none"
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                        }}
                        initial={{ width: 0, height: 0, opacity: 0.6, x: '-50%', y: '-50%' }}
                        animate={{
                            width: 300,
                            height: 300,
                            opacity: 0,
                        }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                ))}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
