'use client';

import ProjectContent from '@/components/ProjectContent';
import { Project } from '@/lib/projects';

interface ProjectPageContentProps {
    project: Project;
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
    const getProjectImages = (slug: string) => {
        switch (slug) {
            case 'ecommerce':
                return [
                    { src: "/images/ecommerce1.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce2.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce3.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce4.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce5.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce6.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce7.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce8.png", alt: "E-commerce Platform" },
                    { src: "/images/ecommerce9.png", alt: "E-commerce Platform" }
                ];
            case 'fourleaf':
                return [
                    { src: "/images/fourleaf1.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf2.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf3.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf4.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf5.png", alt: "Fourleaf Clover Website" },
                    { src: "/images/fourleaf6.png", alt: "Fourleaf Clover Website" }
                ];
            case 'ghumti':
                return [
                    { src: "/images/ghumti1.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti2.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti3.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti4.png", alt: "Ghumti Restaurant Website" },
                    { src: "/images/ghumti5.png", alt: "Ghumti Restaurant Website" }
                ];
            case 'seims':
                return [
                    { src: "/images/seims1.png", alt: "SEIMS" },
                    { src: "/images/seims2.png", alt: "SEIMS" },
                    { src: "/images/seims3.png", alt: "SEIMS" },
                    { src: "/images/seims4.png", alt: "SEIMS" },
                    { src: "/images/seims5.png", alt: "SEIMS" },
                    { src: "/images/seims6.png", alt: "SEIMS" }
                ];
            default:
                return [{ src: project.image, alt: project.title }];
        }
    };

    return (
        <ProjectContent
            title={project.title}
            overview={project.longDescription || project.description}
            keyFeatures={project.keyFeatures || []}
            technologies={project.technologies}
            impact={project.challenges?.join('. ') || ''}
            images={getProjectImages(project.slug)}
            githubUrl={project.githubUrl}
            websiteUrl={project.websiteUrl}
        />
    );
} 