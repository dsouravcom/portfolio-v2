import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Blog | Sourav Dutta",
    description:
        "A personal blog where I share my thoughts, experiences, and projects.",
};

const project = PORTFOLIO_DATA.projects.find(
    (p) => p.slug === "personal-blog",
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
                            I wanted a place to write about things I learn,
                            projects I work on, and ideas I have. Instead of
                            posting random stuff on social media, I wanted my
                            own space where I could share things properly
                            without worrying about algorithms or trends.
                        </p>
                        <p className="mt-4">
                            So I built this blog to share my thoughts and
                            tutorials with people who might find them useful.
                            It's just a simple place to write what's on my mind
                            and hopefully help someone along the way.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
