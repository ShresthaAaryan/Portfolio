'use client';

import ProjectContent from '@/components/ProjectContent';
import { Project } from '@/data/projects';

interface ProjectPageContentProps {
    project: Project;
}

export default function ProjectPageContent({ project }: ProjectPageContentProps) {
    return (
        <ProjectContent
            title={project.title}
            overview={project.longDescription || project.description}
            keyFeatures={project.keyFeatures || []}
            technologies={project.technologies}
            images={[{ src: project.image, alt: project.title }]}
            githubUrl={project.githubUrl}
            websiteUrl={project.websiteUrl}
            impact={project.impact || ''}
        />
    );
} 