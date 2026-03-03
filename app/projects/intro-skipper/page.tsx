import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Intro Skipper | Sourav Dutta",
    description:
        "A browser extension to automatically skip intros on streaming platforms.",
};

const project = PORTFOLIO_DATA.projects.find(
    (p) => p.slug === "intro-skipper",
)!;

export default function Page() {
    return (
        <main className="bg-white dark:bg-zinc-950 min-h-screen">
            <ProjectHeader project={project} />

            <div className="max-w-4xl mx-auto px-6 pb-24">
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                        Why I built this
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed">
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
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                        Users Analytics
                    </h2>
                    <div className="grid gap-8">
                        <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                            <Image
                                src="https://res.cloudinary.com/dzjujoqyi/image/upload/v1772545302/intro-skipper/user-analytics.png"
                                alt="User Analytics"
                                width={800}
                                height={450}
                                className="rounded-2xl"
                            />
                            <p className="mt-4 text-sm text-zinc-500 text-center italic">
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
