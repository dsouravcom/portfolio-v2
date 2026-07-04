"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SocialLinks } from "./SocialLinks";

const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

function LocalTime() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const update = () =>
            setTime(
                new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    timeZone: "Asia/Kolkata",
                }).format(new Date()),
            );
        update();
        const id = setInterval(update, 30_000);
        return () => clearInterval(id);
    }, []);

    return (
        <span className="inline-flex items-center gap-2 font-mono text-xs text-faint">
            <span className="relative flex h-1.5 w-1.5">
                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-accent/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {/* min-w avoids layout shift before the client time resolves */}
            <span className="min-w-[9ch]">
                {time ? `Kolkata · ${time}` : "Kolkata"}
            </span>
        </span>
    );
}

export function Footer() {
    return (
        <footer className="border-t border-line bg-canvas-subtle/40">
            <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 text-lg font-semibold text-ink">
                            <span className="h-2 w-2 rounded-full bg-accent" />
                            <span className="font-mono">sourav</span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                            Full-stack developer building fast, thoughtful tools
                            people actually use.
                        </p>
                        <div className="mt-4">
                            <LocalTime />
                        </div>
                    </div>

                    {/* Links + social */}
                    <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
                        <nav className="flex flex-col gap-3">
                            <p className="font-mono text-xs uppercase tracking-wider text-faint">
                                Navigate
                            </p>
                            {navLinks.map((l) => (
                                <Link
                                    key={l.name}
                                    href={l.href}
                                    className="text-sm text-muted transition-colors hover:text-ink"
                                >
                                    {l.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex flex-col gap-3">
                            <p className="font-mono text-xs uppercase tracking-wider text-faint">
                                Elsewhere
                            </p>
                            <SocialLinks className="-ml-2 flex-wrap" iconSize={17} />
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
                    <p className="text-xs text-faint">
                        © {new Date().getFullYear()}{" "}
                        {PORTFOLIO_DATA.personal.name} · Built with Next.js &
                        Tailwind
                    </p>
                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="group inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-ink"
                    >
                        Back to top
                        <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-[transform,border-color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:border-line-strong">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
