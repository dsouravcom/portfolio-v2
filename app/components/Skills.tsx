import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import Image from "next/image";
import { MotionDiv, MotionH3 } from "./ui/Motion";
import { Tooltip } from "./ui/Tooltip";

export function Skills() {
    return (
        <section className="py-20 border-y border-zinc-100 dark:border-zinc-800 overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="max-w-6xl mx-auto px-4">
                <MotionH3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-12"
                >
                    Technologies I Work With
                </MotionH3>

                <div className="flex gap-8 md:gap-12 items-center justify-center flex-wrap">
                    {PORTFOLIO_DATA.skills.map((skill, index) => (
                        <MotionDiv
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <Tooltip content={skill.name}>
                                <div className="relative w-12 h-12 md:w-16 md:h-16 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 cursor-pointer">
                                    <Image
                                        src={skill.icon}
                                        alt={skill.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Tooltip>
                        </MotionDiv>
                    ))}
                </div>
            </div>
        </section>
    );
}
