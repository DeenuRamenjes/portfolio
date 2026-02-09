export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string[];
    technologies: string[];
    year: string;
    role: string;
    images: string[];
    status?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "qbuilder",
        title: "Qbuilder",
        description: "A high-performance, schema-driven website builder with drag-and-drop editing, AI-assisted design, and multi-tenant SaaS architecture.",
        longDescription: [
            "Built a visual website builder using Next.js 15 with schema-based rendering.",
            "Implemented drag-and-drop editing, dynamic property panels, and animated UI.",
            "SaaS & Multi-Tenancy Concepts.",
            "Designed multi-tenant SaaS routing and reusable template systems."
        ],
        technologies: ["Next.js", "Schema-Based Rendering", "Drag-and-Drop", "Multi-Tenant SaaS", "Template Systems"],
        year: "2026",
        role: "Full Stack Developer",
        images: ["/assets/qbuilder1.webp", "/assets/qbuilder2.webp", "/assets/qbuilder3.webp"],
        status: "In Development"
    },
    {
        slug: "quantzi-website",
        title: "Quantzi",
        description: "Quantzi Website home page with animations.",
        longDescription: [
            "Delivered a modern UI with clean layout, ensuring cross-device compatibility.",
            "Integrated animations and hover effects for improved engagement.",
            "Optimized page performance and loading speed for animation-heavy sections."
        ],
        technologies: ["Next.js", "Animations", "Performance Optimization"],
        year: "2025",
        role: "Frontend Developer",
        images: ["/assets/quantzi1.webp", "/assets/quantzi2.webp", "/assets/quantzi3.webp"],
        liveUrl: "https://quantzi.co"
    },
    {
        slug: "drsmusic",
        title: "DRSMusic",
        description: "Cross-platform streaming app with offline playback, background audio, and real-time features.",
        longDescription: [
            "Built a React Native (TypeScript) mobile application with persistent audio player, downloads, and social interaction features.",
            "Developed a Node.js + Express backend with MongoDB (Mongoose) for users, songs, albums, and analytics.",
            "Integrated secure authentication and role-based access control, including admin-only routes.",
            "Implemented audio and image uploads with file-size enforcement and cloud storage.",
            "Enabled real-time communication using Socket.io for live updates, chat, and activity synchronization.",
            "Added listening time and usage analytics, periodically synced from the mobile app to the backend.",
            "Architected the system to serve a web frontend in production, enabling unified deployment."
        ],
        technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Cloud Storage"],
        year: "2025",
        role: "Full Stack Developer",
        images: ["/assets/drsmusic1.webp", "/assets/drsmusic2.webp", "/assets/drsmusic3.webp"],
        liveUrl: "https://drs-music-player.onrender.com"
    },
    {
        slug: "quintorq-website",
        title: "Quintorq",
        description: "Redesigned UI for a cleaner, more professional look.",
        longDescription: [
            "Took an existing template and redesigned the UI for a cleaner, more professional look.",
            "Updated all content sections to reflect Quintorq’s services and identity."
        ],
        technologies: ["Web Design", "Content Management", "UI Redesign"],
        year: "2025",
        role: "Web Designer",
        images: ["/assets/quintorq1.webp", "/assets/quintorq2.webp", "/assets/quintorq3.webp"],
        liveUrl: "https://quintorq.com"
    }
];
