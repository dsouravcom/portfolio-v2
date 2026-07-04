import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects() {
    const [featured, ...rest] = PORTFOLIO_DATA.projects;

    return (
        <section id="work" className="px-6 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Things I've built & shipped"
                    description="Real tools solving real problems — each one taken from idea to production, and most still running in the wild today."
                />

                <div className="mt-14 space-y-6">
                    <Reveal>
                        <ProjectCard project={featured} featured />
                    </Reveal>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {rest.map((project, i) => (
                            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
                                <ProjectCard project={project} />
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal className="mt-12 flex justify-center">
                    <a
                        href="https://github.com/dsouravcom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-muted shadow-sm transition-[transform,color,border-color] duration-150 ease-out hover:border-line-strong hover:text-ink active:scale-[0.98]"
                    >
                        More on GitHub
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </Reveal>
            </div>
        </section>
    );
}
