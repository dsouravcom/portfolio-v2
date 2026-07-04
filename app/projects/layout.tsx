import { Footer } from "@/app/components/Footer";
import { Navbar } from "@/app/components/Navbar";

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-canvas">
            <Navbar />
            <main className="min-h-[calc(100vh-100px)]">{children}</main>
            <Footer />
        </div>
    );
}
