import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Sourav Dutta | Full Stack Developer",
        template: "%s | Sourav Dutta",
    },
    description:
        "Portfolio of Sourav Dutta, a Full Stack Developer specializing in MERN stack, building robust web applications and useful tools.",
    keywords: [
        "Full Stack Developer",
        "MERN Stack",
        "React",
        "Next.js",
        "Node.js",
        "Web Developer",
        "Portfolio",
        "Sourav Dutta",
    ],
    authors: [{ name: "Sourav Dutta", url: "https://sourav.dev" }],
    creator: "Sourav Dutta",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://sourav.dev",
        title: "Sourav Dutta",
        description:
            "Portfolio of Sourav Dutta, a Full Stack Developer specializing in MERN stack.",
        siteName: "Sourav Dutta Portfolio",
        images: [
            {
                url: "/og-image.webp", // You should add an og-image.webp to your public folder
                width: 1200,
                height: 630,
                alt: "Sourav Dutta Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sourav Dutta | Full Stack Developer",
        description:
            "Portfolio of Sourav Dutta, a Full Stack Developer specializing in MERN stack.",
        creator: "@souravdotdev",
        images: ["/og-image.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
