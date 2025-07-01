export interface Project {
    title: string;
    description: string;
    longDescription?: string;
    overview: string;
    keyFeatures: string[];
    image: string;
    images: string[];
    technologies: string[];
    impact: string;
    slug: string;
    category: string;
    featured: boolean;
    githubUrl?: string;
    websiteUrl?: string;
    keykeyFeatures?: string[];
    challenges?: string[];
}

export const projects: Project[] = [
    {
        title: "SEIMS",
        description: "A comprehensive system for managing sports equipment inventory and distribution",
        overview: "SEIMS is a comprehensive system designed to streamline the management of sports equipment inventory and distribution. It provides a user-friendly interface for both administrators and users to manage equipment efficiently.",
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
        technologies: ["React", "Node.js", "Express", "TypeScript", "Tailwind CSS", "Material-UI", "Shadcn UI", "Supabase"],
        impact: "SEIMS has significantly improved the efficiency of sports equipment inventory management, reduced manual errors, and provided better accessibility to sports equipment for both students and administrators.",
        image: "/seimslogo.png",
        images: [
            "/images/seims1.png",
            "/images/seims2.png",
            "/images/seims3.png",
            "/images/seims4.png",
            "/images/seims5.png",
            "/images/seims6.png"
        ],
        githubUrl: "https://github.com/ShresthaAaryan/Sports-Equipment-Inventory-Managemement-System",
        websiteUrl: "/project/seims",
        slug: "seims",
        category: "Sports",
        featured: true
    },
    {
        title: "Ecommerce Website",
        description: "A comprehensive platform for students to apply to Colleges and Universities in Nepal",
        overview: "A modern e-commerce platform built with Next.js and TypeScript, featuring a responsive design, secure payment processing, and comprehensive product management capabilities.",
        keyFeatures: [
            "Product catalog management",
            "Shopping cart functionality",
            "Secure payment processing",
            "User authentication",
            "Order management system",
            "Responsive design",
            "SEO friendly Website"
        ],
        technologies: ["Next.js", "TypeScript", "Express", "Tailwind", "MongoDB", "Stripe", "NextAuth.js", "Shadcn UI", "Material-UI"],
        impact: "The e-commerce platform has enabled businesses to establish a strong online presence, resulting in increased sales and improved customer satisfaction. The platform's scalability and performance have made it a reliable solution for businesses of all sizes.",
        image: "/ecommercelogo.jpg",
        images: [
            "/images/ecommerce1.png",
            "/images/ecommerce2.png",
            "/images/ecommerce3.png",
            "/images/ecommerce4.png",
            "/images/ecommerce5.png",
            "/images/ecommerce6.png",
            "/images/ecommerce7.png",
            "/images/ecommerce8.png",
            "/images/ecommerce9.png"
        ],
        githubUrl: "https://github.com/yourusername/ecommerce",
        websiteUrl: "/project/ecommerce",
        slug: "ecommerce",
        category: "E-commerce",
        featured: true
    },
    {
        title: "Restaurant Website",
        description: "A modern website for a Nepalese & Indian cuisine restaurant featuring online ordering and reservation.",
        overview: "A comprehensive restaurant website that showcases the restaurant's menu, allows online ordering, and provides a seamless reservation system for customers.",
        keyFeatures: [
            "Online menu display",
            "Online ordering system",
            "Table reservation",
            "User authentication",
            "Order tracking",
            "Responsive design",
            "SEO optimization"
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Material-UI"],
        impact: "The restaurant website has improved customer engagement and streamlined the ordering process, leading to increased online orders and better customer satisfaction.",
        image: "/ghumtilogo.jpg",
        images: [
            "/images/ghumti1.png",
            "/images/ghumti2.png",
            "/images/ghumti3.png",
            "/images/ghumti4.png",
            "/images/ghumti5.png"
        ],
        githubUrl: "https://github.com/yourusername/restaurant",
        websiteUrl: "/project/ghumti",
        slug: "ghumti",
        category: "Restaurant",
        featured: true
    },
    {
        title: "FourleafClover Website",
        description: "A modern, responsive, and visually engaging web application designed to showcase the brand's identity.",
        overview: "A professional website for FourleafClover that effectively communicates the brand's message and showcases its services through an engaging user interface.",
        keyFeatures: [
            "Brand showcase",
            "Service presentation",
            "Portfolio display",
            "Contact integration",
            "Blog section",
            "Responsive design",
            "SEO optimization"
        ],
        technologies: ["Next.js", "TypeScript", "Express", "Tailwind", "Material-UI"],
        impact: "The FourleafClover website has successfully established a strong online presence for the brand, improved user engagement, and increased lead generation through its professional design and functionality.",
        image: "/fourleaflogo.jpg",
        images: [
            "/images/fourleaf1.png",
            "/images/fourleaf2.png",
            "/images/fourleaf3.png",
            "/images/fourleaf4.png",
            "/images/fourleaf5.png",
            "/images/fourleaf6.png"
        ],
        githubUrl: "https://github.com/yourusername/fourleaf",
        websiteUrl: "/project/fourleaf",
        slug: "fourleaf",
        category: "Brand",
        featured: true
    }
]; 