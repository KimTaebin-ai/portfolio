import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
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
        <Current />
        <Projects />
        <TechStack />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
