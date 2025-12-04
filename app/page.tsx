import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
    return (
        <main className="bg-white dark:bg-zinc-950 min-h-screen selection:bg-blue-100 dark:selection:bg-blue-900/30">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
