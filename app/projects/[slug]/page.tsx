import { Navbar } from '@/components/navbar';
import Footer from '@/components/footer';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectPageContent from '../../../components/ProjectPageContent';
import { ProjectNavbar } from '@/components/ProjectNavbar';

type Props = {
    params: Promise<{
        slug: string;
    }>;
    searchParams: { [key: string]: string | string[] | undefined };
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
                <ProjectPageContent project={project} />
            </div>
            <Footer />
        </main>
    );
} 