import type { Transition, Variants } from "framer-motion";

/**
 * Shared motion language. Stronger-than-default easing curves (Emil Kowalski):
 * built-in CSS/JS easings lack punch. These match the curves in globals.css.
 */
export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
export const EASE_IN_OUT: [number, number, number, number] = [
    0.77, 0, 0.175, 1,
];

export const revealTransition = (delay = 0): Transition => ({
    duration: 0.55,
    ease: EASE_OUT,
    delay,
});

/** Rise + fade for scroll reveals. */
export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
};

/** Container that staggers its children in on view. */
export const staggerContainer = (stagger = 0.06, delay = 0): Variants => ({
    hidden: {},
    show: {
        transition: { staggerChildren: stagger, delayChildren: delay },
    },
});
