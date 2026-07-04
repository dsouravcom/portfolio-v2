import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import Image from "next/image";
import { Reveal } from "./ui/Reveal";

const fadeMask =
    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)";

export function Skills() {
    // Duplicated once so translateX(-50%) loops seamlessly.
    const row = [...PORTFOLIO_DATA.skills, ...PORTFOLIO_DATA.skills];

    return (
        <section className="border-y border-line bg-canvas-subtle/50 py-16 md:py-20">
            <Reveal className="mb-10 text-center">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-faint">
                    The stack I reach for
                </p>
            </Reveal>

            <div
                className="marquee relative overflow-hidden"
                style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
            >
                <div
                    className="marquee-track flex w-max gap-3"
                    style={{ ["--marquee-duration" as string]: "48s" }}
                >
                    {row.map((skill, i) => (
                        <div
                            key={`${skill.name}-${i}`}
                            className="group flex shrink-0 items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 transition-colors duration-200 hover:border-line-strong"
                        >
                            <span className="relative h-5 w-5 shrink-0">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    sizes="20px"
                                    className="object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                                />
                            </span>
                            <span className="whitespace-nowrap font-mono text-sm text-muted transition-colors duration-200 group-hover:text-ink">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
