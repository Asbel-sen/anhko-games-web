import { Music2, Keyboard, Sparkles, Zap, Play } from "lucide-react";

const features = [
  {
    icon: Music2,
    title: "Juego rítmico",
    description: "Basado en reflejos y música sincronizada",
    color: "primary",
  },
  {
    icon: Keyboard,
    title: "Controles precisos",
    description: "Presiona teclas siguiendo los patrones",
    color: "secondary",
  },
  {
    icon: Sparkles,
    title: "Efectos visuales",
    description: "Cada acierto activa efectos únicos",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Acción rápida",
    description: "Jugabilidad intuitiva y emocionante",
    color: "primary",
  },
];

const GameDescriptionSection = () => {
  return (
    <section className="py-24 relative" id="game">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">El </span>
            <span className="gradient-text">Videojuego</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una experiencia rítmica donde cada nota cuenta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-cyber rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${feature.color}/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Video Demo Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="card-cyber rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
              <p className="text-muted-foreground">Video Demo</p>
              <p className="text-sm text-muted-foreground/60 mt-1">Próximamente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescriptionSection;
