import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { LayoutTemplate, Server, TerminalSquare } from "lucide-react";

const capabilities = [
    {
        icon: LayoutTemplate,
        title: "Frontend",
        blurb: "Interfaces that feel fast, obvious, and a little delightful.",
        tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
        icon: Server,
        title: "Backend",
        blurb: "APIs, auth, and data models that stay clean as they scale.",
        tags: ["Node", "Express", "MongoDB", "SQL"],
    },
    {
        icon: TerminalSquare,
        title: "Tooling & Infra",
        blurb: "Shipping, monitoring, and iterating without the drama.",
        tags: ["Git", "Linux", "AWS", "Firebase"],
    },
];

export function About() {
    return (
        <section id="about" className="px-6 py-24 sm:px-8 md:py-32">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="About"
                    title="I turn fuzzy ideas into products that ship."
                />

                <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Narrative */}
                    <div className="lg:col-span-6">
                        <div className="space-y-5 text-lg leading-relaxed text-muted">
                            <Reveal>
                                <p>
                                    I&apos;m a full-stack developer who cares as
                                    much about the{" "}
                                    <span className="text-ink">
                                        last 10% of polish
                                    </span>{" "}
                                    as the architecture underneath it. Most of
                                    what I build starts as a small annoyance in
                                    my own day — then becomes a tool other people
                                    end up relying on.
                                </p>
                            </Reveal>
                            <Reveal delay={0.05}>
                                <p>
                                    I work primarily across the MERN stack, but
                                    I&apos;m happy anywhere the problem takes me —
                                    a browser extension, a Laravel blog, a
                                    zero-backend utility that runs entirely on the
                                    client. What stays constant is a bias toward{" "}
                                    <span className="text-ink">
                                        simple, fast, and private
                                    </span>
                                    .
                                </p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p>
                                    Today my projects quietly serve{" "}
                                    <span className="text-ink">
                                        thousands of people a month
                                    </span>
                                    , from content creators to fellow developers
                                    — and I&apos;m always looking for the next
                                    real problem worth solving.
                                </p>
                            </Reveal>
                        </div>
                    </div>

                    {/* Capabilities */}
                    <div className="lg:col-span-6">
                        <div className="grid gap-4">
                            {capabilities.map((cap, i) => (
                                <Reveal key={cap.title} delay={i * 0.08}>
                                    <div className="group flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-sm transition-colors duration-200 hover:border-line-strong">
                                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-canvas-subtle text-accent transition-colors duration-200">
                                            <cap.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-ink">
                                                {cap.title}
                                            </h3>
                                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                                {cap.blurb}
                                            </p>
                                            <div className="mt-3 flex flex-wrap gap-1.5">
                                                {cap.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-md bg-canvas-subtle px-2 py-0.5 font-mono text-[11px] text-muted"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
