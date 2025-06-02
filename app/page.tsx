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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <Image
            src="/hero1.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white space-y-6 md:space-y-8 ">
                <div className="space-y-4 text-center md:text-start">
                  <h1 className="text-5xl md:text-6xl font-cormorant font-medium">
                    Crafting Digital
                    <span className="text-gradient block mt-2">Excellence</span>
                  </h1>
                  <p className="text-white/90 text-lg md:text-xl text-center md:text-start">
                    Full Stack Developer | Data Analyst
                  </p>
                </div>

                <p className="text-white/80 max-w-lg text-base md:text-lg text-center md:text-start">
                  Transforming ideas into elegant digital solutions. Specializing in modern web technologies
                  and creating seamless user experiences that make an impact.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a href="/projects" className="inline-flex items-center px-6 py-3 bg-white text-[#1C1C1C] rounded-md hover:bg-gray-100 transition-colors">
                    View My Work
                    <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="/contact" className="inline-flex items-center px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-[#1C1C1C] transition-colors">
                    Get in Touch
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 justify-center md:justify-start">
                  <a
                    href="https://github.com/ShresthaAaryan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/aaryanshrestha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:shresthaaaryan123@gmail.com"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={hero}
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