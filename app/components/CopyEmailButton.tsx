"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard?.writeText(email).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        });
    };

    return (
        <button
            type="button"
            onClick={copy}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-3.5 font-mono text-sm text-ink transition-[transform,border-color] duration-150 ease-out hover:border-line-strong active:scale-[0.97]"
        >
            <span className="relative grid h-4 w-4 place-items-center text-muted">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={copied ? "check" : "copy"}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute"
                    >
                        {copied ? (
                            <Check size={16} className="text-accent" />
                        ) : (
                            <Copy size={16} />
                        )}
                    </motion.span>
                </AnimatePresence>
            </span>
            {copied ? "Copied!" : email}
        </button>
    );
}
