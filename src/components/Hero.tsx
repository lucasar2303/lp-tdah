
import { BookOpen, Sparkles, Users, Star, Zap, Gift } from "lucide-react";

const Hero = () => {
  const scrollToBonus = () => {
    const bonusSection = document.getElementById('bonus-section');
    if (bonusSection) {
      bonusSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-spacing mt-20 bg-gradient-to-br from-blue-50 via-white to-indigo-100 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-blue-300/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Linhas decorativas animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-indigo-200/50 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge animado */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className="text-primary font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Educação Lúdica
              </span>
            </div>
            
            {/* Título principal com efeitos */}
            <h1 className="mb-8 text-foreground leading-tight text-5xl md:text-6xl font-bold">
              A forma mais fácil e{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                divertida
              </span>{' '}
              de dominar a{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                ortografia
              </span>{' '}
              sem nunca mais errar!
            </h1>
            
            {/* Subtítulo com destaque */}
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Com o <strong>Baralho da Ortografia</strong>, você transforma estudo em diversão, 
              memoriza as regras essenciais rapidamente e ganha confiança para escrever com perfeição!
            </p>
            
            {/* Botões com efeitos */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <a 
                href="https://pay.hotmart.com/J98360473A?sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&checkoutMode=10&subid3=&subid4=&utm_campaign=&subid5=&utm_medium=&subid2=&subid=organic&utm_term=&sid2=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_content=&bid=1756204630466"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Quero Começar Agora</span>
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </a>
              
              <button 
                onClick={scrollToBonus}
                className="group inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-primary font-semibold text-lg px-8 py-4 rounded-2xl border-2 border-blue-200 hover:border-blue-300 hover:bg-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
              >
                <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Quero Bônus
              </button>
            </div>
            
            {/* Estatísticas com ícones animados */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-primary">+5.000 estudantes</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-primary">Método comprovado</span>
              </div>
            </div>
          </div>
          
          {/* Cards dos flashcards com animações aprimoradas */}
          <div className="lg:justify-self-end">
            <div className="relative">
              {/* Card principal com efeitos */}
              <div className="card-floating p-12 bg-white/90 backdrop-blur-sm animate-float shadow-2xl border border-blue-100">
                <div className="grid grid-cols-3 gap-6">
                  {Array.from({length: 9}).map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Ícone de check com efeitos */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl animate-pulse shadow-lg border-4 border-white">
                ✓
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
