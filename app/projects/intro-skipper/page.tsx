import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Intro Skipper",
    description:
        "A browser extension to automatically skip intros on streaming platforms.",
};

const project = PORTFOLIO_DATA.projects.find(
    (p) => p.slug === "intro-skipper",
)!;

export default function Page() {
    return (
        <main className="min-h-screen bg-canvas">
            <ProjectHeader project={project} />

            <div className="mx-auto max-w-4xl px-6 pb-24">
                <section className="mb-16">
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">
                        Why I built this
                    </h2>
                    <div className="max-w-none leading-relaxed text-muted">
                        <p className="text-lg">
                            I got tired of clicking "Skip Intro" over and over
                            when I'm watching shows. It's a small thing, but
                            when you're binge-watching, you click it again and
                            again. It breaks your focus and kills the vibe, you
                            know?
                        </p>
                        <p className="mt-4">
                            So I built an extension that just does it for you
                            automatically. Install it, turn it on, and forget
                            about it. It finds the skip button and clicks it for
                            you. No more reaching for your mouse. Those little
                            clicks add up to real time saved when you're in the
                            middle of a season.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="mb-6 text-2xl font-semibold tracking-tight text-ink">
                        User analytics
                    </h2>
                    <div className="grid gap-8">
                        <div className="rounded-2xl border border-line bg-canvas-subtle p-4">
                            <Image
                                src="https://res.cloudinary.com/dzjujoqyi/image/upload/v1772545302/intro-skipper/user-analytics.png"
                                alt="User Analytics"
                                width={800}
                                height={450}
                                className="rounded-2xl"
                            />
                            <p className="mt-4 text-center text-sm italic text-faint">
                                310+ weekly active users saving time every day.
                                Growing steadily with 16% month-over-month
                                growth.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
