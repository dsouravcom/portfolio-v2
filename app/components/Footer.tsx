"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";

export function Footer() {
    return (
        <footer className="py-12 pb-20 text-center text-zinc-500 dark:text-zinc-400 text-sm border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex justify-center gap-6 mb-4 flex-wrap px-4">
                {PORTFOLIO_DATA.socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                        {social.name}
                    </a>
                ))}
            </div>
            <p>
                &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}
                . All rights reserved.
            </p>
        </footer>
    );
}
