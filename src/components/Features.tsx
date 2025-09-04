
import { Target, Gamepad2, Brain, Clock, BookOpen, Users, Lightbulb, CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "56 Flashcards Interativos",
      description: "Em PDF para impressão, abordando as principais dúvidas da ortografia brasileira com regras claras e resumidas."
    },
    {
      icon: Target,
      title: "Regras Claras e Resumidas",
      description: "Flashcards trazendo regras claras de forma resumida para fixar o uso correto de letras como 's', 'z', 'x' e 'ch'."
    },
    {
      icon: Brain,
      title: "Explicações Descomplicadas",
      description: "Sobre as diferenças entre palavras homônimas, como 'mas/mais', 'onde/aonde', 'mal/mau', entre outras."
    },
    {
      icon: Lightbulb,
      title: "Conteúdo Completo",
      description: "Para memorização de regras desafiadoras como o uso do hífen, plural dos substantivos compostos e uso dos porquês, junto de exemplos práticos."
    },
    {
      icon: Users,
      title: "Sugestões de Uso Criativas",
      description: "E dinâmicas para estudar sozinho, em grupo ou aplicar em sala de aula."
    },
    {
      icon: Gamepad2,
      title: "Perguntas de Múltipla Escolha",
      description: "Para testar e consolidar o aprendizado de forma prática."
    },
    {
      icon: CheckCircle,
      title: "Respostas com Explicações",
      description: "E dicas exclusivas, para sanar qualquer dúvida definitivamente."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="mb-6 text-foreground">
            O que você vai encontrar no produto:
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ✅️ 56 flashcards interativos (em PDF para impressão), abordando as principais dúvidas da ortografia sendo:
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
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
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
            <div className="card-floating p-8 bg-white">
              <img 
                src="/img/Imagem-do-produto-1.png" 
                alt="Flashcards interativos de ortografia mostrando regras gramaticais e exercícios" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
