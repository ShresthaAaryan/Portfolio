import React from 'react'
import { Button } from '@/components/ui/button';
import { Laptop, Mail, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
const About = () => {
  return (
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
  )
}

export default About