export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    year: string;
    role: string;
    images: string[];
}

export const projects: Project[] = [
    {
        slug: "quantzi-website",
        title: "Quantzi",
        description: "Quantzi Website home page with animations.",
        longDescription: "Delivered a modern UI with clean layout, ensuring cross-device compatibility. Integrated animations and hover effects for improved engagement. Optimized page performance and loading speed for animation-heavy sections.",
        technologies: ["React", "Animations", "UI/UX", "Performance Optimization"],
        year: "2025",
        role: "Frontend Developer",
        images: ["/projects/project1-1.jpg", "/projects/project1-2.jpg"]
    },
    {
        slug: "quintorq-website",
        title: "Quintorq",
        description: "Redesigned UI for a cleaner, more professional look.",
        longDescription: "Took an existing template and redesigned the UI for a cleaner, more professional look. Updated all content sections to reflect Quintorq’s services and identity.",
        technologies: ["Web Design", "Content Management", "UI Redesign"],
        year: "2025",
        role: "Web Designer",
        images: ["/projects/project2-1.jpg", "/projects/project2-2.jpg"]
    },
    {
        slug: "infant-jesus-ads",
        title: "Infant Jesus",
        description: "Dedicated Ads & Blogs section for dynamic content.",
        longDescription: "Developed a dedicated Ads & Blogs section for dynamic content publishing. Implemented an easy-to-use CMS structure using QAdmin for quick blog updates.",
        technologies: ["CMS", "QAdmin", "Dynamic Content"],
        year: "2025",
        role: "Developer",
        images: ["/projects/project3-1.jpg", "/projects/project3-2.jpg"]
    },
    {
        slug: "drsmusic",
        title: "DRSMusic",
        description: "Music Streaming Web App with real-time features.",
        longDescription: "Built a responsive music streaming platform with user-friendly UI and customizable theme settings. Implemented admin module to upload and manage songs and albums. Added authentication (Clerk) and backend with Node.js, Express.js, and MongoDB. Developed features like real-time listening status and basic messaging between users.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Clerk", "Socket.io"],
        year: "2025",
        role: "Full Stack Developer",
        images: ["/projects/project4-1.jpg", "/projects/project4-2.jpg"]
    }
];
