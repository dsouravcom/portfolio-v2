/**
 * Shared motion language. Stronger-than-default easing curve (Emil Kowalski):
 * built-in CSS/JS easings lack punch. Matches --ease-out in globals.css.
 *
 * Entrances and scroll reveals are CSS-driven (see globals.css) so they never
 * depend on the JS bundle; this is for interaction-only motion.
 */
export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
