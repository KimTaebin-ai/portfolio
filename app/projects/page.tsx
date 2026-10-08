import type { Metadata } from "next";
import { Header } from "@/components/header";
import { MoreProjects } from "@/components/more-projects";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "More Projects · Taebin Kim",
  description: "inPHRPILL, École 42, and personal projects — Taebin Kim.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <MoreProjects />
      </main>
      <Footer />
    </div>
  );
}
