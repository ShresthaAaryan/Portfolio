'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Github, Linkedin, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import hero from '../public/hero1.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Form */}
          <div className="bg-white dark:bg-[#1E1E1E] rounded-2xl p-8 md:p-10 sophisticated-shadow">
            <h3 className="heading-3 text-2xl mb-8">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] dark:text-[#CCCCCC]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-accent-color transition-all duration-300 text-base"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] dark:text-[#CCCCCC]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-accent-color transition-all duration-300 text-base"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-[#4A4A4A] dark:text-[#CCCCCC]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-accent-color transition-all duration-300 text-base"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] dark:text-[#CCCCCC]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#F5F5F5] dark:bg-[#2A2A2A] border border-[#E5E5E5] dark:border-[#3A3A3A] focus:outline-none focus:ring-2 focus:ring-accent-color transition-all duration-300 resize-none text-base"
                  required
                />
              </div>
              <Button type="submit" className="w-full btn-primary group py-3 md:py-4 text-base md:text-lg">
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info & Socials */}
          <div className="space-y-8 md:space-y-12">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 md:p-8 sophisticated-shadow hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent-color w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1C1C1C] dark:text-white mb-1">Email</h4>
                    <a
                      href="mailto:shresthaaaryan123@gmail.com"
                      className="text-[#4A4A4A] dark:text-[#CCCCCC] text-sm hover:text-accent-color transition-colors duration-300"
                    >
                      shresthaaaryan123@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 md:p-8 sophisticated-shadow hover:translate-y-[-5px] transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-accent-color/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent-color w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1C1C1C] dark:text-white mb-1">Location</h4>
                    <p className="text-[#4A4A4A] dark:text-[#CCCCCC] text-sm">
                      Vellore, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 md:p-8 sophisticated-shadow">
              <h3 className="heading-3 text-2xl mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/ShresthaAaryan"
                  className="btn-outline group py-3 px-6 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/aaryanshrestha/"
                  className="btn-outline group py-3 px-6 text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2 group-hover:-translate-y-1 transition-transform" />
                  LinkedIn
                </Link>
              </div>
            </div>

            {/* Availability Status (Optional - can add back if needed) */}
            {/* <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 md:p-8 sophisticated-shadow">
                <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-[#4A4A4A] dark:text-[#CCCCCC]">
                        Available for new opportunities and collaborations
                    </p>
                </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;