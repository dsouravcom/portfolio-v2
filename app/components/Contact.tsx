import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Mail, MapPin, Zap } from "lucide-react";
import { CopyEmailButton } from "./CopyEmailButton";
import { Magnetic } from "./ui/Magnetic";
import { Reveal } from "./ui/Reveal";
import { SocialLinks } from "./SocialLinks";

export function Contact() {
    const { email, location } = PORTFOLIO_DATA.personal;

    return (
        <section id="contact" className="px-6 py-24 sm:px-8 md:py-32">
            <Reveal className="mx-auto max-w-5xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center shadow-xl shadow-black/[0.04] sm:px-12 sm:py-20">
                    {/* Backdrop */}
                    <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

                    <div className="relative">
                        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas py-1.5 pl-2.5 pr-3.5 text-sm font-medium text-muted shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="ping-ring absolute inline-flex h-full w-full rounded-full bg-accent/70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                            </span>
                            Open to work & collaborations
                        </span>

                        <h2 className="mx-auto mt-7 max-w-2xl text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl md:text-6xl">
                            Let&apos;s build something people love.
                        </h2>
                        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
                            Have a project, an idea, or just want to say hi? My
                            inbox is always open — I read and reply to everything.
                        </p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Magnetic strength={0.4}>
                                <a
                                    href={`mailto:${email}`}
                                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-lg shadow-accent/20 transition-transform duration-150 ease-out active:scale-[0.97]"
                                >
                                    <Mail size={17} />
                                    Say hello
                                </a>
                            </Magnetic>
                            <CopyEmailButton email={email} />
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
                            <span className="inline-flex items-center gap-2">
                                <Zap size={15} className="text-accent" />
                                Replies within ~24h
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <MapPin size={15} className="text-accent" />
                                {location}
                            </span>
                        </div>

                        <div className="mt-8 flex justify-center">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
