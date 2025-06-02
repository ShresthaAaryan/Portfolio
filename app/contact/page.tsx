'use client';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Briefcase, Users } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <Hero
                title="Contact Me"
                description="Get in touch with me for any inquiries or opportunities."
                buttons={[
                    {
                        text: "View Projects",
                        link: "/projects"
                    }
                ]}
            />

            <section id="contact-form" className="py-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-cormorant font-medium mb-6 text-[#1C1C1C] dark:text-white">
                            Let's Connect
                        </h2>
                        <p className="text-[#4A4A4A] dark:text-gray-400 max-w-2xl mx-auto">
                            Feel free to reach out to me for any questions or opportunities.
                        </p>
                    </motion.div>

                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-4 space-y-8"
                            >
                                <div className="bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 dark:border-white/10">
                                    <h3 className="text-2xl font-semibold text-[#1C1C1C] dark:text-white mb-6">
                                        Contact Information
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Email</h4>
                                                <a href="mailto:shresthaaaryan123@gmail.com" className="text-[#4A4A4A] dark:text-gray-400 hover:text-[#1C1C1C] dark:hover:text-white transition-colors">
                                                    shresthaaaryan123@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Phone</h4>
                                                <a href="tel:+9779845067089" className="text-[#4A4A4A] dark:text-gray-400 hover:text-[#1C1C1C] dark:hover:text-white transition-colors">
                                                    +977 (9845) 067-089
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Location</h4>
                                                <p className="text-[#4A4A4A] dark:text-gray-400">
                                                    Kathmandu, Nepal
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 dark:border-white/10">
                                    <h3 className="text-2xl font-semibold text-[#1C1C1C] dark:text-white mb-6">
                                        Availability
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Clock className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Working Hours</h4>
                                                <p className="text-[#4A4A4A] dark:text-gray-400">
                                                    Monday - Friday: 9:00 AM - 6:00 PM
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Briefcase className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Employment</h4>
                                                <p className="text-[#4A4A4A] dark:text-gray-400">
                                                    Available for full-time positions
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Users className="w-6 h-6 text-[#1C1C1C] dark:text-white mt-1" />
                                            <div>
                                                <h4 className="text-[#1C1C1C] dark:text-white font-medium mb-1">Collaboration</h4>
                                                <p className="text-[#4A4A4A] dark:text-gray-400">
                                                    Open to freelance projects
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-8"
                            >
                                <div className="bg-white/80 dark:bg-[#1E1E1E]/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/20 dark:border-white/10 h-full">
                                    <ContactForm />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
} 