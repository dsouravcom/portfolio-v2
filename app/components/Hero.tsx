"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-22 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl space-y-8 flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl mb-4"
                >
                    <Image
                        src={PORTFOLIO_DATA.personal.profilePic}
                        alt={PORTFOLIO_DATA.personal.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-100">
                    {PORTFOLIO_DATA.personal.name}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-zinc-500 dark:text-zinc-400">
                    {PORTFOLIO_DATA.personal.title}
                </h2>

                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    {PORTFOLIO_DATA.personal.bio}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="pt-8 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#work"
                        className="group px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2"
                    >
                        View My Work
                        <MoveRight
                            size={18}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                    <a
                        href={PORTFOLIO_DATA.personal.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <ArrowDown className="text-zinc-400" size={24} />
            </motion.div>
        </section>
    );
}
