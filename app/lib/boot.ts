declare global {
    interface Window {
        __revealFailsafe?: number;
    }
}

/**
 * How long to wait for hydration before force-revealing scroll content.
 * Only ever reached when the JS bundle never runs — a blocked script, an
 * archive replay (archive.org), or a hydration error.
 */
export const REVEAL_FAILSAFE_MS = 2500;

/**
 * Inline script injected into <head> before paint. Marks the document as
 * JS-capable so CSS can opt into entrance/reveal animations.
 *
 * Everything renders visible by default: without this class no rule ever
 * hides content, so crawlers and no-JS clients get the full page.
 */
export const jsInitScript = `(function(){try{var r=document.documentElement;r.classList.add('js');window.__revealFailsafe=setTimeout(function(){r.classList.add('reveal-all');},${REVEAL_FAILSAFE_MS});}catch(e){}})();`;
