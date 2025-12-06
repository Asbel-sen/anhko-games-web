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
        <div className="interactive-blur">
          <AboutSection />
        </div>
        <div className="interactive-blur">
          <GameDescriptionSection />
        </div>
        <div className="interactive-blur">
          <FeaturesSection />
        </div>
        <div className="interactive-blur">
          <InnovationSection />
        </div>
        <div className="interactive-blur">
          <ToolsSection />
        </div>
        <div className="interactive-blur">
          <TeamSection />
        </div>
        <div className="interactive-blur">
          <MaterialsSection />
        </div>
        <div className="interactive-blur">
          <ValuesSection />
        </div>
        <div className="interactive-blur">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
