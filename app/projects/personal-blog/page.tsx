import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Personal Blog",
    description:
        "A personal blog where I share my thoughts, experiences, and projects.",
};

const project = PORTFOLIO_DATA.projects.find(
    (p) => p.slug === "personal-blog",
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
