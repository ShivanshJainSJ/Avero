"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const AnimatedInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <div className="relative group">
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 border-white/10 bg-white/5 focus:border-primary/50 focus:bg-white/10 focus:shadow-red-glow",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300 -z-10 blur-sm" />
            </div>
        );
    }
);
AnimatedInput.displayName = "AnimatedInput";

export { AnimatedInput };
