import React from 'react'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mail, Contact } from 'lucide-react';

const Contacts = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4 shadow-sm" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800 dark:text-blue-500">Get in Touch</h2>
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
  )
}

export default Contacts