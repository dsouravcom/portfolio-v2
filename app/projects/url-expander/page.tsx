import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "URL Expander",
    description:
        "A security tool to reveal the original url of a shortened URL.",
};

const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "url-expander")!;

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
                            I get shortened links all the time from people, but
                            I never know where they actually go. They could be
                            trying to trick me or lead me somewhere sketchy.
                            That unknown feeling is annoying, you know?
                        </p>
                        <p className="mt-4">
                            So I built this tool to just show you where a
                            shortened link really goes before you click it. It
                            follows the link to the end and checks if it looks
                            safe. Now you can peek at the destination first
                            instead of just blindly clicking on something random
                            someone sent you.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
