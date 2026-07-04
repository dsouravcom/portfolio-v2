"use client";

import { getTheme, toggleTheme, type Theme } from "@/app/lib/theme";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setThemeState(getTheme());
        setMounted(true);
        const onChange = (e: Event) =>
            setThemeState((e as CustomEvent<Theme>).detail);
        window.addEventListener("themechange", onChange);
        return () => window.removeEventListener("themechange", onChange);
    }, []);

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="relative grid h-9 w-9 place-items-center rounded-full text-muted transition-[transform,color] duration-150 ease-out hover:text-ink active:scale-90"
        >
            {/* Stable icon before mount to avoid hydration mismatch */}
            {!mounted ? (
                <Sun size={17} />
            ) : (
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isDark ? "moon" : "sun"}
                        initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
                        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                        className="grid place-items-center"
                    >
                        {isDark ? <Moon size={17} /> : <Sun size={17} />}
                    </motion.span>
                </AnimatePresence>
            )}
        </button>
    );
}
