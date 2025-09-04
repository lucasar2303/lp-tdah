
import { Zap, BookOpen, Users, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Aprendizado mais rápido e divertido",
      description: "Com flashcards interativos, você aprende ortografia de maneira dinâmica, tornando o estudo mais leve e agradável.",
      stat: "⚡"
    },
    {
      icon: BookOpen,
      title: "Fixação definitiva das regras ortográficas",
      description: "O conteúdo é apresentado com explicações claras e exemplos práticos, ajudando a evitar erros comuns e construir confiança na escrita.",
      stat: "📚"
    },
    {
      icon: Users,
      title: "Versatilidade de uso",
      description: "Ideal para estudantes, professores e profissionais, o baralho pode ser usado em diferentes contextos, como estudo individual, grupos ou sala de aula.",
      stat: "🎯"
    },
    {
      icon: TrendingUp,
      title: "Resultados visíveis em pouco tempo",
      description: "Com sessões de estudo curtas e consistentes, você verá progresso rápido na aplicação das regras ortográficas no dia a dia.",
      stat: "📈"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Benefícios Comprovados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Resumindo, esses são os benefícios que você terá ao adquirir o Baralho da Ortografia:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-floating p-8 group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      {benefit.stat}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://pay.hotmart.com/J98360473A?sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&checkoutMode=10&subid3=&subid4=&utm_campaign=&subid5=&utm_medium=&subid2=&subid=organic&utm_term=&sid2=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_content=&bid=1756204630466"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Garantir Meu Acesso Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
