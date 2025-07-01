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

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

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
                    keyFeatures={project.keyFeatures || []}
                    technologies={project.technologies}
                    impact={project.description || ''}
                    images={project.images.map((img: string, i: number) => ({ src: img, alt: `${project.title} image ${i + 1}` }))}
                    githubUrl={project.githubUrl}
                    websiteUrl={project.websiteUrl}
                />
            </div>
            <Footer />
        </main>
    );
} 