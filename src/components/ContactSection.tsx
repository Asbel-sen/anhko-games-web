import { Mail, Instagram, Facebook } from "lucide-react";

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

        <div className="max-w-md mx-auto">
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
                  <p className="text-foreground font-medium">ankhempresaempresarial@gmail.com</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Redes Sociales</p>
                <div className="flex gap-4 justify-center">
                  <a href="https://www.instagram.com/anhkogames_oficial?igsh=MXA2eTN0NWhvaW4wbA==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
                    <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://x.com/ankh_oficial?t=zKCI6f2y3wQA12U4cRqXIQ&s=09" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/share/1BWog45PYp/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-muted/50 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
                    <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;