
import { Award, BookOpen, Users, Star } from "lucide-react";

const Author = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card-floating p-8 bg-gradient-accent">
              {/* Mockup com letra W */}
              <div className="aspect-square rounded-3xl mb-6 overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-8xl font-bold">
                  W
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10k+</div>
                  <div className="text-sm text-muted-foreground">Alunos impactados</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Métodos desenvolvidos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 text-foreground">
              Sobre o Especialista
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Dr. Wellington</strong> é especialista em Autismo e TDAH com mais de 15 anos de experiência clínica. Formado em Medicina e pós-graduado em Neurologia, desenvolveu uma abordagem única baseada na Ciência Integral, integrando conhecimentos das ciências biológicas, humanas, espirituais e filosóficas.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Award,
                  text: "Mais de 1.000 famílias atendidas com sucesso"
                },
                {
                  icon: BookOpen,
                  text: "Pesquisador independente em tratamentos alternativos"
                },
                {
                  icon: Users,
                  text: "Especialista em abordagem integral do ser humano"
                },
                {
                  icon: Star,
                  text: "Desenvolvedor da metodologia Ciência Integral"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "Acredito que o Autismo e o TDAH não são limitações, mas sim oportunidades de crescimento. 
              O segredo está em buscar as causas profundas e tratar o ser humano como um todo integral."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
