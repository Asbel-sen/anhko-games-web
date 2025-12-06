import { Palette, Target, Layout, Sparkles, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Diseño original",
    description: "Arte y estética completamente únicos creados desde cero",
  },
  {
    icon: Target,
    title: "Sincronización precisa",
    description: "Música y gameplay perfectamente alineados",
  },
  {
    icon: Layout,
    title: "Interfaz accesible",
    description: "Controles claros e intuitivos para todos",
  },
  {
    icon: Sparkles,
    title: "Ritmo + Animación",
    description: "Efectos visuales que responden a cada nota",
  },
  {
    icon: TrendingUp,
    title: "Mecánicas únicas",
    description: "Hacen que tu experiencia de juego sea completamente diferente a otros juegos",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative bg-muted/20" id="features">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Características</span>
            <span className="text-foreground"> Principales</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-cyber rounded-xl p-8 group hover:border-primary/50 transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FeaturesSection;
