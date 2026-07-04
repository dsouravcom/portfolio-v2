"use client";

import { openCommandPalette } from "@/app/lib/command";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Work", href: "/#work", id: "work" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Contact", href: "/#contact", id: "contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the nav item for whichever section owns the viewport.
    useEffect(() => {
        const sections = navItems
            .map((i) => document.getElementById(i.id))
            .filter(Boolean) as HTMLElement[];
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
        >
            <div
                className={cn(
                    "flex items-center gap-1 rounded-full border transition-[background-color,border-color,box-shadow,padding] duration-300 ease-out",
                    scrolled
                        ? "border-line bg-surface/90 py-1.5 pl-2 pr-1.5 shadow-lg shadow-black/5 backdrop-blur-xl"
                        : "border-transparent bg-transparent py-1.5 pl-2 pr-1.5",
                )}
            >
                {/* Logo / home */}
                <Link
                    href="/"
                    aria-label="Home"
                    className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-ink transition-colors"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-accent/70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="font-mono tracking-tight">sourav</span>
                </Link>

                {/* Links (desktop) */}
                <div className="relative hidden items-center sm:flex">
                    {navItems.map((item) => {
                        const isActive = active === item.id;
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={cn(
                                    "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-ink"
                                        : "text-muted hover:text-ink",
                                )}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="nav-active"
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                            bounce: 0.2,
                                        }}
                                        className="absolute inset-0 -z-10 rounded-full bg-canvas-subtle"
                                    />
                                )}
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <span className="mx-1 hidden h-5 w-px bg-line sm:block" />

                <ThemeToggle />

                {/* Command palette trigger */}
                <button
                    type="button"
                    onClick={openCommandPalette}
                    aria-label="Open command menu"
                    className="flex items-center gap-1.5 rounded-full border border-line bg-canvas-subtle py-1.5 pl-2.5 pr-2 text-muted transition-[transform,color,background-color] duration-150 ease-out hover:text-ink active:scale-95"
                >
                    <Command size={13} />
                    <kbd className="font-mono text-[11px] leading-none">K</kbd>
                </button>
            </div>
        </motion.nav>
    );
}
