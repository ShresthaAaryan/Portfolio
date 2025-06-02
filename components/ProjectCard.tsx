'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    slug: string;
}

export default function ProjectCard({
    title,
    description,
    image,
    technologies,
    slug,
}: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-800/50 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                    <h3 className="text-xl font-medium text-[#1C1C1C] dark:text-white mb-3">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group-hover:text-[#1C1C1C] dark:group-hover:text-white transition-colors duration-300">
                        <span className="text-sm">View Project</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
} 