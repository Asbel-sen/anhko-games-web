import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-display font-bold text-foreground">ANHKO</span>
              <span className="font-display font-bold text-secondary"> GAMES</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © 2024 ANHKO GAMES. Microempresa Estudiantil.
          </p>
          
          <p className="text-xs text-muted-foreground/60">
            Hecho con pasión y creatividad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
