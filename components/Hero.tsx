'use client';

import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import hero1 from '../public/hero1.jpg';
import hero2 from '../public/hero2.jpg';
import hero11 from '../public/hero11.jpg'
import hero from '../public/hero.jpg'

interface HeroProps {
    title: string;
    description: string;
    buttons?: {
        text: string;
        link: string;
        icon?: React.ReactNode;
    }[];
}

export default function Hero({ title, description, buttons }: HeroProps) {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const getHeroImage = () => {
        switch (pathname) {
            case '/':
                return hero1;
            case '/projects':
                return hero2;
            case '/contact':
                return hero2;
            default:
                return 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80';
        }
    };

    const getRightColumnImage = () => {
        switch (pathname) {
            case '/':
                return hero;
            case '/projects':
                return 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80';
            case '/contact':
                return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80';
            default:
                return hero11;
        }
    };

    const handleScroll = () => {
        const heroSection = document.querySelector('section');
        if (heroSection) {
            const nextSection = heroSection.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    };

    if (!mounted) return null;

    return (
        <section className="relative h-screen md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={getHeroImage()}
                    alt="Hero Background"
                    fill
                    className="object-cover brightness-100"
                    priority
                    quality={100}
                    unoptimized
                />
                <div className="absolute inset-0 bg-black/70" />
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto py-0 md:py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-white space-y-4 md:space-y-8 order-1 lg:order-1 py-0 md:py-0 my-0">
                            <div className="space-y-2 md:space-y-4 text-center lg:text-start">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-cormorant font-medium">
                                    {title}
                                </h1>
                                <p className="text-white/90 text-base sm:text-lg md:text-xl">
                                    {description}
                                </p>
                            </div>

                            {buttons && buttons.length > 0 && (
                                <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                                    {buttons.map((button, index) => (
                                        <a
                                            key={index}
                                            href={button.link}
                                            className="inline-flex items-center px-4 gap-2 sm:px-6 py-2 sm:py-3 bg-white text-[#1C1C1C] rounded-md hover:bg-gray-100 transition-colors text-sm sm:text-base"
                                        >
                                            {button.text}
                                            {button.icon}

                                            {!button.icon && <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Social Links */}
                            <div className="flex items-center space-x-6 justify-center lg:justify-start mt-4">
                                <a
                                    href="https://github.com/ShresthaAaryan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white transition-colors transform hover:scale-110"
                                >
                                    <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="https://linkedin.com/in/aaryanshrestha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-white transition-colors transform hover:scale-110"
                                >
                                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                                <a
                                    href="mailto:shresthaaaryan123@gmail.com"
                                    className="text-white/80 hover:text-white transition-colors transform hover:scale-110"
                                >
                                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-2 mb-6 lg:mb-0 py-0 md:py-0 my-0">
                            <Image
                                src={getRightColumnImage()}
                                alt="Aaryan Shrestha"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={handleScroll}
                    className="flex flex-col items-center text-white/80 hover:text-white transition-colors duration-300"
                >
                    <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </button>
            </div>
        </section>
    );
} 