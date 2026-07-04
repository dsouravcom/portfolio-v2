"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface MagneticProps {
    children: ReactNode;
    className?: string;
    /** How far the element drifts toward the cursor (px). */
    strength?: number;
}

/**
 * Decorative magnetic hover. Uses springs (not raw mouse position) so the
 * motion has momentum and feels alive rather than mechanical (Emil).
 * Disabled on touch / coarse pointers.
 */
export function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 150, damping: 12, mass: 0.1 });
    const sy = useSpring(y, { stiffness: 150, damping: 12, mass: 0.1 });

    const onMove = (e: React.MouseEvent) => {
        if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
            return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.span
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={reset}
            style={{ x: sx, y: sy }}
            className={className}
        >
            {children}
        </motion.span>
    );
}
