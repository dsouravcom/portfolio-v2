import { ProjectHeader } from "@/app/components/ProjectHeader";
import { PORTFOLIO_DATA } from "@/app/data/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "RojLekho - Daily Journal | Sourav Dutta",
    description:
        "A secure and private journaling application designed for personal reflection.",
};

const project = PORTFOLIO_DATA.projects.find((p) => p.slug === "rojlekho")!;

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
