import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import ProjectContent from '@/components/ProjectContent';

export const metadata: Metadata = {
    title: 'SEIMS - Student Examination Information Management System',
    description: 'A comprehensive system for managing student examination information and results',
};

export default function SEIMSPage() {
    return (
        <>
            <Navbar /><br /><br />
            <ProjectContent
                title="SEIMS - Sports Equipment Inventory Management System"
                overview="SEIMS is a comprehensive system designed to streamline the management of sports equipment inventory and distribution"
                features={[
                    "Inventory management",
                    "Distribution management",
                    "User authentication",
                    "Reporting and analytics",
                    "Notification system",
                    "Role-based access control",
                    "Responsive design",
                    "SEO friendly Website",
                ]}
                technologies={[
                    "Frontend: React.js with TypeScript",
                    "Backend: Supabase",
                    "UI Framework: Tailwind CSS, Material-UI, Shadcn UI"
                ]}
                impact="SEIMS has significantly improved the efficiency of sports equipment inventory management, reduced manual errors, and provided better accessibility to sports equipment for both students and administrators."
                images={[
                    { src: "/images/seims1.png", alt: "SEIMS" },
                    { src: "/images/seims2.png", alt: "SEIMS" },
                    { src: "/images/seims3.png", alt: "SEIMS" },
                    { src: "/images/seims4.png", alt: "SEIMS" },
                    { src: "/images/seims5.png", alt: "SEIMS" },
                    { src: "/images/seims6.png", alt: "SEIMS" }
                ]}
                githubUrl='https://github.com/ShresthaAaryan/Sports-Equipment-Inventory-Managemement-System'
            />
            <Footer />
        </>
    );
}
