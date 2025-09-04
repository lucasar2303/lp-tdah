
import { Shield, CheckCircle, Clock, RefreshCw } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="section-spacing bg-gradient-accent">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in mb-12">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="text-primary w-8 h-8" />
              <span className="text-primary font-bold text-lg">Garantia Total</span>
            </div>
            
            <h2 className="mb-6 text-foreground">
              Sua satisfação é garantida
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estamos tão confiantes na eficácia do nosso método que oferecemos uma garantia incondicional
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Clock,
                title: "7 Dias",
                description: "Teste por 7 dias completos"
              },
              {
                icon: RefreshCw,
                title: "Devolução",
                description: "100% do seu dinheiro de volta"
              },
              {
                icon: CheckCircle,
                title: "Sem Perguntas",
                description: "Processo simples e rápido"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="stagger-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="card-highlight p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Como funciona nossa garantia?
            </h3>
            
            <div className="text-left max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Adquira o produto</strong> e use por até 7 dias
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Teste todos os recursos</strong> e veja os resultados
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Se não ficar satisfeito</strong>, solicite e receba 100% do reembolso
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-xl">
              <p className="text-primary font-semibold">
                💡 Dica: A maioria dos nossos clientes vê resultados já na primeira semana!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
