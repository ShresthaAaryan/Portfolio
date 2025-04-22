import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectContent from '@/components/ProjectContent';

export const metadata: Metadata = {
    title: 'Fourleaf Clover Pvt. Ltd.',
    description: 'A modern webpage for a marketing company',
};

export default function FourleafPage() {
    return (
        <>
            <Navbar /><br /><br />
            <ProjectContent
                title="Fourleaf - Digital Marketing Platform"
                overview="Fourleaf is a powerful digital marketing platform that helps businesses optimize their online presence, track marketing performance, and make data-driven decisions."
                features={[
                    "Responsive design",
                    "SEO friendly Website",
                    "Information about the Company",
                    "Contact Form"
                ]}
                technologies={[
                    "Frontend: Next.js",
                    "Backend: Node.js with Express",
                    "Maps Integration: Google Maps API",
                    "UI Framework: Material-UI, Shadcn UI, Tailwind CSS"
                ]}
                impact="Fourleaf has empowered businesses to make informed marketing decisions through comprehensive analytics and campaign management tools. The platform has helped numerous companies improve their digital marketing ROI and online presence."
                images={[
                    { src: "/images/fourleaf1.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf2.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf3.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf4.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf5.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf6.png", alt: "Fourleaf Clover Website" },
                ]}
                websiteUrl='https://fourleaf-website.vercel.app/'
            />
            <Footer />
        </>
    );
}
