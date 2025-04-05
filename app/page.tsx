'use client';

import { Button } from '@/components/ui/button';
import { DownloadIcon, Laptop } from 'lucide-react';
import Image from 'next/image';
import Head from 'next/head';
import { Navbar } from '@/components/navbar';
import hero from '../public/hero1.jpg';
import Project from '@/components/project';
import Skills from '@/components/skill';
import About from '@/components/about';
import Contacts from '@/components/contact';
import Footer from '@/components/footer';
import Education from '@/components/education';
import { DownloadCloudIcon } from 'lucide-react';

export default function Home() {

  return (
    <>
    <Head>
      <link rel="icon" href="/ic.ico" />
      <title>Aaryan Shrestha - Full Stack Developer</title>
      <meta name="description" content="Portfolio of Aaryan Shrestha, a Full Stack Developer specializing in React, Node.js, and modern web technologies." />
      <meta name="keywords" content="Full Stack Developer, React, Node.js, JavaScript, Portfolio" />
      <meta name="author" content="Aaryan Shrestha" />
    </Head>
    <main className="min-h-screen">
      <Navbar/>
      <section className="relative h-screen shadow-xl">
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
          <h1 className="text-6xl font-bold mb-4 text-center">Aaryan Shrestha</h1>
          <p className="text-xl mb-8">Full Stack Developer</p>
          <a href='/resume.pdf' download='resume.pdf'>
            <Button variant="outline" className="text-white bg-transparent hover:bg-white/20 ">
              <DownloadIcon className='mr-5'/>Download Resume
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <About/>
      
      {/* Education Section */}
      <Education/>

      {/* Skills Section */}
      <Skills/>

      {/* Project Section */}
      <Project/>

      {/* Contact Section */}
      <Contacts/>

      {/* Footer */}
      <Footer/>
    </main>
    </>
  );
}