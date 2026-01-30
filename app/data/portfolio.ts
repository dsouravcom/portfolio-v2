export const PORTFOLIO_DATA = {
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
            tags: ["Scraping", "Instagram", "Tool", "Next.js", "Cloudflare Turnstile captcha"],
            category: "Web App",
        },
        {
            title: "RojLekho (Daily Journal)",
            description:
                "A secure and private journaling application designed for personal reflection. Features include rich text editing, mood tracking, and encrypted storage.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1765304511/rojlekho/og-image.webp",
            demoLink: "https://rojlekho.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom",
            tags: ["MERN Stack", "Security", "Journaling", "Razorpay", "Lemonsqueezy", "Clerk Authentication"],
            category: "Web App",
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
        },
        {
            title: "URL Shortener",
            description:
                "A powerful URL shortening service with analytics. Track clicks, geographic data, and manage your links through an intuitive dashboard.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764939171/sorti-meta-image.webp",
            demoLink: "https://www.sorti.in?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/url-shortner",
            tags: ["MERN Stack", "Analytics"],
            category: "Web App",
        },
        {
            title: "URL Expander",
            description:
                "A security tool to reveal the original url of a shortened URL before clicking with 100+ users per month. Protects against phishing and malicious links.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764871126/urlexpander-meta-image.webp",
            demoLink: "https://url.dsourav.com?ref=sourav.dev",
            codeLink: "https://github.com/dsouravcom/url-expander",
            tags: ["Security", "API", "Utility"],
            category: "Web App",
        },
        {
            title: "PocketUtils",
            description:
                "PocketUtils is a simple web app that offers a collection of small, useful online tools for everyday tasks. It helps users quickly convert files, format text, analyze data, and handle common developer or productivity needs — all directly in the browser.",
            image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1769799738/Pocketutils/pocketutils-og-image.webp",
            demoLink: "https://pocketutils.com/?ref=sourav.dev",
            tags: ["Utility", "Tools", "Magic Link authentication", "Active session management"],
            category: "Web App",
        },
    ],
};
