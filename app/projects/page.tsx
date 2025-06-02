'use client';

import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/Hero';
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { useState } from 'react';
import { Search, Filter, Code2, Users, Star, Clock } from 'lucide-react';

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Get unique categories from projects
    const categories = ['all', ...Array.from(new Set(projects.map(project => project.category)))];

    // Filter projects based on search and category
    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Calculate statistics
    const totalProjects = projects.length;
    const totalTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies))).length;
    const featuredProjects = projects.filter(p => p.featured).length;

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <Hero
                title="My Projects"
                description="Explore my portfolio of web development projects and see my work in action."
                buttons={[
                    {
                        text: "Contact Me",
                        link: "/contact"
                    }
                ]}
            />

            {/* Project Statistics */}
            <section className="py-12 bg-background/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-black/20 p-6 rounded-xl text-center">
                            <Code2 className="w-8 h-8 mx-auto mb-2 text-accent-color" />
                            <h3 className="text-2xl font-semibold mb-1">{totalProjects}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Total Projects</p>
                        </div>
                        <div className="bg-white dark:bg-black/20 p-6 rounded-xl text-center">
                            <Star className="w-8 h-8 mx-auto mb-2 text-accent-color" />
                            <h3 className="text-2xl font-semibold mb-1">{featuredProjects}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Featured Projects</p>
                        </div>
                        <div className="bg-white dark:bg-black/20 p-6 rounded-xl text-center">
                            <Users className="w-8 h-8 mx-auto mb-2 text-accent-color" />
                            <h3 className="text-2xl font-semibold mb-1">100%</h3>
                            <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
                        </div>
                        <div className="bg-white dark:bg-black/20 p-6 rounded-xl text-center">
                            <Clock className="w-8 h-8 mx-auto mb-2 text-accent-color" />
                            <h3 className="text-2xl font-semibold mb-1">{totalTechnologies}</h3>
                            <p className="text-gray-600 dark:text-gray-400">Technologies Used</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-cormorant font-medium mb-6">Featured Projects</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                A collection of my most impactful work, showcasing expertise in full-stack development
                                and user experience design.
                            </p>
                        </div>

                        {/* Search and Filter */}
                        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-accent-color"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === category
                                            ? 'bg-accent-color text-white'
                                            : 'bg-white dark:bg-black/20 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-black/30'
                                            }`}
                                    >
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.slug}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    technologies={project.technologies}
                                    slug={project.slug}
                                />
                            ))}
                        </div>

                        {/* No Results Message */}
                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600 dark:text-gray-400">
                                    No projects found matching your search criteria.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
} 