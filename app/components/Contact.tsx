"use client";

import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section
            id="contact"
            className="py-24 px-4 max-w-4xl mx-auto text-center"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-12 md:p-20 text-white dark:text-zinc-900 relative overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white dark:bg-zinc-900 blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white dark:bg-zinc-900 blur-3xl"></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Ready to start a project?
                    </h2>
                    <p className="text-zinc-400 dark:text-zinc-600 text-lg mb-10 max-w-xl mx-auto">
                        I&apos;m always open to discussing new projects,
                        creative ideas or opportunities to be part of your
                        visions.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-bold hover:scale-105 transition-transform"
                        >
                            <Mail size={20} />
                            Say Hello
                        </a>
                        <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600">
                            <MapPin size={18} />
                            <span>{PORTFOLIO_DATA.personal.location}</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
