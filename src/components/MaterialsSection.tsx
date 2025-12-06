import { KeyRound, CreditCard, FileText, Image, Video, Check } from "lucide-react";
const materials = [{
  icon: KeyRound,
  name: "Llaveros del juego",
  available: true
}, {
  icon: CreditCard,
  name: "Tarjetas coleccionables",
  available: true
}, {
  icon: FileText,
  name: "Folletos informativos",
  available: true
}, {
  icon: Image,
  name: "Cartel oficial",
  available: true
}, {
  icon: Video,
  name: "Video promocional",
  available: true
}];
const MaterialsSection = () => {
  return <section className="py-24 relative bg-muted/20" id="materials">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground"></span>
            <span className="gradient-text">PROMOCIONALES DE LA FERIA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo listo para presentar nuestro proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {materials.map((item, index) => <div key={item.name} className="card-cyber rounded-xl p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-medium text-foreground">
                    {item.name}
                  </h3>
                </div>
                {item.available && <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>}
              </div>
            </div>)}
        </div>

        {/* Media placeholder */}
        <div className="max-w-3xl mx-auto">
          <div className="card-cyber rounded-2xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Espacio para media</p>
              <p className="text-sm text-muted-foreground/60">Videos e imágenes promocionales</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MaterialsSection;