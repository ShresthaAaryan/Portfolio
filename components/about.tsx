'use client';

import React, { JSX } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Instagram, Linkedin, Github, ArrowRight, Award, BookOpen, Code2, Briefcase } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import hero from '../public/hero1.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left Column - Image */}
                        <div className="relative p-4">
                            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden sophisticated-shadow">
                                <Image
                                    src={hero}
                                    alt="Aaryan Shrestha"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-6 md:-right-6 md:w-32 md:h-32 border-2 border-accent-color rounded-lg" />
                            <div className="absolute -top-4 -left-4 w-20 h-20 md:-top-6 md:-left-6 md:w-24 md:h-24 border-2 border-accent-color rounded-lg" />
                        </div>

                        {/* Right Column - Content */}
                        <div className="space-y-8 md:space-y-12 text-center md:text-left p-4 md:p-6">
                            <div className="space-y-4">
                                <h2 className="heading-2 mb-2">About Me</h2>
                                <div className="w-16 h-1 bg-accent-color rounded-full mx-auto md:mx-0" />
                            </div>

                            <div className="space-y-8">
                                <p className="body-text text-[#4A4A4A] dark:text-[#CCCCCC] leading-relaxed px-4 md:px-0">
                                    A passionate Full Stack Developer and Computer Science student at Vellore Institute of Technology, specializing in modern web technologies and microservices architecture. With expertise in the MERN stack, TypeScript, and Next.js, I've developed robust e-commerce platforms and inventory management systems. Currently interning at WhovianSoft Pvt. Ltd. My academic excellence (CGPA: 8.61) is complemented by practical experience in building Robust applications and implementing secure authentication mechanisms.
                                </p>

                                {/* Key Achievements */}
                                <div className="space-y-4 p-4 md:p-6 bg-white/5 dark:bg-black/5 rounded-xl">
                                    <h3 className="text-xl font-semibold flex items-center gap-2 justify-center md:justify-start">
                                        <Award className="w-5 h-5" />
                                        Key Achievements
                                    </h3>
                                    <ul className="space-y-3 text-[#4A4A4A] dark:text-[#CCCCCC]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span className='text-start'>Co-Author of Book Chapter on "Federated Learning For Secure Smart Cities Using IOT"</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span className='text-start'>Completed multiple full-stack development projects</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span className='text-start'>Maintaining 8.61 CGPA at VIT in Computer Science Engineering</span>
                                        </li>
                                        {/* <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span className='text-start'>Completed The Complete 2024 Web Development Bootcamp by Dr. Angela Yu</span>
                                        </li> */}
                                    </ul>
                                </div>

                                {/* Current Focus */}
                                {/* <div className="space-y-4 p-4 md:p-6 bg-white/5 dark:bg-black/5 rounded-xl">
                                    <h3 className="text-xl font-semibold flex items-center gap-2 justify-center md:justify-start">
                                        <Code2 className="w-5 h-5" />
                                        Current Focus
                                    </h3>
                                    <ul className="space-y-3 text-[#4A4A4A] dark:text-[#CCCCCC]">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span>Full-stack web development using MERN Stack</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span>Data analysis and visualization</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent-color">•</span>
                                            <span>Machine learning and AI applications</span>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>

                            <div className="space-y-4 p-4 md:p-6 bg-white/5 dark:bg-black/5 rounded-xl">
                                <h3 className="heading-3 text-xl flex items-center gap-2 justify-center md:justify-start">
                                    <Briefcase className="w-5 h-5" />
                                    Connect With Me
                                </h3>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <Link
                                        href="https://github.com/ShresthaAaryan"
                                        className="btn-outline group py-2 px-4 text-sm bg-black"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        GitHub
                                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/aaryanshrestha/"
                                        className="btn-outline group py-2 px-4 text-sm bg-black"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Linkedin className="w-4 h-4 mr-2" />
                                        LinkedIn
                                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href="mailto:shresthaaaryan123@gmail.com"
                                        className="btn-outline group py-2 px-4 text-sm bg-black"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email
                                        <ArrowRight className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;