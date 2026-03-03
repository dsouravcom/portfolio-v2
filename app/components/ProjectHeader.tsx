import { Project } from "@/app/data/portfolio";
import { ArrowUpRight, ChevronLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./ui/Motion";

export function ProjectHeader({ project }: { project: Project }) {
    if (!project) return null;

    return (
        <section className="pt-24 pb-12">
            <div className="max-w-4xl mx-auto px-6">
                <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8 group"
                    >
                        <ChevronLeft
                            size={20}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Back to projects
                    </Link>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-12"
                >
                    <span className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mb-8">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 items-center">
                        {project.demoLink && (
                            <Link
                                href={project.demoLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95"
                            >
                                Live Demo
                                <ArrowUpRight size={18} />
                            </Link>
                        )}
                        {project.codeLink && (
                            <Link
                                href={project.codeLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all active:scale-95"
                            >
                                <Github size={18} />
                                Source Code
                            </Link>
                        )}
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl bg-zinc-100 dark:bg-zinc-900 mb-12"
                >
                    {project.image && (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 1200px) 100vw, 1200px"
                        />
                    )}
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-2 border-t border-zinc-200 dark:border-zinc-800 pt-8"
                >
                    {project.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full text-sm font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </MotionDiv>
            </div>
        </section>
    );
}
