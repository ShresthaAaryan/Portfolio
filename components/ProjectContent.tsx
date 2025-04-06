'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

interface ProjectImage {
    src: string;
    alt: string;
}

interface ProjectContentProps {
    title: string;
    overview: string;
    features: string[];
    technologies: string[];
    impact: string;
    images?: ProjectImage[];
    githubUrl?: string;
    websiteUrl?: string;
}

export default function ProjectContent({
    title,
    overview,
    features,
    technologies,
    impact,
    images = [],
    githubUrl,
    websiteUrl
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
        <div className="container mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4"
            >
                <h1 className="text-4xl font-bold">{title}</h1>
                
                <div className="flex items-center space-x-4">
                {githubUrl && (
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
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
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Globe size={20} />
                            <span className="font-medium">Visit Website</span>
                        </motion.a>
                    )}
                    <Link href="/#projects" className="text-bnlack-600 hover:text-blue-800 transition-colors duration-300">
                        ← Back to Home
                    </Link>

                </div>
            </motion.div>

            {/* Images Carousel */}
            {images.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-12 relative"
                >
                    <div
                        className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl cursor-pointer"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <Image
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm opacity-80">{images[currentImageIndex].alt}</p>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => prevImage(e)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                        ←
                    </button>
                    <button
                        onClick={(e) => nextImage(e)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                        →
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                    }`}
                            />
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
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
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
                                    quality={100}
                                />
                            </motion.div>
                            <div className="absolute bottom-4 left-4 text-white text-lg bg-black/50 px-4 py-2 rounded-lg">
                                <p>{`${currentImageIndex + 1} / ${images.length}`}</p>
                            </div>
                            <button
                                onClick={() => setIsLightboxOpen(false)}
                                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 z-10"
                            >
                                ×
                            </button>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-4xl hover:text-gray-700 z-10"
                            >
                                ←
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-4xl hover:text-gray-700 z-10"
                            >
                                →
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Overview</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {overview}
                        </p>
                    </section>

                    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-600">
                            {features.map((feature, index) => (
                                <li key={index} className="leading-relaxed">{feature}</li>
                            ))}
                        </ul>
                    </section>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-8"
                >
                    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Technologies Used</h2>
                        <ul className="list-disc pl-6 space-y-3 text-gray-600">
                            {technologies.map((tech, index) => (
                                <li key={index} className="leading-relaxed">{tech}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Project Impact</h2>
                        <p className="text-gray-600 leading-relaxed">
                            {impact}
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}