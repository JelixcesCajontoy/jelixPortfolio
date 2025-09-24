import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { CertificatesSection } from "@/components/portfolio/certificate-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <SkillsSection />
        <Separator />
        <CertificatesSection />
      </main>
      <Footer />
    </div>
  );
}

