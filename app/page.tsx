'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import hero from '../public/hero.jpg';
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import About from '@/components/about';
import Skills from '@/components/skill';
import Footer from '@/components/footer';
import Education from '@/components/education';
import Hero from '@/components/Hero';

export default function Home() {
  const handleScroll = () => {
    // Get the current path and determine which section to scroll to
    let targetId = 'about';
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Crafting Digital Excellence"
        description="Full Stack Developer | Data Analyst. Transforming ideas into elegant digital solutions. Specializing in modern web technologies and creating seamless user experiences that make an impact."
        buttons={[
          {
            text: "View My Work ",
            link: "/projects",
            icon: <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
          },
          {
            text: "Get in Touch ",
            link: "/contact"
          }
        ]}
      />

      {/* About Section */}
      <About />

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-cormorant font-medium mb-6">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A collection of my most impactful work, showcasing expertise in full-stack development
                and user experience design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {projects.map((project) => (
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}