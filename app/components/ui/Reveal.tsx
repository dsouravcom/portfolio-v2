"use client";

import { cn } from "@/app/lib/utils";
import { EASE_OUT } from "@/app/lib/motion";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
    /** Reveal as soon as the top edge is ~100px into view. */
    margin?: string;
}

/**
 * Scroll-triggered fade + rise with the house easing. Movement is dropped
 * under prefers-reduced-motion (opacity is kept — it aids comprehension).
 */
export function Reveal({
    children,
    className,
    delay = 0,
    y = 18,
    once = true,
    margin = "-80px",
}: RevealProps) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, y: reduce ? 0 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: margin as never }}
            transition={{ duration: 0.55, ease: EASE_OUT, delay }}
        >
            {children}
        </motion.div>
    );
}
