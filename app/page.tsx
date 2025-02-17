'use client';

import { Button } from '@/components/ui/button';
import { Laptop, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Navbar } from '@/components/navbar';
import logo from '../public/logo1.jpg'
import hero from '../public/hero1.jpg';
import ghumti from '../public/ghumti.png'
import college from '../public/college.jpg'

export default function Home() {
  const projects = [
    {
      title: "Restaurant Website",
      description: "A modern website for a Nepalese & Indian cuisine restaurant featuring online ordering and reservation.",
      tech: ["React", "Node.js","Express"],
      image: ghumti,
      website: "https://ghumti.au",
    },
    {
      title: "FourleafClover Website",
      description: "A modern, responsive, and visually engaging web application designed to showcase the brand's identity. ",
      tech: ["Next.js", "TypeScript", "Express", "Tailwind"],
      image: logo,
      website: "https://fourleaf-website.vercel.app/",
    },
    {
      title: "Nepali Common App",
      description: "A comprehensive platform for students to apply to Colleges and Universities in Nepal",
      tech: ["React", "Firebase"],
      image: college,
      website: "https://github.com/apurbaaaa/Nepali-Common-App",
    },
  ];
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git'] }
  ];
  return (
    <>
    <Head>
      <title>Aaryan Shrestha - Full Stack Developer</title>
      <meta name="description" content="Portfolio of Aaryan Shrestha, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
      <meta name="keywords" content="Full Stack Developer, React, Node.js, JavaScript, Portfolio" />
      <meta name="author" content="Aaryan Shrestha" />
    </Head>
    <main className="min-h-screen">
      <Navbar/>
      <section className="relative h-screen">
        <Image
          src={hero}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <Laptop className="w-16 h-16 mb-6" />
          <h1 className="text-6xl font-bold mb-4">Aaryan Shrestha</h1>
          <p className="text-xl mb-8">Full Stack Developer</p>
          <Button variant="outline" className="text-white bg-transparent hover:bg-white/20">
            View Portfolio
          </Button>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-sm px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Link overlay */}
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`View ${project.title} project`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* About Section */}
      <section className="bg-muted py-20" id='aboutme'>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-8">
            Aspiring computer science and engineering enthusiast with a strong academic foundation in STEM subjects and currently
            pursuing a bachelor’s degree in computer science and engineering from Vellore Institute of Technology. Adept at programming
            languages like JavaScript, Python, C++, TypeScript, with a passion for developing innovative solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Link href="https://github.com/ShresthaAaryan">
                <Github className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="https://www.linkedin.com/in/aaryanshrestha/">
                <Linkedin className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon">
              <Link href="mailto:shresthaaaryan123@gmail.com">
                <Mail className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary" id='skills'>
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto py-20 px-4" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mb-8">
            Ready to create something beautiful together? Let's talk about your vision 
            and how we can bring it to life.
          </p>
          <Link href="mailto:shresthaaaryan123@gmail.com">
            <Button className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aaryan Shrestha. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}