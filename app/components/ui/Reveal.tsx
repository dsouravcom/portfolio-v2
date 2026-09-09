"use client";

import { cn } from "@/app/lib/utils";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
    /** Reveal as soon as the top edge is ~80px into view. */
    margin?: string;
}

/**
 * Scroll-triggered fade + rise with the house easing. The hidden state lives
 * in CSS behind `.js`, so the server HTML ships visible — see app/lib/boot.ts.
 */
export function Reveal({
    children,
    className,
    delay = 0,
    y = 18,
    once = true,
    margin = "-80px",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // No observer to drive the reveal — leave it to the boot failsafe.
        if (typeof IntersectionObserver === "undefined") return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Cleared on delivery, not on mount: hydrating proves the bundle
                // ran, but not that this observer will ever fire (it stays silent
                // in contexts that never composite).
                window.clearTimeout(window.__revealFailsafe);

                if (entry.isIntersecting) {
                    setRevealed(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setRevealed(false);
                }
            },
            { rootMargin: margin },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [once, margin]);

    return (
        <div
            ref={ref}
            data-reveal=""
            data-revealed={revealed || undefined}
            style={
                {
                    "--reveal-y": `${y}px`,
                    "--reveal-delay": `${delay}s`,
                } as CSSProperties
            }
            className={cn(className)}
        >
            {children}
        </div>
    );
}
