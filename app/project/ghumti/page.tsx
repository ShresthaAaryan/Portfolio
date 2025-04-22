import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectContent from '@/components/ProjectContent';

export const metadata: Metadata = {
    title: 'Ghumti Kitchen',
    description: 'A modern website for a Nepalese Restaurant in Sydney',
};

export default function GhumtiPage() {
    return (
        <>
            <Navbar /><br /><br />
            <ProjectContent
                title="Ghumti Kitchen - Authentic Nepalese and Indian Cuisine in Allawah, Sydney"
                overview="Ghumti is a modern website for a Nepalese Restaurant in Sydney. The platform provides comprehensive booking services for catering."
                features={[
                    "Responsive design",
                    "SEO friendly Website",
                    "Information about the place",
                    "Booking system"
                ]}
                technologies={[
                    "Frontend: React js",
                    "Backend: Node.js with Express",
                    "Maps Integration: Google Maps API",
                    "UI Framework: Shadcn UI, Material-UI"
                ]}
                impact="Ghumti has revolutionized the way travelers plan their trips, providing a seamless experience from discovery to booking. The platform has helped numerous users find their perfect travel destinations and create memorable experiences."
                images={[
                    { src: "/images/ghumti1.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti2.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti3.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti4.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti5.png", alt: "Ghumti Restaurant Website" },
                ]}
                websiteUrl='https://ghumti.au/'
            />
            <Footer />
        </>
    );
}
