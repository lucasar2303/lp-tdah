
import { Zap, BookOpen, Users, TrendingUp } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Conhecimento Exclusivo",
      description: "Este e-book reúne conhecimento pouco divulgado e mostra como ele pode transformar a sua realidade, baseado em pesquisas independentes.",
      stat: "⚡"
    },
    {
      icon: BookOpen,
      title: "Abordagem Científica Integral",
      description: "Fundamentado nos princípios da Ciência Integral, integrando conhecimentos das ciências biológicas, humanas, espirituais e filosóficas.",
      stat: "📚"
    },
    {
      icon: Users,
      title: "Resultados Comprovados",
      description: "Estratégias de alimentação, suplementação e cuidados com o corpo que ajudam a reduzir — e até eliminar — sintomas de forma natural.",
      stat: "🎯"
    },
    {
      icon: TrendingUp,
      title: "Redução de até 80% dos Sintomas",
      description: "Método que busca as causas profundas do Autismo e TDAH, promovendo transformação real e duradoura na qualidade de vida.",
      stat: "📈"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-foreground">
            Por que este conteúdo é diferente?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na internet, quase sempre você encontra as mesmas respostas sobre saúde, alimentação e medicamentos. 
            Mas o que você não vê é que existem pesquisadores independentes que já comprovaram os riscos de certos alimentos e tratamentos tradicionais — informações que raramente chegam até você.
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
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    style={{
                      backgroundColor: index % 3 === 0 ? '#FED755' : index % 3 === 1 ? '#EC395E' : '#70CBF4'
                    }}
                  >
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
            href="https://pay.hotmart.com/G101450314D?off=0y0ya9jk&hotfeature=51&_hi=eyJjaWQiOiIxNzU2MjQzNDM3NDM1MTc3ODM5NzE4ODAwMTAwNDAwIiwiYmlkIjoiMTc1NjI0MzQzNzQzNTE3NzgzOTcxODgwMDEwMDQwMCIsInNpZCI6IjIwN2M1YzU5YjA0NTQ0MjJiMmQyYWJlZGM2ZjY5MWFhIn0=.1757090207715"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Comprar Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
