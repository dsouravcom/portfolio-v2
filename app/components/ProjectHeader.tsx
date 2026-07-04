import { Project } from "@/app/data/portfolio";
import { EASE_OUT } from "@/app/lib/motion";
import { ArrowUpRight, ChevronLeft, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./ui/Motion";

export function ProjectHeader({ project }: { project: Project }) {
    if (!project) return null;

    return (
        <section className="px-6 pb-12 pt-28">
            <div className="mx-auto max-w-4xl">
                <MotionDiv
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT }}
                >
                    <Link
                        href="/#work"
                        className="group mb-10 inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-ink"
                    >
                        <ChevronLeft
                            size={16}
                            className="transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
                        />
                        Back to work
                    </Link>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
                    className="mb-12"
                >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                            {project.category}
                        </span>
                        {project.metric && (
                            <span className="rounded-full border border-line bg-canvas-subtle px-2.5 py-1 font-mono text-[11px] text-muted">
                                {project.metric}
                            </span>
                        )}
                    </div>

                    <h1 className="mb-6 text-4xl font-semibold tracking-tight text-ink text-balance md:text-5xl lg:text-6xl">
                        {project.title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-xl leading-relaxed text-muted">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        {project.demoLink && (
                            <Link
                                href={project.demoLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-lg shadow-accent/20 transition-transform duration-150 ease-out active:scale-[0.97]"
                            >
                                Live demo
                                <ArrowUpRight size={17} />
                            </Link>
                        )}
                        {project.codeLink && (
                            <Link
                                href={project.codeLink}
                                target="_blank"
                                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-[transform,border-color] duration-150 ease-out hover:border-line-strong active:scale-[0.97]"
                            >
                                <Github size={17} />
                                Source code
                            </Link>
                        )}
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.12 }}
                    className="relative mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-canvas-subtle shadow-xl shadow-black/5"
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
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.2 }}
                    className="flex flex-wrap gap-2 border-t border-line pt-8"
                >
                    {project.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-line bg-canvas-subtle px-2.5 py-1 font-mono text-xs text-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </MotionDiv>
            </div>
        </section>
    );
}
