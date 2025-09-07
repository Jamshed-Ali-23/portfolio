import { HeroSection } from "../components/portfolio/HeroSection";
import { AboutSection } from "../components/portfolio/AboutSection";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { ResumeSection } from "../components/portfolio/ResumeSection";
import { CertificatesSection } from "../components/portfolio/CertificatesSection";
import { SkillsSection } from "../components/portfolio/SkillsSection";
import { ContactSection } from "../components/portfolio/ContactSection";
import { Navigation } from "../components/portfolio/Navigation";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <CertificatesSection />
        <SkillsSection />
        <ContactSection />
      </motion.main>
    </div>
  );
};

export default Index;