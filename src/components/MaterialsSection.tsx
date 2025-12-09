import { KeyRound, CreditCard, FileText, Image, Check, Pin } from "lucide-react";
import { useState, useEffect } from "react";
import pin1 from "@/assets/pin-1.png";
import pin2 from "@/assets/pin-2.png";

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
  icon: Pin,
  name: "Pines del juego",
  available: true
}];

const carouselImages = [pin1, pin2];

const MaterialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative bg-muted/20" id="materials">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">PROMOCIONALES DE LA FERIA</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todo listo para presentar nuestro proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {materials.map((item) => (
            <div key={item.name} className="card-cyber rounded-xl p-6 group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-medium text-foreground">
                    {item.name}
                  </h3>
                </div>
                {item.available && (
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Photo Carousel with Fade */}
        <div className="max-w-3xl mx-auto">
          <div className="card-cyber rounded-2xl aspect-video flex items-center justify-center overflow-hidden relative">
            {carouselImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Promocional ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain p-8 transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;