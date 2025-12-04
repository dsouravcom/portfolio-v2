"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="flex items-center gap-4 md:gap-8 px-6 md:px-8 py-3 md:py-4 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-800/50 rounded-full shadow-lg shadow-zinc-200/20 dark:shadow-zinc-900/20">
                <div className="flex gap-4 md:gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-100 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>
                <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-700" />
                <div className="flex gap-3 md:gap-5">
                    <Link
                        href="https://github.com/dsouravcom"
                        target="_blank"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hover:scale-110"
                    >
                        <Github size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/souravdotdev/"
                        target="_blank"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hover:scale-110"
                    >
                        <Linkedin size={18} />
                    </Link>
                    <Link
                        href="https://x.com/souravdotdev"
                        target="_blank"
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hover:scale-110"
                    >
                        <Twitter size={18} />
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
