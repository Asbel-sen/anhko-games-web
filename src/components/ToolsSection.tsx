import { Code, Palette, Music, GitBranch, MonitorPlay, Layers } from "lucide-react";

const tools = [
  { name: "HaxeFlixel", icon: Code, category: "Engine" },
  { name: "Codename Engine", icon: MonitorPlay, category: "Engine" },
  { name: "Visual Studio Code", icon: Code, category: "IDE" },
  { name: "Photoshop", icon: Palette, category: "Arte" },
  { name: "Krita", icon: Palette, category: "Arte" },
  { name: "Sublime Text", icon: Code, category: "IDE" },
  { name: "FL Studio", icon: Music, category: "Audio" },
  { name: "Audacity", icon: Music, category: "Audio" },
  { name: "Git / GitHub", icon: GitBranch, category: "Control" },
];

const ToolsSection = () => {
  return (
    <section className="py-24 relative bg-muted/20" id="tools">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">Herramientas </span>
            <span className="gradient-text">Utilizadas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías profesionales para un desarrollo de calidad
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="card-cyber rounded-xl p-4 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-medium text-sm text-foreground mb-1">
                {tool.name}
              </h3>
              <span className="text-xs text-muted-foreground">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

        {/* Additional tools note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            + Más herramientas personalizadas del equipo
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
