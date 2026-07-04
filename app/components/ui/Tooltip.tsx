"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

interface TooltipProps {
    content: string;
    children: React.ReactNode;
}

// Once any tooltip has opened recently, adjacent ones should open instantly —
// this feels faster without defeating the accidental-hover delay (Emil).
let lastShown = 0;

export function Tooltip({ content, children }: TooltipProps) {
    const [open, setOpen] = useState(false);
    const [instant, setInstant] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const reduce = useReducedMotion();

    const show = () => {
        const recent = Date.now() - lastShown < 400;
        setInstant(recent);
        if (recent) {
            setOpen(true);
            lastShown = Date.now();
            return;
        }
        timer.current = setTimeout(() => {
            setOpen(true);
            lastShown = Date.now();
        }, 320);
    };

    const hide = () => {
        if (timer.current) clearTimeout(timer.current);
        setOpen(false);
        lastShown = Date.now();
    };

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            {children}
            <AnimatePresence>
                {open && (
                    <motion.div
                        role="tooltip"
                        initial={
                            reduce
                                ? { opacity: 0 }
                                : { opacity: 0, y: 4, scale: 0.96 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={
                            reduce
                                ? { opacity: 0 }
                                : { opacity: 0, y: 4, scale: 0.96 }
                        }
                        transition={{
                            duration: instant ? 0 : 0.15,
                            ease: [0.23, 1, 0.32, 1],
                        }}
                        style={{ transformOrigin: "bottom center" }}
                        className="pointer-events-none absolute -top-10 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-lg bg-ink px-2.5 py-1.5 text-xs font-medium text-canvas shadow-lg"
                    >
                        {content}
                        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-ink" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
