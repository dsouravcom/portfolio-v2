import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PocketUtils",
    description:
        "A collection of small, useful online tools for everyday tasks.",
};

const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "pocketutils")!;

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
