import Hero from "@/components/Hero";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 bg-black">
      <BackgroundBeamsWithCollision className=" flex justify-center items-center flex-col mx-auto sm:px-10 bg-black ">
        <div className="max-w-7xl w-full ">
            <FloatingNav navItems={[{name : 'string', link:'#home'}]} />
            <Hero />
        </div>
      </BackgroundBeamsWithCollision>
      <Projects />
    </main>
  );
}
