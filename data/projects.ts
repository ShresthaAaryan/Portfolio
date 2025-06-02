export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    slug: string;
    githubUrl?: string;
    websiteUrl?: string;
    longDescription?: string;
    challenges?: string[];
    solutions?: string[];
    keyFeatures?: string[];
}

export const projects: Project[] = [
    {
        title: "E-commerce Platform",
        description: "A modern and scalable e-commerce solution",
        image: "/images/ecommerce1.png",
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
        challenges: ["The e-commerce platform has enabled businesses to establish a strong online presence, resulting in increased sales and improved customer satisfaction. The platform's scalability and performance have made it a reliable solution for businesses of all sizes."]
    },
    {
        title: "Fourleaf Clover Pvt. Ltd.",
        description: "A modern webpage for a marketing company",
        image: "/images/fourleaf1.png",
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
        challenges: ["Fourleaf has empowered businesses to make informed marketing decisions through comprehensive analytics and campaign management tools. The platform has helped numerous companies improve their digital marketing ROI and online presence."]
    },
    {
        title: "Ghumti Kitchen",
        description: "A modern website for a Nepalese Restaurant in Sydney",
        image: "/images/ghumti1.png",
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
        challenges: ["Ghumti has revolutionized the way travelers plan their trips, providing a seamless experience from discovery to booking. The platform has helped numerous users find their perfect travel destinations and create memorable experiences."]
    },
    {
        title: "SEIMS - Sports Equipment Inventory Management System",
        description: "A comprehensive system for managing student examination information and results",
        image: "/images/seims1.png",
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
        challenges: ["SEIMS has significantly improved the efficiency of sports equipment inventory management, reduced manual errors, and provided better accessibility to sports equipment for both students and administrators."]
    }
]; 