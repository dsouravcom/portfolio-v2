"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { goToSection, openCommandPalette } from "@/app/lib/command";
import { EASE_OUT } from "@/app/lib/motion";
import {
    motion,
    useReducedMotion,
    useSpring,
    type Variants,
} from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { useRef } from "react";
import { Magnetic } from "./ui/Magnetic";
import { SocialLinks } from "./SocialLinks";

const stats = [
    { value: "6+", label: "Products shipped" },
    { value: "1K+", label: "Monthly active users" },
    { value: "∞", label: "Cups of chai" },
];

export function Hero() {
    const reduce = useReducedMotion();
    const spotRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Card tilt — springs give the motion momentum (decorative, so it's welcome).
    const rx = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });
    const ry = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });

    const fine = () =>
        typeof window !== "undefined" &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const onMove = (e: React.MouseEvent) => {
        if (reduce || !fine()) return;
        const layer = spotRef.current;
        if (!layer) return;
        const r = layer.getBoundingClientRect();
        layer.style.setProperty("--mx", `${e.clientX - r.left}px`);
        layer.style.setProperty("--my", `${e.clientY - r.top}px`);
    };

    const onCardMove = (e: React.MouseEvent) => {
        if (reduce || !fine()) return;
        const el = cardRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    };
    const onCardLeave = () => {
        rx.set(0);
        ry.set(0);
    };

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
    };
    const item: Variants = {
        hidden: { opacity: 0, y: reduce ? 0 : 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
    };

    return (
        <section
            id="top"
            onMouseMove={onMove}
            className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-8"
        >
            {/* Backdrop layers */}
            <div className="grid-bg pointer-events-none absolute inset-0 -z-20 opacity-70" />
            <div
                ref={spotRef}
                className="spotlight pointer-events-none absolute inset-0 -z-10"
            />

            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Left — copy */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-7"
                >
                    <motion.div variants={item}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-muted shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-accent/70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.p
                        variants={item}
                        className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-accent"
                    >
                        Full-Stack Developer — Kolkata, India
                    </motion.p>

                    <motion.h1
                        variants={item}
                        className="text-gradient mt-4 text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl"
                    >
                        {PORTFOLIO_DATA.personal.name}
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
                    >
                        I build fast, thoughtful web apps — from{" "}
                        <span className="text-ink">database to pixel</span> —
                        that people around the world{" "}
                        <span className="text-ink">actually use</span>.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="mt-9 flex flex-wrap items-center gap-3"
                    >
                        <Magnetic strength={0.4}>
                            <button
                                type="button"
                                onClick={() => goToSection("#work")}
                                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink shadow-lg shadow-accent/20 transition-transform duration-150 ease-out active:scale-[0.97]"
                            >
                                View my work
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                                />
                            </button>
                        </Magnetic>

                        <button
                            type="button"
                            onClick={() => goToSection("#contact")}
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-[transform,background-color,border-color] duration-150 ease-out hover:border-line-strong hover:bg-surface-2 active:scale-[0.97]"
                        >
                            Get in touch
                        </button>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
                    >
                        <SocialLinks className="-ml-2" />
                        <button
                            type="button"
                            onClick={openCommandPalette}
                            className="inline-flex items-center gap-2 text-sm text-faint transition-colors hover:text-muted"
                        >
                            <Command size={13} />
                            <span className="font-mono">K</span>
                            <span>to explore</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right — code card */}
                <motion.div
                    initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.25 }}
                    className="lg:col-span-5"
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        ref={cardRef}
                        onMouseMove={onCardMove}
                        onMouseLeave={onCardLeave}
                        style={{ rotateX: rx, rotateY: ry }}
                        className="relative rounded-2xl border border-line bg-surface shadow-xl shadow-black/[0.06]"
                    >
                        {/* soft glow */}
                        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-accent/10 blur-3xl" />

                        {/* title bar */}
                        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                            <div className="flex gap-1.5">
                                <span className="h-3 w-3 rounded-full bg-line-strong" />
                                <span className="h-3 w-3 rounded-full bg-line-strong" />
                                <span className="h-3 w-3 rounded-full bg-line-strong" />
                            </div>
                            <div className="ml-1 grid h-6 w-6 place-items-center rounded-md bg-accent text-[11px] font-bold text-accent-ink">
                                SD
                            </div>
                            <span className="font-mono text-xs text-faint">
                                ~/sourav.dev
                            </span>
                        </div>

                        {/* code body */}
                        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
                            <code className="block whitespace-pre text-muted">
                                <span className="text-faint">
                                    {"// full-stack, end to end"}
                                </span>
                                {"\n"}
                                <span className="text-accent">const</span>{" "}
                                <span className="text-ink">developer</span> = {"{"}
                                {"\n  "}role:{" "}
                                <span className="text-ink/80">
                                    &quot;Full-Stack Developer&quot;
                                </span>
                                ,{"\n  "}stack: [
                                <span className="text-ink/80">
                                    &quot;Next.js&quot;
                                </span>
                                ,{" "}
                                <span className="text-ink/80">
                                    &quot;Node&quot;
                                </span>
                                ,{" "}
                                <span className="text-ink/80">
                                    &quot;MongoDB&quot;
                                </span>
                                ],{"\n  "}location:{" "}
                                <span className="text-ink/80">
                                    &quot;Kolkata, IN&quot;
                                </span>
                                ,{"\n  "}status:{" "}
                                <span className="inline-flex items-center gap-1.5 align-middle text-ink/80">
                                    &quot;available&quot;
                                    <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                                </span>
                                ,{"\n"}
                                {"}"}
                                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent align-middle" />
                            </code>
                        </pre>
                    </motion.div>

                    {/* stats */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        {stats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-xl border border-line bg-surface p-3 text-center shadow-sm sm:p-4"
                            >
                                <div className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                                    {s.value}
                                </div>
                                <div className="mt-1 text-[11px] leading-tight text-faint sm:text-xs">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* scroll cue */}
            <motion.button
                type="button"
                onClick={() => goToSection("#work")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                aria-label="Scroll to work"
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-muted md:flex"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
                    Scroll
                </span>
                <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
                    <span className="h-1.5 w-1 animate-bounce rounded-full bg-faint" />
                </span>
            </motion.button>
        </section>
    );
}
