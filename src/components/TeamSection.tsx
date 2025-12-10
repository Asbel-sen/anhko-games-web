import christoferImg from "@/assets/team-christofer.png";
import asbelImg from "@/assets/team-asbel.png";
import saulImg from "@/assets/team-saul.png";
import makImg from "@/assets/team-mak.png";
import tovarImg from "@/assets/team-tovar.png";
import christianImg from "@/assets/team-christian.png";
import yaelImg from "@/assets/team-yael.png";

const team = [
  { name: "Christofer", role: "Líder & Diseñador Gráfico", color: "primary", image: christoferImg },
  { name: "Asbel", role: "Programador", color: "secondary", image: asbelImg },
  { name: "Saúl", role: "Analista", color: "accent", image: saulImg },
  { name: "Mak", role: "Capturista", color: "primary", image: makImg },
  { name: "Tovar", role: "Documentación", color: "secondary", image: tovarImg },
  { name: "Christian", role: "Técnico / Logística", color: "accent", image: christianImg },
  { name: "Yael", role: "Comunicación", color: "primary", image: yaelImg },
];

const TeamSection = () => {
  return (
    <section className="py-24 relative" id="team">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">El </span>
            <span className="gradient-text">Equipo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estudiantes creativos trabajando juntos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="card-cyber rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              {/* Avatar with real photo */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-${member.color}/10 border-2 border-${member.color}/30 overflow-hidden group-hover:border-${member.color} transition-colors duration-300`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                {member.name}
              </h3>
              <p className={`text-sm text-${member.color}`}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
};

export default TeamSection;
