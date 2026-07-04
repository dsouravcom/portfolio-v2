"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { goToSection, OPEN_COMMAND_EVENT } from "@/app/lib/command";
import { EASE_OUT } from "@/app/lib/motion";
import { toggleTheme } from "@/app/lib/theme";
import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Copy,
    FileText,
    FolderGit2,
    Home,
    Mail,
    Search,
    SunMoon,
    User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
    type ReactNode,
} from "react";

type CmdItem = {
    id: string;
    label: string;
    group: string;
    icon: ReactNode;
    keywords?: string;
    hint?: string;
    run: () => void;
    keepOpen?: boolean;
};

const GROUP_ORDER = ["Navigation", "Projects", "Social", "Actions"];

export function CommandPalette() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const [copied, setCopied] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const restoreFocus = useRef<HTMLElement | null>(null);

    const close = useCallback(() => setOpen(false), []);

    const navSection = useCallback(
        (hash: string) => {
            if (!goToSection(hash)) router.push(`/${hash}`);
        },
        [router],
    );

    const items = useMemo<CmdItem[]>(() => {
        const nav: CmdItem[] = [
            {
                id: "nav-home",
                label: "Home",
                group: "Navigation",
                icon: <Home size={16} />,
                keywords: "top start intro",
                run: () => {
                    if (!goToSection("#top"))
                        window.scrollTo({ top: 0, behavior: "smooth" });
                },
            },
            {
                id: "nav-work",
                label: "Work",
                group: "Navigation",
                icon: <FolderGit2 size={16} />,
                keywords: "projects portfolio",
                run: () => navSection("#work"),
            },
            {
                id: "nav-about",
                label: "About",
                group: "Navigation",
                icon: <User size={16} />,
                keywords: "bio story who",
                run: () => navSection("#about"),
            },
            {
                id: "nav-contact",
                label: "Contact",
                group: "Navigation",
                icon: <Mail size={16} />,
                keywords: "email hire reach",
                run: () => navSection("#contact"),
            },
        ];

        const projects: CmdItem[] = PORTFOLIO_DATA.projects.map((p) => ({
            id: `project-${p.slug}`,
            label: p.title,
            group: "Projects",
            icon: <ArrowUpRight size={16} />,
            keywords: `${p.category} ${p.tags?.join(" ") ?? ""}`,
            hint: p.category,
            run: () => router.push(`/projects/${p.slug}`),
        }));

        const social: CmdItem[] = PORTFOLIO_DATA.socials.map((s) => ({
            id: `social-${s.name}`,
            label: s.name,
            group: "Social",
            icon: <ArrowUpRight size={16} />,
            keywords: "link profile follow",
            run: () => window.open(s.url, "_blank", "noopener,noreferrer"),
        }));

        const actions: CmdItem[] = [
            {
                id: "copy-email",
                label: "Copy email address",
                group: "Actions",
                icon: <Copy size={16} />,
                keywords: "mail contact clipboard",
                keepOpen: true,
                run: () => {
                    navigator.clipboard
                        ?.writeText(PORTFOLIO_DATA.personal.email)
                        .then(() => {
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1400);
                        });
                },
            },
            {
                id: "resume",
                label: "View résumé",
                group: "Actions",
                icon: <FileText size={16} />,
                keywords: "cv download pdf",
                run: () =>
                    window.open(
                        PORTFOLIO_DATA.personal.resumeUrl,
                        "_blank",
                        "noopener,noreferrer",
                    ),
            },
            {
                id: "toggle-theme",
                label: "Toggle theme",
                group: "Actions",
                icon: <SunMoon size={16} />,
                keywords: "dark light mode appearance",
                keepOpen: true,
                run: toggleTheme,
            },
        ];

        return [...nav, ...projects, ...social, ...actions];
    }, [navSection, router]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((it) =>
            `${it.label} ${it.group} ${it.keywords ?? ""}`
                .toLowerCase()
                .includes(q),
        );
    }, [items, query]);

    // Keep the highlighted row valid & in view.
    useEffect(() => setActive(0), [query]);
    useEffect(() => {
        itemRefs.current[active]?.scrollIntoView({ block: "nearest" });
    }, [active]);

    // Global open/close shortcuts.
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((v) => !v);
            }
        };
        const onOpen = () => setOpen(true);
        window.addEventListener("keydown", onKey);
        window.addEventListener(OPEN_COMMAND_EVENT, onOpen);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener(OPEN_COMMAND_EVENT, onOpen);
        };
    }, []);

    // Body scroll lock + focus management while open.
    useEffect(() => {
        if (open) {
            restoreFocus.current = document.activeElement as HTMLElement;
            setQuery("");
            setActive(0);
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const t = setTimeout(() => inputRef.current?.focus(), 20);
            return () => {
                clearTimeout(t);
                document.body.style.overflow = prev;
                restoreFocus.current?.focus?.();
            };
        }
    }, [open]);

    const runItem = (it: CmdItem) => {
        it.run();
        if (!it.keepOpen) close();
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((i) => (filtered.length ? (i + 1) % filtered.length : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((i) =>
                filtered.length ? (i - 1 + filtered.length) % filtered.length : 0,
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            const it = filtered[active];
            if (it) runItem(it);
        } else if (e.key === "Escape") {
            e.preventDefault();
            close();
        }
    };

    // Reset the shared index counter used to align refs with rows.
    let flatIndex = -1;

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[16vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-ink/25 backdrop-blur-[3px]"
                        onClick={close}
                    />

                    {/* Panel — modal, so it scales from center */}
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command menu"
                        initial={{ opacity: 0, scale: 0.98, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 8 }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        onKeyDown={onKeyDown}
                        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/20"
                    >
                        {/* Search field */}
                        <div className="flex items-center gap-3 border-b border-line px-4">
                            <Search size={18} className="shrink-0 text-faint" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search or jump to…"
                                aria-label="Search commands"
                                className="w-full bg-transparent py-4 text-[15px] text-ink outline-none placeholder:text-faint"
                            />
                            <kbd className="hidden shrink-0 rounded-md border border-line bg-canvas-subtle px-1.5 py-0.5 font-mono text-[10px] text-faint sm:block">
                                ESC
                            </kbd>
                        </div>

                        {/* Results */}
                        <div
                            ref={listRef}
                            className="max-h-[52vh] overflow-y-auto overscroll-contain p-2"
                        >
                            {filtered.length === 0 && (
                                <p className="px-3 py-8 text-center text-sm text-muted">
                                    No results for{" "}
                                    <span className="text-ink">
                                        “{query}”
                                    </span>
                                </p>
                            )}

                            {GROUP_ORDER.map((group) => {
                                const rows = filtered.filter(
                                    (it) => it.group === group,
                                );
                                if (rows.length === 0) return null;
                                return (
                                    <div key={group} className="mb-1">
                                        <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wider text-faint">
                                            {group}
                                        </p>
                                        {rows.map((it) => {
                                            flatIndex += 1;
                                            const idx = flatIndex;
                                            const isActive = idx === active;
                                            const isCopied =
                                                it.id === "copy-email" &&
                                                copied;
                                            return (
                                                <button
                                                    key={it.id}
                                                    ref={(el) => {
                                                        itemRefs.current[idx] =
                                                            el;
                                                    }}
                                                    onClick={() => runItem(it)}
                                                    onMouseMove={() =>
                                                        setActive(idx)
                                                    }
                                                    className={cn(
                                                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                                                        isActive
                                                            ? "bg-canvas-subtle text-ink"
                                                            : "text-muted",
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            "grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line",
                                                            isActive
                                                                ? "text-accent"
                                                                : "text-faint",
                                                        )}
                                                    >
                                                        {isCopied ? (
                                                            <Check size={16} />
                                                        ) : (
                                                            it.icon
                                                        )}
                                                    </span>
                                                    <span className="flex-1 truncate text-ink/90">
                                                        {isCopied
                                                            ? "Copied to clipboard"
                                                            : it.label}
                                                    </span>
                                                    {it.hint && (
                                                        <span className="shrink-0 font-mono text-[11px] text-faint">
                                                            {it.hint}
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer hint */}
                        <div className="flex items-center justify-between gap-3 border-t border-line px-4 py-2.5 text-[11px] text-faint">
                            <span className="flex items-center gap-1.5">
                                <Kbd>↑</Kbd>
                                <Kbd>↓</Kbd>
                                to navigate
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Kbd>↵</Kbd>
                                to select
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function Kbd({ children }: { children: ReactNode }) {
    return (
        <kbd className="inline-grid h-5 min-w-5 place-items-center rounded border border-line bg-canvas-subtle px-1 font-mono text-[10px] text-muted">
            {children}
        </kbd>
    );
}
