export type Project = {
    title: string;
    description: string;
    image: string;
    demoLink?: string;
    codeLink?: string;
    tags: string[];
    category: string;
    slug: string;
};

export const PORTFOLIO_DATA: {
    personal: any;
    socials: any[];
    skills: any[];
    projects: Project[];
} = {
    personal: {
        name: "Sourav Dutta",
        title: "Full Stack Developer",
        email: "hello@sourav.dev",
        location: "Kolkata, West Bengal, India",
        bio: "I craft digital experiences that merge functionality with aesthetics. Specializing in the MERN stack, I build robust applications and useful tools that solve real problems. And users from worldwide love them too!",
        resumeUrl: process.env.NEXT_PUBLIC_RESUME_URL || "#",
        profilePic: process.env.NEXT_PUBLIC_PFP || "/placeholder-user.jpg",
    },
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/dsouravcom",
            icon: "Github",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/souravdotdev/",
            icon: "Linkedin",
        },
        { name: "Twitter", url: "https://x.com/souravdotdev", icon: "Twitter" },
        { name: "Dev.to", url: "https://dev.to/dsourav", icon: "Code" },
        {
            name: "Hashnode",
            url: "https://hashnode.com/@sourav-dutta",
            icon: "BookOpen",
        },
        {
            name: "Substack",
            url: "https://dsourav.substack.com/",
            icon: "Mail",
        },
    ],
    skills: [
        {
            name: "JavaScript",
            icon: "https://img.icons8.com/color/48/javascript--v1.png",
        },
        { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
        {
            name: "Express.js",
            icon: "https://img.icons8.com/color/48/express-js.png",
        },
        { name: "React", icon: "https://img.icons8.com/office/48/react.png" },
        {
            name: "Next.js",
            icon: "https://img.icons8.com/fluency/48/nextjs.png",
        },
        {
            name: "MongoDB",
            icon: "https://img.icons8.com/color/48/mongodb.png",
        },
        {
            name: "Java",
            icon: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
        },
        {
            name: "Python",
            icon: "https://img.icons8.com/color/48/python--v1.png",
        },
        {
            name: "SQL",
            icon: "https://img.icons8.com/external-soft-fill-juicy-fish/48/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
        },
        { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
        {
            name: "Linux",
            icon: "https://img.icons8.com/color/48/linux--v1.png",
        },
        {
            name: "Firebase",
            icon: "https://img.icons8.com/color/48/firebase.png",
        },
        {
            name: "AWS",
            icon: "https://img.icons8.com/nolan/48/amazon-web-services.png",
        },
    ],
    projects: [
        {
            title: "Caption Extractor",
            description:
                "A utility to extract and download captions from Instagram posts with monthly 1k+ users. Perfect for content creators and social media managers.",
            image: "https://caption.dsourav.com/og-image.webp",
            demoLink: "https://caption.dsourav.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/insta-caption-extractor",
            tags: [
                "Scraping",
                "Instagram",
                "Tool",
                "Next.js",
                "Cloudflare Turnstile captcha",
                "Cloudflare Workers",
            ],
            category: "Web App",
            slug: "caption-extractor",
        },
        {
            title: "RojLekho (Daily Journal)",
            description:
                "A secure and private journaling application designed for personal reflection. Features include rich text editing, encrypted storage, offline support, and journal export.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1765304511/rojlekho/og-image.webp",
            demoLink: "https://rojlekho.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom",
            tags: [
                "MERN Stack",
                "Security",
                "Journaling",
                "Razorpay",
                "Lemonsqueezy",
                "Clerk Authentication",
            ],
            category: "Web App",
            slug: "rojlekho",
        },
        {
            title: "Intro Skipper",
            description:
                "A browser extension that automatically detects and skips intro sequences on popular streaming platforms, with 300+ users across chrome and firefox saving you time during binge-watching sessions.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764920395/intro-skipper/meta.webp",
            demoLink: "https://introskipper.dsourav.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/intro-skipper-ext",
            tags: ["Browser Extension", "JavaScript", "DOM Manipulation"],
            category: "Extension",
            slug: "intro-skipper",
        },
        {
            title: "Personal Blog",
            description:
                "A personal blog where I share my thoughts, experiences, and tutorials.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1772548277/blog-og-image.png",
            demoLink: "https://blog.sourav.dev/?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/personal-blog",
            tags: ["Laravel"],
            category: "Web App",
            slug: "personal-blog",
        },
        {
            title: "URL Expander",
            description:
                "A security tool to reveal the original url of a shortened URL before clicking with 100+ users per month. Protects against phishing and malicious links.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764871126/urlexpander-meta-image.webp",
            demoLink: "https://url.dsourav.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/url-expander",
            tags: ["Next.js", "Security", "API", "Utility"],
            category: "Web App",
            slug: "url-expander",
        },
        {
            title: "PocketUtils",
            description:
                "PocketUtils is a collection of small, useful online tools for everyday tasks. Includes XBEL file decryption, XBEL to HTML conversion, meta scanner, and SSL certificate scanner. All tools run directly in the browser with no data leaving your device.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1769799738/Pocketutils/pocketutils-og-image.webp",
            demoLink: "https://pocketutils.com/?ref=sourav.dev",
            tags: [
                "Utility",
                "Tools",
                "Magic Link authentication",
                "Active session management",
            ],
            category: "Web App",
            slug: "pocketutils",
        },
    ],
};
