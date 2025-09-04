
import { Award, BookOpen, Users, Star } from "lucide-react";

const Author = () => {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="card-floating p-8 bg-gradient-accent">
              {/* Foto do autor */}
              <div className="aspect-square rounded-3xl mb-6 overflow-hidden shadow-xl">
                <img 
                  src="/img/autor.jpg" 
                  alt="Jorge Luis Nunes - Professor de Língua Portuguesa e criador do Baralho da Ortografia" 
                  className="w-full h-full object-cover"
                />
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
              Sobre o Autor
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Jorge Luis Nunes</strong> é professor de Língua Portuguesa formado em Letras pela Universidade Federal do Pará (UFPA), a maior universidade do norte do país. Atua ministrando aulas particulares de Português e Redação, com foco em resultados práticos e eficientes.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: Award,
                  text: "Aprovou alunos no Enem e concursos"
                },
                {
                  icon: BookOpen,
                  text: "Criador de materiais educativos inovadores"
                },
                {
                  icon: Users,
                  text: "Especialista em ensino acessível e objetivo"
                },
                {
                  icon: Star,
                  text: "Experiência em aulas personalizadas"
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
              "Acredito que todo estudante pode aprender ortografia de forma divertida. 
              O segredo está em encontrar o método certo para cada perfil de aprendizagem."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
