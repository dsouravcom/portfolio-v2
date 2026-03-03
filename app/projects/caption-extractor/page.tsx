import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caption Extractor | Sourav Dutta",
    description:
        "A utility to extract and download captions from Instagram posts. Built for content creators.",
};

const project = PORTFOLIO_DATA.projects.find(
    (p) => p.slug === "caption-extractor",
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
                            I got frustrated trying to copy captions from
                            Instagram reels and posts on my phone. I'd see a
                            caption I liked and want to save it, or use the idea
                            somewhere else. But Instagram doesn't let you select
                            text, so copying feels annoying every single time.
                        </p>
                        <p className="mt-4">
                            So I just built a tool to fix this. It's really
                            simple: paste a link and get the caption. That's it.
                            No confusing stuff. The tool handles all the messy
                            work behind the scenes so you don't have to worry
                            about anything.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
