'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Languages, ChevronRight } from 'lucide-react';
import SkillsCard from './SkillsCard';

type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other';

interface Skill {
    name: string;
    category: SkillCategory;
}

const skills = [
    {
        title: "Frontend",
        skills: [
            { name: "React", category: "Frontend" as SkillCategory },
            { name: "Next.js", category: "Frontend" as SkillCategory },
            { name: "TypeScript", category: "Frontend" as SkillCategory },
            { name: "Tailwind CSS", category: "Frontend" as SkillCategory }
        ]
    },
    {
        title: "Backend And Database",
        skills: [
            { name: "Express", category: "Backend" as SkillCategory },
            { name: "Django", category: "Backend" as SkillCategory },
            { name: "Firebase", category: "Backend" as SkillCategory },
            { name: "MongoDB", category: "Database" as SkillCategory },
            { name: "PostgreSQL", category: "Database" as SkillCategory }
        ]
    },
    {
        title: "Tools & Others",
        skills: [
            { name: "Git", category: "Tools" as SkillCategory },
            { name: "Docker", category: "Tools" as SkillCategory },
            { name: "Data Analysis", category: "Other" as SkillCategory },
            { name: "Machine Learning", category: "Other" as SkillCategory }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 md:py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/5 to-transparent dark:from-white/5" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-cormorant font-medium mb-6 bg-gradient-to-r from-[#1C1C1C] via-gray-700 to-[#1C1C1C] dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                            Technical Expertise
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A comprehensive overview of my technical skills and capabilities in modern web development
                            and software engineering.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <SkillsCard
                                    title={skillGroup.title}
                                    skills={skillGroup.skills}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-24"
                    >
                        <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-center mb-12 bg-gradient-to-r from-[#1C1C1C] via-gray-700 to-[#1C1C1C] dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
                            Additional Skills
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Full Stack Development",
                                "Data Analysis",
                                "Artificial Intelligence",
                                "Machine Learning",
                                "Responsive Design",
                                "Agile Methodologies",
                                "Performance Optimization",
                                "Cross-browser Compatibility",
                                "Version Control",
                                "API Integration"
                            ].map((skill) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-5 py-2.5 bg-white/90 dark:bg-[#1E1E1E]/90 backdrop-blur-sm rounded-full text-sm text-[#1C1C1C] dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/50 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}