import { cn } from "@/app/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
    eyebrow: string;
    title: React.ReactNode;
    description?: React.ReactNode;
    align?: "left" | "center";
    className?: string;
}

export function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
    className,
}: SectionHeadingProps) {
    const centered = align === "center";
    return (
        <Reveal
            className={cn(
                centered && "mx-auto max-w-2xl text-center",
                className,
            )}
        >
            <p
                className={cn(
                    "flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent",
                    centered && "justify-center",
                )}
            >
                <span className="h-px w-6 bg-accent/50" />
                {eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-4xl md:text-5xl">
                {title}
            </h2>
            {description && (
                <p
                    className={cn(
                        "mt-4 text-lg leading-relaxed text-muted",
                        centered ? "mx-auto max-w-2xl" : "max-w-2xl",
                    )}
                >
                    {description}
                </p>
            )}
        </Reveal>
    );
}
