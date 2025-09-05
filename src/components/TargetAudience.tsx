
import { GraduationCap, Users, Heart, BookOpen, PenTool, Target } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Heart,
      title: "Pais e Familiares",
      subtitle: "Apoio integral",
      description: "Que buscam novas formas de cuidar e apoiar seus filhos com Autismo e TDAH",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: GraduationCap,
      title: "Educadores",
      subtitle: "Recursos práticos",
      description: "Professores e coordenadores que querem estratégias eficazes para sala de aula",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Profissionais da Saúde",
      subtitle: "Abordagem integral",
      description: "Terapeutas, psicólogos e médicos que buscam uma visão mais holística",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Cuidadores",
      subtitle: "Conhecimento prático",
      description: "Pessoas que trabalham diretamente com crianças e jovens no espectro",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-6 text-foreground">
            Para quem é esse conteúdo?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Para pais, familiares, educadores e profissionais que lidam com Autismo e TDAH e buscam novas soluções
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="card-highlight p-6 text-center group stagger-fade-in"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${audience.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-200 shadow-lg`}>
                <audience.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {audience.title}
              </h3>
              
              <p className="text-sm font-semibold text-primary mb-4">
                {audience.subtitle}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
