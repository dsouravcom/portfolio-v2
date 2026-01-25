import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    alternates: {
        canonical: "https://sourav.dev",
    },
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
        site: "@souravdotdev",
        images: [
            {
                url: "/og-image.webp", // You should add an og-image.webp to your public folder
                width: 1200,
                height: 630,
                alt: "Sourav Dutta Portfolio",
            },
        ],
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
            <head>
                <link
                    href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <Script
                    id="site-behaviour-analytics"
                    strategy="afterInteractive"
                >
                    {`
                    (function() {
                        try {
                        if(window.location && window.location.search && window.location.search.indexOf('capture-sitebehaviour-heatmap') !== -1) {
                            sessionStorage.setItem('capture-sitebehaviour-heatmap', '_');
                        }
                    
                        var sbSiteSecret = 'e9f2e8b3-b8fe-4b98-94bf-ca40b7bfc32f';
                        window.sitebehaviourTrackingSecret = sbSiteSecret;
                        var scriptElement = document.createElement('script');
                        scriptElement.defer = true;
                        scriptElement.id = 'site-behaviour-script-v2';
                        scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                        document.head.appendChild(scriptElement); 
                        }
                        catch (e) {console.error(e)}
                    })()
                    `}
                </Script>
                {children}
            </body>
        </html>
    );
}
