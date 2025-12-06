import { Music, Gamepad2, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-50 float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8 animate-scale-in">
            <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted/50 border border-border pulse-glow">
              <Gamepad2 className="w-16 h-16 md:w-20 md:h-20 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 animate-slide-up">
            <span className="text-glow-cyan text-primary">ANHKO</span>
            <span className="text-foreground"> </span>
            <span className="text-glow-magenta text-secondary">GAMES</span>
          </h1>

          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl font-body text-muted-foreground mb-12 animate-slide-up animation-delay-200">
            "Donde el sonido desciende…{" "}
            <span className="gradient-text font-semibold">y tu espíritu asciende.</span>"
          </p>

          {/* CTA Icons */}
          <div className="flex justify-center gap-8 md:gap-12 animate-slide-up animation-delay-300">
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-primary transition-all duration-300 group-hover:box-glow-cyan">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Ritmo</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-secondary transition-all duration-300 group-hover:box-glow-magenta">
                <Gamepad2 className="w-8 h-8 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Acción</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="p-4 rounded-xl bg-muted/50 border border-border group-hover:border-accent transition-all duration-300">
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
    </section>
  );
};

export default HeroSection;
