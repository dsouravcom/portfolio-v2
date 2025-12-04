"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
    return (
        <section id="work" className="py-32 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-20 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Selected Work
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    A showcase of my projects, tools, and experiments. Each
                    piece represents a unique challenge and solution.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PORTFOLIO_DATA.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 transition-all duration-500 flex flex-col"
                    >
                        <div className="relative aspect-4/3 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-400">
                                    No Image
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                        </div>

                        <div className="p-8 flex flex-col grow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex gap-3">
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                            title="View Code"
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                            title="Live Demo"
                                        >
                                            <ArrowUpRight size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800">
                                {project.tags?.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
