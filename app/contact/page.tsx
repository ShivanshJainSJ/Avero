"use client";

import SectionWrapper from '@/components/ui/SectionWrapper';
import ContactForm from '../../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-red-glow">Get in <span className="text-gradient">Touch</span></h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Ready to transform your infrastructure with offline-first AI? Contact our team to discuss your specific needs and requirements.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-6 border border-primary/20 shrink-0">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Email Us</h3>
                                    <p className="text-muted-foreground mb-1">General Inquiries</p>
                                    <a href="mailto:sjshivanshjain@gmail.com" className="text-primary hover:text-primary-dark transition-colors font-medium">sjshivanshjain@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-6 border border-primary/20 shrink-0">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Location</h3>
                                    <p className="text-muted-foreground">
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-6 border border-primary/20 shrink-0">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">Call Us</h3>
                                    <p className="text-muted-foreground mb-1">Available for inquiries</p>
                                    <a href="tel:+917900921775" className="text-primary hover:text-primary-dark transition-colors font-medium">+91 7900921775</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/10 shadow-red-glow">
                        <ContactForm />
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
