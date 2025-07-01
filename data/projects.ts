export interface Project {
    title: string;
    description: string;
    image: string;
    images: string[];
    technologies: string[];
    slug: string;
    githubUrl?: string;
    websiteUrl?: string;
    longDescription?: string;
    solutions?: string[];
    keyFeatures?: string[];
    impact?: string;
}

export const projects: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A modern and scalable e-commerce solution",
        image: "/images/ecommerce1.png",
        images: [
            "/images/ecommerce1.png",
            "/images/ecommerce2.png",
            "/images/ecommerce3.png",
            "/images/ecommerce4.png",
            "/images/ecommerce5.png",
            "/images/ecommerce6.png",
            "/images/ecommerce7.png",
            "/images/ecommerce8.png",
            "/images/ecommerce9.png",
        ],
        technologies: [
            "Frontend: Next.js with TypeScript",
            "Backend: Node.js with Express",
            "Database: MongoDB",
            "Payment: Stripe API",
            "Authentication: NextAuth.js",
            "UI Framework: Tailwind CSS, Shadcn UI, Material-UI"
        ],
        slug: "ecommerce",
        githubUrl: "https://github.com/ShresthaAaryan/Ecommerce-App",
        longDescription: "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design, secure payment processing, and comprehensive product management capabilities.",
        keyFeatures: [
            "Product catalog management",
            "Shopping cart functionality",
            "Secure payment processing",
            "User authentication",
            "Order management system",
            "Responsive design",
            "SEO friendly Website"
        ],
        impact: "Enabled businesses to establish a strong online presence, resulting in increased sales and improved customer satisfaction."
    },
    {
        title: "Fourleaf Clover Pvt. Ltd.",
        description: "A modern webpage for a marketing company",
        image: "/images/fourleaf1.png",
        images: [
            "/images/fourleaf1.png",
            "/images/fourleaf2.png",
            "/images/fourleaf3.png",
            "/images/fourleaf4.png",
            "/images/fourleaf5.png",
            "/images/fourleaf6.png"
        ],
        technologies: [
            "Frontend: Next.js",
            "Backend: Node.js with Express",
            "Maps Integration: Google Maps API",
            "UI Framework: Material-UI, Shadcn UI, Tailwind CSS"
        ],
        slug: "fourleaf",
        websiteUrl: "https://fourleaf-website.vercel.app/",
        longDescription: "Fourleaf is a modern webpage for a marketing company",
        keyFeatures: [
            "Responsive design",
            "SEO friendly Website",
            "Information about the Company",
            "Contact Form"
        ],
        impact: "Empowered businesses to make informed marketing decisions and improve their digital marketing ROI."
    },
    {
        title: "Ghumti Kitchen",
        description: "A modern website for a Nepalese Restaurant in Sydney",
        image: "/images/ghumti1.png",
        images: [
            "/images/ghumti1.png",
            "/images/ghumti2.png",
            "/images/ghumti3.png",
            "/images/ghumti4.png",
            "/images/ghumti5.png"
        ],
        technologies: [
            "Frontend: React js",
            "Backend: Node.js with Express",
            "Maps Integration: Google Maps API",
            "UI Framework: Shadcn UI, Material-UI"
        ],
        slug: "ghumti",
        websiteUrl: "https://ghumti.au/",
        longDescription: "Ghumti is a modern website for a Nepalese Restaurant in Sydney. The platform provides comprehensive table booking services.",
        keyFeatures: [
            "Responsive design",
            "SEO friendly Website",
            "Information about the place",
            "Booking system"
        ],
        impact: "Revolutionized the way travelers plan their trips, providing a seamless experience from discovery to booking."
    },
    {
        title: "SEIMS - Sports Equipment Inventory Management System",
        description: "A comprehensive system for managing student examination information and results",
        image: "/images/seims1.png",
        images: [
            "/images/seims1.png",
            "/images/seims2.png",
            "/images/seims3.png",
            "/images/seims4.png",
            "/images/seims5.png",
            "/images/seims6.png"
        ],
        technologies: [
            "Frontend: React.js with TypeScript",
            "Backend: Supabase",
            "UI Framework: Tailwind CSS, Material-UI, Shadcn UI"
        ],
        slug: "seims",
        githubUrl: "https://github.com/ShresthaAaryan/Sports-Equipment-Inventory-Managemement-System",
        longDescription: "SEIMS is a comprehensive system designed to streamline the management of sports equipment inventory and distribution",
        keyFeatures: [
            "Inventory management",
            "Distribution management",
            "User authentication",
            "Reporting and analytics",
            "Notification system",
            "Role-based access control",
            "Responsive design",
            "SEO friendly Website"
        ],
        impact: "Significantly improved the efficiency of sports equipment inventory management and accessibility for students and administrators."
    }
]; 