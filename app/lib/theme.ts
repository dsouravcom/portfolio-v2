export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Inline script string injected into <head> before paint so the correct
 * theme class is present on first render — no flash of the wrong theme.
 */
export const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=(s==='light'||s==='dark')?s:(m?'dark':'light');var r=document.documentElement;r.classList.add(t);r.style.colorScheme=t;}catch(e){}})();`;

export function getTheme(): Theme {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
}

export function applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.style.colorScheme = theme;
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        /* storage may be unavailable */
    }
    window.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
}

export function toggleTheme() {
    applyTheme(getTheme() === "dark" ? "light" : "dark");
}
