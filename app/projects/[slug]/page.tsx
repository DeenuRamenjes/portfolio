import { projects } from "@/lib/projects-data";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";
import { notFound } from "next/navigation";

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
