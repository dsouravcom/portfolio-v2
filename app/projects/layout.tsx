import { Footer } from "@/app/components/Footer";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen">
            <main className="min-h-[calc(100vh-100px)]">{children}</main>
            <Footer />
        </div>
    );
}
