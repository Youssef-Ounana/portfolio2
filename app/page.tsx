import { Home as HomeIcon, User, FolderGit2, Sparkles, Route } from "lucide-react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { mailto } from "@/data/site";

const navItems = [
  { name: "Accueil", link: "#accueil", icon: <HomeIcon className="h-4 w-4" /> },
  { name: "À propos", link: "#a-propos", icon: <User className="h-4 w-4" /> },
  { name: "Projets", link: "#projets", icon: <FolderGit2 className="h-4 w-4" /> },
  { name: "Compétences", link: "#competences", icon: <Sparkles className="h-4 w-4" /> },
  { name: "Parcours", link: "#parcours", icon: <Route className="h-4 w-4" /> },
];

export default function Home() {
  return (
    <>
      <FloatingNav navItems={navItems} ctaHref={mailto} />
      <main className="relative overflow-x-clip bg-black">
        <section id="accueil">
          <BackgroundBeamsWithCollision>
            <Hero />
          </BackgroundBeamsWithCollision>
        </section>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
