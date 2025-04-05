import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectContent from '@/components/ProjectContent';

export const metadata: Metadata = {
    title: 'E-commerce Platform',
    description: 'A modern and scalable e-commerce solution',
};

export default function EcommercePage() {
    return (
        <>
            <Navbar /><br /><br />
            <ProjectContent
                title="E-commerce Platform"
                overview="A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design, secure payment processing, and comprehensive product management capabilities."
                features={[
                    "Product catalog management",
                    "Shopping cart functionality",
                    "Secure payment processing",
                    "User authentication",
                    "Order management system",
                    "Responsive design",
                    "SEO friendly Website",
                ]}
                technologies={[
                    "Frontend: Next.js with TypeScript",
                    "Backend: Node.js with Express",
                    "Database: MongoDB",
                    "Payment: Stripe API",
                    "Authentication: NextAuth.js",
                    "UI Framework: Tailwind CSS, Shadcn UI, Material-UI"
                ]}
                impact="The e-commerce platform has enabled businesses to establish a strong online presence, resulting in increased sales and improved customer satisfaction. The platform's scalability and performance have made it a reliable solution for businesses of all sizes."
                images={[
                    { src: "/images/ecommerce1.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce2.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce3.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce4.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce5.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce6.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce7.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce8.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce9.png", alt: "E-commerce Platform" }
                    
                ]}
               githubUrl="https://github.com/ShresthaAaryan/Ecommerce-App"
            />
            <Footer />
        </>
    );
}
