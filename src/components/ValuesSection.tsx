import { Lightbulb, Users, Palette, Heart } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    name: "Innovación",
    description: "Siempre buscando nuevas ideas",
    color: "primary",
  },
  {
    icon: Users,
    name: "Trabajo en equipo",
    description: "Unidos somos más fuertes",
    color: "secondary",
  },
  {
    icon: Palette,
    name: "Creatividad",
    description: "Sin límites para imaginar",
    color: "accent",
  },
  {
    icon: Heart,
    name: "Compromiso",
    description: "Dedicación en cada detalle",
    color: "primary",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-24 relative" id="values">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Nuestros </span>
            <span className="gradient-text">Valores</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.name}
              className="text-center group"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-${value.color}/10 border border-${value.color}/30 flex items-center justify-center group-hover:border-${value.color} group-hover:scale-110 transition-all duration-300`}>
                <value.icon className={`w-10 h-10 text-${value.color}`} />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {value.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative grid */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />
    </section>
  );
};

export default ValuesSection;
