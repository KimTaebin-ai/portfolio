import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Callout } from "@/components/callout";
import { Making } from "@/components/making";
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
        <Callout />
        <section id="path" className="scroll-mt-20 border-b border-border py-16 md:py-20">
          <div className="mx-auto max-w-[1080px] px-6 md:px-16">
            <Making />
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
