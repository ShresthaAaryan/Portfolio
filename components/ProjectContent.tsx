'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Github, Globe, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProjectImage {
    src: string;
    alt: string;
}

interface ProjectContentProps {
    title: string;
    overview: string;
    keyFeatures: string[];
    technologies: string[];
    images?: ProjectImage[];
    githubUrl?: string;
    websiteUrl?: string;
    impact?: string;
}

export default function ProjectContent({
    title,
    overview,
    keyFeatures = [],
    technologies,
    images = [],
    githubUrl,
    websiteUrl,
    impact = ''
}: ProjectContentProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleWheel = useCallback((e: WheelEvent) => {
        if (isLightboxOpen) {
            if (e.deltaY > 0) {
                nextImage();
            } else {
                prevImage();
            }
        }
    }, [isLightboxOpen]);

    useEffect(() => {
        if (isLightboxOpen) {
            window.addEventListener('wheel', handleWheel);
            return () => window.removeEventListener('wheel', handleWheel);
        }
    }, [isLightboxOpen, handleWheel]);

    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-6"
                    >
                        <div className="space-y-6 pt-4">
                            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                                {title}
                            </h1>
                            <Link
                                href="/projects"
                                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                            >
                                <ArrowLeft size={20} />
                                <span className="font-medium">Back to Projects</span>
                            </Link>
                        </div>

                        {(githubUrl || websiteUrl) && (
                            <div className="flex items-center gap-4">
                                {githubUrl && (
                                    <motion.a
                                        href={githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Github size={20} />
                                        <span className="font-medium">GitHub</span>
                                    </motion.a>
                                )}

                                {websiteUrl && (
                                    <motion.a
                                        href={websiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Globe size={20} />
                                        <span className="font-medium">Live Demo</span>
                                    </motion.a>
                                )}
                            </div>
                        )}
                    </motion.div>

                    {/* Images Carousel */}
                    {images.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-16 relative"
                        >
                            <div
                                className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                                onClick={() => setIsLightboxOpen(true)}
                            >
                                <Image
                                    src={images[currentImageIndex].src}
                                    alt={images[currentImageIndex].alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-lg font-medium">{images[currentImageIndex].alt}</p>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={(e) => prevImage(e)}
                                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-900 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                            >
                                ←
                            </button>
                            <button
                                onClick={(e) => nextImage(e)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black hover:bg-gray-900 text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
                            >
                                →
                            </button>

                            {/* Dots */}
                            <div className="flex justify-center gap-3 mt-6">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                            ? 'bg-blue-600 w-6'
                                            : 'bg-gray-300 hover:bg-gray-400'}`} />
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Lightbox */}
                    <AnimatePresence>
                        {isLightboxOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
                                onClick={() => setIsLightboxOpen(false)}
                            >
                                <div
                                    className="relative w-full h-full max-w-7xl max-h-[90vh] m-4"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={images[currentImageIndex].src}
                                            alt={images[currentImageIndex].alt}
                                            fill
                                            className="object-contain"
                                            quality={100} />
                                    </motion.div>
                                    <div className="absolute bottom-6 left-6 text-white text-lg bg-black/50 px-6 py-3 rounded-lg backdrop-blur-sm">
                                        <p>{`${currentImageIndex + 1} / ${images.length}`}</p>
                                    </div>
                                    <button
                                        onClick={() => setIsLightboxOpen(false)}
                                        className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 z-10 transition-colors duration-300"
                                    >
                                        ×
                                    </button>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 transition-colors duration-300"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 z-10 transition-colors duration-300"
                                    >
                                        →
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-14">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/70 border border-gray-200/40 dark:border-gray-800/60 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-blue-100/40 via-transparent to-blue-400/10 dark:from-blue-900/30 dark:to-blue-700/10 z-0" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 tracking-tight">
                                    Project Overview
                                </h2>
                                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-10 text-lg font-medium">
                                    {overview}
                                </p>
                                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 tracking-tight">
                                    Technologies Used
                                </h2>
                                <ul className="space-y-5 text-gray-800 dark:text-gray-200 text-base">
                                    {technologies.map((tech, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <span className="text-blue-500 dark:text-blue-400 mt-1 text-xl">•</span>
                                            <span className="leading-relaxed font-medium">{tech}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="backdrop-blur-xl bg-white/60 dark:bg-gray-900/70 border border-gray-200/40 dark:border-gray-800/60 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-blue-100/40 via-transparent to-blue-400/10 dark:from-blue-900/30 dark:to-blue-700/10 z-0" />
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 tracking-tight">
                                    Key Features
                                </h2>
                                <ul className="space-y-5 text-gray-800 dark:text-gray-200 text-base">
                                    {keyFeatures.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <span className="text-blue-500 dark:text-blue-400 mt-1 text-xl">•</span>
                                            <span className="leading-relaxed font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div></>
    );
}