import { cn } from '@/lib/utils';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

export default function Section({ id, className, children, title, subtitle }: SectionProps) {
    return (
        <section id={id} className={cn('py-20 relative', className)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
