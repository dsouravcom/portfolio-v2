import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PocketUtils | Sourav Dutta",
    description:
        "A collection of small, useful online tools for everyday tasks.",
};

const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "pocketutils")!;

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
                            I'm always looking for small tools online—things
                            like converting files, checking SSL certificates, or
                            scanning metadata. But every time I search, I end up
                            on these slow websites covered in ads that want to
                            track everything you do.
                        </p>
                        <p className="mt-4">
                            So I built PocketUtils as a place where I can grab
                            the tools I need without worrying. Everything runs
                            in your browser, so nothing ever leaves your
                            computer. Just simple, fast, and clean. No ads, no
                            tracking, just tools that actually work.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
