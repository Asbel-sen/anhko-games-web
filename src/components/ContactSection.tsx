import { Mail, QrCode, Instagram, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 relative bg-muted/20" id="contact">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conéctate con nosotros
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="card-cyber rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">
                Información
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">contacto@anhkogames.com</p>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Redes Sociales</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code placeholder */}
            <div className="card-cyber rounded-2xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-48 h-48 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-6">
                <QrCode className="w-24 h-24 text-muted-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Código QR
              </h3>
              <p className="text-sm text-muted-foreground">
                Escanea para acceder a nuestras redes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
