import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="container px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">¿Quiénes somos?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
            <span className="text-foreground">¿Qué es </span>
            <span className="gradient-text">ANHKO GAMES</span>
            <span className="text-foreground">?</span>
          </h2>

          <div className="card-cyber rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Somos una <span className="text-primary font-semibold">microempresa estudiantil</span> dedicada a crear 
              un videojuego rítmico con música sincronizada, diseño original y una estética única. 
              Nuestro objetivo es ofrecer una experiencia{" "}
              <span className="text-secondary font-semibold">dinámica</span>,{" "}
              <span className="text-accent font-semibold">visualmente intensa</span> y{" "}
              <span className="text-primary font-semibold">divertida</span>.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
