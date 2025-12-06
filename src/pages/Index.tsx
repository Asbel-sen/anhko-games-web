import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GameDescriptionSection from "@/components/GameDescriptionSection";
import FeaturesSection from "@/components/FeaturesSection";
import InnovationSection from "@/components/InnovationSection";
import ToolsSection from "@/components/ToolsSection";
import TeamSection from "@/components/TeamSection";
import MaterialsSection from "@/components/MaterialsSection";
import ValuesSection from "@/components/ValuesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-pattern opacity-20 pointer-events-none z-0" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <GameDescriptionSection />
        <FeaturesSection />
        <InnovationSection />
        <ToolsSection />
        <TeamSection />
        <MaterialsSection />
        <ValuesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
