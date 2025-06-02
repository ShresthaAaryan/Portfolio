'use client';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/Hero';
import SkillsCard from '@/components/SkillsCard';
import { GraduationCap, Award, School, Download } from 'lucide-react';
import Education from '@/components/education';
import AboutComponent from '@/components/about';
import { Button } from '@/components/ui/button';

const skills = [
    {
        title: "Frontend",
        skills: [
            { name: "React", category: "Frontend" },
            { name: "Next.js", category: "Frontend" },
            { name: "TypeScript", category: "Frontend" },
            { name: "Tailwind CSS", category: "Frontend" }
        ]
    },
    {
        title: "Backend And Database",
        skills: [
            { name: "Express", category: "Backend" },
            { name: "Django", category: "Backend" },
            { name: "Firebase", category: "Backend" }

        ]
    },
    {
        title: "Databases & Tools",
        skills: [
            { name: "Git", category: "Tools" },
            { name: "Docker", category: "Tools" },
            { name: "MongoDB", category: "Database" },
            { name: "PostgreSQL", category: "Database" }
        ]
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <Hero
                title="About Me"
                description="Learn more about my journey, skills, and experience in web development."
                buttons={[
                    {
                        text: "View Projects",
                        link: "/projects"
                    },
                    {
                        text: "Contact Me",
                        link: "/contact"
                    },
                    {
                        text: "Download Resume",
                        link: "/resume.pdf",
                        icon: <Download className="mr-2 h-4 w-4" />
                    }
                ]}
            />

            <AboutComponent />

            <section id="education">
                <Education />
            </section>

            <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-cormorant font-medium mb-6">Skills & Expertise</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            A comprehensive overview of my technical skills and areas of expertise in web development.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skills.map((skillGroup, index) => (
                            <SkillsCard
                                key={index}
                                title={skillGroup.title}
                                skills={skillGroup.skills.map(skill => ({
                                    ...skill,
                                    category: skill.category as "Frontend" | "Backend" | "Database" | "Tools" | "Other"
                                }))}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
} 