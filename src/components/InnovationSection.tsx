import { Star, Cpu, Feather, Layers } from "lucide-react";

const innovations = [
  {
    icon: Star,
    title: "100% Original",
    description: "Arte, música y diseño creados completamente por nuestro equipo",
    gradient: "from-primary to-cyan-glow",
  },
  {
    icon: Layers,
    title: "Estética única",
    description: "Glitch + misticismo + tecnología en perfecta armonía",
    gradient: "from-secondary to-magenta-glow",
  },
  {
    icon: Feather,
    title: "Ligero y accesible",
    description: "Optimizado para correr en equipos modestos",
    gradient: "from-accent to-purple-glow",
  },
  {
    icon: Cpu,
    title: "Fusión creativa",
    description: "Combinación fresca de música, reflejos y visuales",
    gradient: "from-primary to-secondary",
  },
];

const InnovationSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="innovation">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-8">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Destacado</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">¿Por qué es </span>
            <span className="text-glow-magenta text-secondary">Innovador</span>
            <span className="text-foreground">?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {innovations.map((item, index) => (
            <div
              key={item.title}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${item.gradient.includes('primary') ? 'primary' : 'secondary'}) / 0.2), transparent)`,
                }}
              />
              <div className="card-cyber rounded-xl p-6 h-full group-hover:border-primary/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
