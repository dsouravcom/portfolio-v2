"use client";

import type { Project } from "@/app/data/portfolio";
import { cn } from "@/app/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Tooltip } from "./ui/Tooltip";

function useSpotlight() {
    const ref = useRef<HTMLElement>(null);
    const onMove = (e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        // Update transform-only target on a leaf pseudo — cheap, no child recalc.
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    return { ref, onMove };
}

function MetaChips({ project }: { project: Project }) {
    return (
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-3">
            <span className="rounded-full bg-canvas/90 px-2.5 py-1 font-mono text-[11px] font-medium text-ink shadow-sm backdrop-blur">
                {project.category}
            </span>
            {project.metric && (
                <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold text-accent-ink">
                    {project.metric}
                </span>
            )}
        </div>
    );
}

function CardLinks({ project }: { project: Project }) {
    return (
        <div className="flex gap-2">
            {project.codeLink && (
                <Tooltip content="View code">
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-[transform,color,background-color] duration-150 ease-out hover:bg-canvas-subtle hover:text-ink active:scale-90"
                    >
                        <Github size={16} />
                    </a>
                </Tooltip>
            )}
            {project.demoLink && (
                <Tooltip content="Live demo">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-[transform,color,background-color] duration-150 ease-out hover:bg-canvas-subtle hover:text-ink active:scale-90"
                    >
                        <ArrowUpRight size={16} />
                    </a>
                </Tooltip>
            )}
        </div>
    );
}

export function ProjectCard({
    project,
    featured = false,
}: {
    project: Project;
    featured?: boolean;
}) {
    const { ref, onMove } = useSpotlight();

    if (featured) {
        return (
            <article
                ref={ref as React.RefObject<HTMLElement>}
                onMouseMove={onMove}
                className="group spotlight relative grid overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface to-surface-2 shadow-sm transition-colors duration-300 hover:border-line-strong lg:grid-cols-2"
            >
                <Link
                    href={`/projects/${project.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden bg-canvas-subtle lg:aspect-auto"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                    />
                    <MetaChips project={project} />
                </Link>

                <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-accent">
                        Flagship project
                    </span>
                    <Link href={`/projects/${project.slug}`}>
                        <h3 className="text-3xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent md:text-4xl">
                            {project.title}
                        </h3>
                    </Link>
                    <p className="max-w-lg leading-relaxed text-muted">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags?.slice(0, 5).map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-canvas-subtle px-2 py-1 font-mono text-[11px] text-muted"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-line pt-5">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                        >
                            Read the story
                            <ArrowUpRight
                                size={16}
                                className="text-accent transition-transform duration-200 ease-out group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                        </Link>
                        <CardLinks project={project} />
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article
            ref={ref as React.RefObject<HTMLElement>}
            onMouseMove={onMove}
            className="group spotlight relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-xl"
        >
            <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-canvas-subtle"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                />
                <MetaChips project={project} />
            </Link>

            <div className="flex flex-1 flex-col p-6">
                <Link href={`/projects/${project.slug}`} className="block">
                    <h3 className="flex items-start justify-between gap-3 text-xl font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-accent">
                        {project.title}
                        <ArrowUpRight
                            size={18}
                            className="mt-1 shrink-0 text-faint transition-[transform,color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                    </h3>
                </Link>
                <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
                    {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags?.slice(0, 2).map((tag) => (
                            <span
                                key={tag}
                                className={cn(
                                    "rounded-md bg-canvas-subtle px-2 py-1 font-mono text-[11px] text-muted",
                                )}
                            >
                                {tag}
                            </span>
                        ))}
                        {project.tags && project.tags.length > 2 && (
                            <span className="rounded-md px-1 py-1 font-mono text-[11px] text-faint">
                                +{project.tags.length - 2}
                            </span>
                        )}
                    </div>
                    <CardLinks project={project} />
                </div>
            </div>
        </article>
    );
}
