'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

declare global {
    interface Window {
        grecaptcha?: {
            ready: (cb: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}

export default function ContactForm() {
    useEffect(() => {
        emailjs.init('m-oeHcMgUspNGUK7k');
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
            if (!siteKey) {
                throw new Error('reCAPTCHA site key missing');
            }

            if (!window.grecaptcha) {
                throw new Error('reCAPTCHA not loaded');
            }

            await new Promise<void>((resolve) => window.grecaptcha!.ready(() => resolve()));
            const token = await window.grecaptcha!.execute(siteKey, { action: 'contact_submit' });

            const verifyRes = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });

            if (!verifyRes.ok) {
                throw new Error(`reCAPTCHA verification failed: ${verifyRes.status}`);
            }

            const verifyData = await verifyRes.json();
            if (!verifyData.success) {
                throw new Error('reCAPTCHA verification failed');
            }

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                reply_to: formData.email
            };

            const result = await emailjs.send(
                'service_jdv7yjf',
                'template_anj9dpn',
                templateParams
            );

            if (result.status === 200) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-white/50 dark:bg-[#1E1E1E]/50 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] dark:text-white">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1E1E1E]/50 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-200 text-[#1C1C1C] dark:text-white placeholder-[#4A4A4A] dark:placeholder-gray-500"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] dark:text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1E1E1E]/50 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-200 text-[#1C1C1C] dark:text-white placeholder-[#4A4A4A] dark:placeholder-gray-500"
                            placeholder="your.email@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] dark:text-white">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1E1E1E]/50 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-200 text-[#1C1C1C] dark:text-white placeholder-[#4A4A4A] dark:placeholder-gray-500"
                        placeholder="What's this about?"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] dark:text-white">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-[#1E1E1E]/50 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/10 dark:focus:ring-blue-400/10 transition-all duration-200 text-[#1C1C1C] dark:text-white placeholder-[#4A4A4A] dark:placeholder-gray-500 resize-none"
                        placeholder="Your message here..."
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-black hover:bg-gray-800 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </motion.button>

                {submitStatus === 'success' && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-green-600 dark:text-green-400 text-center font-medium"
                    >
                        Message sent successfully! I'll get back to you soon.
                    </motion.p>
                )}

                {submitStatus === 'error' && (
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-600 dark:text-red-400 text-center font-medium"
                    >
                        Oops! Something went wrong. Please try again.
                    </motion.p>
                )}
            </form>
        </div>
    );
} 