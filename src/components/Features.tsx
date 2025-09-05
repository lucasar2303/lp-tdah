
import { Target, Gamepad2, Brain, Clock, BookOpen, Users, Lightbulb, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Nova Visão Científica",
      description: "Uma abordagem baseada na Ciência Integral que busca as causas profundas do Autismo e TDAH, integrando conhecimentos das ciências biológicas, humanas, espirituais e filosóficas."
    },
    {
      icon: Target,
      title: "Pesquisas Comprovadas",
      description: "Relatos clínicos e experiências reais que comprovam a redução de sintomas de hiperatividade, déficit de atenção e comportamentos ligados ao espectro autista."
    },
    {
      icon: Brain,
      title: "Estratégias Práticas",
      description: "Estratégias de alimentação, suplementação e cuidados com o corpo que ajudam a reduzir — e até eliminar — sintomas de forma natural e eficaz."
    },
    {
      icon: Lightbulb,
      title: "Conhecimento Exclusivo",
      description: "Informações pouco divulgadas sobre riscos de certos alimentos e tratamentos tradicionais, baseadas em pesquisas independentes."
    },
    {
      icon: Users,
      title: "Aplicação Diária",
      description: "Tudo explicado de forma clara, prática e acessível para você aplicar no dia a dia com resultados visíveis."
    },
    {
      icon: Gamepad2,
      title: "Abordagem Integral",
      description: "Método que considera o ser humano como um todo, não apenas os sintomas, promovendo transformação real e duradoura."
    },
    {
      icon: CheckCircle,
      title: "Resultados Comprovados",
      description: "Redução de até 80% dos sintomas de Autismo e TDAH através de uma abordagem científica e holística."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-6 text-foreground">
            O que você vai encontrar neste E-Book:
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma nova visão sobre Autismo e TDAH, baseada na Ciência Integral com pesquisas, 
            relatos clínicos e experiências reais que comprovam resultados:
          </p>
        </div>
        
        {/* Layout de duas colunas: Lista à esquerda, Imagem à direita */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna da Esquerda - Lista de Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 stagger-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                  style={{
                    backgroundColor: index % 3 === 0 ? '#FED755' : index % 3 === 1 ? '#EC395E' : '#70CBF4'
                  }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Coluna da Direita - Imagem dos Flashcards */}
          <div className="stagger-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="card-floating p-8 bg-white flex justify-center items-center">
              <img 
                src="/img/img-do-produto.jpg" 
                alt="Flashcards interativos de ortografia mostrando regras gramaticais e exercícios" 
                className="w-[75%] h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
