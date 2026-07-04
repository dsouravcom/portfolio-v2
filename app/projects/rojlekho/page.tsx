import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RojLekho — Daily Journal",
    description:
        "A secure and private journaling application designed for personal reflection.",
};

const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "rojlekho")!;

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
                            I wanted a place to write my thoughts and reflect
                            without any distractions. Most journaling apps feel
                            cluttered or try to do too much. I needed something
                            simple, private, and reliable.
                        </p>
                        <p className="mt-4">
                            So I built RojLekho—it means "Write Daily" in
                            Bengali. It's a journaling app where you can write
                            freely without worrying about privacy. Everything is
                            encrypted and secure. You can write offline, export
                            your journals anytime, and it just gets out of your
                            way so you can focus on your thoughts.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
