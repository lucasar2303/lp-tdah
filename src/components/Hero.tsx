
import { BookOpen, Sparkles, Users, Star, Zap } from "lucide-react";

const Hero = () => {

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
                Ciência Integral
              </span>
            </div>
            
            {/* Título principal com efeitos */}
            <h1 className="mb-8 text-foreground leading-tight text-5xl md:text-6xl font-bold">
              Reduza os Sintomas de{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                Autismo e TDAH
              </span>{' '}
              em até{' '}
              <span style={{color: '#FED755'}}>
                80%
              </span>
            </h1>
            
            {/* Subtítulo com destaque */}
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Descubra um novo caminho para compreender e tratar o Autismo e o TDAH, 
              fundamentado nos princípios da <strong>Ciência Integral</strong>. 
              Uma abordagem que busca as causas profundas, integrando conhecimentos das ciências biológicas, 
              humanas, espirituais e filosóficas.
            </p>
            
            {/* Botão com efeitos */}
            <div className="mb-10">
              <a 
                href="https://pay.hotmart.com/G101450314D?off=0y0ya9jk&hotfeature=51&_hi=eyJjaWQiOiIxNzU2MjQzNDM3NDM1MTc3ODM5NzE4ODAwMTAwNDAwIiwiYmlkIjoiMTc1NjI0MzQzNzQzNTE3NzgzOTcxODgwMDEwMDQwMCIsInNpZCI6IjIwN2M1YzU5YjA0NTQ0MjJiMmQyYWJlZGM2ZjY5MWFhIn0=.1757090207715"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-lg px-16 py-4 rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden w-full max-w-md"
              >
                <span className="relative z-10">Comprar Agora</span>
                <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </a>
            </div>
            
            {/* Estatísticas com ícones animados */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-primary">+1.000 famílias</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border" style={{borderColor: '#FED755'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#FED755'}}>
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold" style={{color: '#FED755'}}>Abordagem científica</span>
              </div>
            </div>
          </div>
          
          {/* Logo do Autismo com animações */}
          <div className="lg:justify-self-end">
            <div className="relative">
              {/* Imagem do logo do autismo */}
              <img 
                src="/img/autism-logo.png" 
                alt="Símbolo de conscientização do Autismo - fita de quebra-cabeças colorida" 
                className="w-full h-96 object-contain animate-float"
              />
              
              {/* Ícone de check com efeitos */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl animate-pulse shadow-lg border-4 border-white">
                ✓
              </div>
              
              {/* Elementos decorativos flutuantes */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full animate-bounce" style={{backgroundColor: '#FED755', animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full animate-bounce" style={{backgroundColor: '#FED755', animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
