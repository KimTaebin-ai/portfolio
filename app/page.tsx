import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CareerPath } from "@/components/career-path";
import { Current } from "@/components/current";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section id="path" className="scroll-mt-20 border-b border-border py-16 md:py-20">
          <div className="mx-auto max-w-[1080px] px-6 md:px-16">
            <h2 className="sr-only">Career path</h2>
            <CareerPath />
          </div>
        </section>
        <Current />
        <Projects />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
