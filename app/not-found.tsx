"use client";

import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-ink">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="relative space-y-6 text-center"
            >
                <p className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-accent">
                    Error 404
                </p>
                <h1 className="font-display text-8xl font-semibold tracking-tighter text-line-strong md:text-9xl">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold md:text-3xl">
                        This page wandered off
                    </h2>
                    <p className="mx-auto max-w-md text-muted">
                        The page you&apos;re looking for doesn&apos;t exist or
                        has been moved somewhere else.
                    </p>
                </div>

                <div className="pt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-lg shadow-accent/20 transition-transform duration-150 ease-out active:scale-[0.97]"
                    >
                        <MoveLeft size={17} />
                        Back to home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
