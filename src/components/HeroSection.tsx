import { Music, Gamepad2, Zap } from "lucide-react";
import logo from "@/assets/logo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-primary rounded-full opacity-50 float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
      backgroundSize: '50px 50px'
    }} />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-scale-in">
            <img src={logo} alt="ANHKO GAMES" style={{
            mixBlendMode: 'lighten'
          }} className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto object-contain opacity-95" />
          </div>

          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl font-body text-muted-foreground mb-12 animate-slide-up animation-delay-200">
            "Donde el sonido desciende…{" "}
            <span className="gradient-text font-semibold">y tu espíritu asciende.</span>"
          </p>

          {/* CTA Icons */}
          <div className="flex justify-center gap-8 md:gap-12 animate-slide-up animation-delay-300">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-primary transition-all duration-300 group-hover:box-glow-red">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Ritmo</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-secondary transition-all duration-300 group-hover:box-glow-purple">
                <Gamepad2 className="w-8 h-8 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Acción</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-accent transition-all duration-300 group-hover:box-glow-purple">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Reflejos</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;