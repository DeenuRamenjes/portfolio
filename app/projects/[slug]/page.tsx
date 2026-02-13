import { projects } from "@/lib/projects-data";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {};
    }

    const titleMap: Record<string, string> = {
        'qbuilder': 'QBuilder – Schema Driven SaaS Web Builder',
        'drsmusic': 'DRSMusic – Cross-platform Music Streaming App',
        'quantzi-website': 'Quantzi – Animated Branding & Performance UI',
        'quintorq-website': 'Quintorq – UI Redesign & Content Management'
    };

    return {
        title: titleMap[slug] || `${project.title} | Deenu Ramenjes`,
        description: project.description,
    };
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailContent project={project} />;
}
