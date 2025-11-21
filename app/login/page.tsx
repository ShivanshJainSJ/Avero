"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import AuthCard from '@/components/AuthCard';
import { Button } from '@/components/ui/Button';
import { AnimatedInput } from '@/components/ui/AnimatedInput';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 bg-fixed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>

            <AuthCard title="Welcome Back" subtitle="Sign in to access your VEXO dashboard">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email address
                        </label>
                        <AnimatedInput
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <AnimatedInput
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <div className="flex justify-end mt-2">
                            <Link href="#" className="text-sm text-primary hover:text-primary-dark transition-colors">
                                Forgot password?
                            </Link>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full shadow-red-glow hover:shadow-neon"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                                Signing in...
                            </span>
                        ) : (
                            <span className="flex items-center">
                                Sign in <ArrowRight size={16} className="ml-2" />
                            </span>
                        )}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="font-medium text-primary hover:text-primary-dark transition-colors">
                        Sign up
                    </Link>
                </div>
            </AuthCard>
        </div>
    );
}
