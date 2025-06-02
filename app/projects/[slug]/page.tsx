import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectContent from '@/components/ProjectContent';
import { ProjectNavbar } from '@/components/ProjectNavbar';

export const dynamic = 'force-static';

type Props = {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <ProjectNavbar />
            <div className="pt-16">
                <ProjectContent
                    title={project.title}
                    overview={project.longDescription || project.description}
                    features={project.keyFeatures || []}
                    technologies={project.technologies}
                    impact={project.challenges?.join('. ') || ''}
                    images={[{ src: project.image, alt: project.title }]}
                    githubUrl={project.githubUrl}
                    websiteUrl={project.websiteUrl}
                />
            </div>
            <Footer />
        </main>
    );
} 