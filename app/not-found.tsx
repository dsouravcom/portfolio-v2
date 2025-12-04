"use client";

import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
            >
                <h1 className="text-9xl font-bold tracking-tighter text-zinc-200 dark:text-zinc-800">
                    404
                </h1>
                <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        Page not found
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
                        The page you are looking for doesn't exist or has been
                        moved.
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                        <MoveLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
