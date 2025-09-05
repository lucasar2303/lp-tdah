
import { Gift, BookOpen, Star, Zap, Target, CheckCircle } from "lucide-react";

const Bonus = () => {
  return (
    <section id="bonus-section" className="section-spacing bg-gradient-to-br from-blue-50 via-white to-indigo-100 relative overflow-hidden">
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
        <div className="text-center mb-16">
          {/* Badge animado */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
              <Gift className="text-white w-8 h-8" />
            </div>
            <span className="text-primary font-bold text-xl bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
              Bônus Exclusivo
            </span>
          </div>
          
          <h2 className="mb-6 text-foreground text-4xl md:text-5xl font-bold">
            Oferta Especial
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            📘 E-Book completo por apenas <strong>R$ 19,99</strong><br/>
            💳 Pagamento 100% seguro — em até 2x<br/>
            📲 Acesso imediato em qualquer dispositivo<br/>
            🛡 Garantia incondicional de 7 dias: se não gostar, devolvemos seu dinheiro sem perguntas
          </p>
        </div>
        
        {/* Card principal do produto */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="card-floating p-8 bg-white/90 backdrop-blur-sm shadow-2xl border border-blue-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                E-Book: Reduza os Sintomas de Autismo e TDAH em até 80%
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">R$ 19,99</span>
                <p className="text-muted-foreground mt-2">Acesso imediato e vitalício</p>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Nova visão sobre Autismo e TDAH baseada na Ciência Integral</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Pesquisas, relatos clínicos e experiências reais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Estratégias de alimentação e suplementação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Conhecimento pouco divulgado sobre tratamentos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Oferta especial com CTA moderno */}
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto">
            {/* Card principal */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header com gradiente */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold">
                    Oferta Especial
                  </h3>
                </div>
                <p className="text-lg text-blue-100">
                  Por tempo limitado
                </p>
              </div>
              
              {/* Conteúdo principal */}
              <div className="p-8">
                {/* Preços em destaque */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="text-3xl text-gray-400 line-through">
                      R$ 49,90
                    </span>
                    <span className="text-2xl text-gray-500">→</span>
                    <span className="text-5xl font-bold text-blue-600">
                      R$ 19,99
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">
                    Economia de <strong className="text-green-600">R$ 29,91</strong>
                  </p>
                </div>
                
                {/* Benefícios */}
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">E-Book completo sobre Autismo e TDAH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Abordagem baseada na Ciência Integral</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Estratégias práticas de alimentação e suplementação</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="https://pay.hotmart.com/G101450314D?off=0y0ya9jk&hotfeature=51&_hi=eyJjaWQiOiIxNzU2MjQzNDM3NDM1MTc3ODM5NzE4ODAwMTAwNDAwIiwiYmlkIjoiMTc1NjI0MzQzNzQzNTE3NzgzOTcxODgwMDEwMDQwMCIsInNpZCI6IjIwN2M1YzU5YjA0NTQ0MjJiMmQyYWJlZGM2ZjY5MWFhIn0=.1757090207715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Comprar Agora
                </a>
                
                {/* Urgência */}
                <p className="text-sm text-gray-500 mt-4">
                  ⚡ Oferta por tempo limitado - Não perca!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Valor agregado */}
        <div className="text-center hidden">
          <div className="card-floating p-8 bg-white/90 backdrop-blur-sm shadow-2xl border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              💎 Valor Agregado Exclusivo
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O <strong>Baralho dos Sinais de Pontuação</strong> complementa perfeitamente o{' '}
              <strong>Baralho da Ortografia</strong>, deixando seu aprendizado mais completo e eficaz.{' '}
              Com 30 cartões educativos exclusivos, você dominará as regras de pontuação de forma prática e objetiva.
            </p>
            <p className="text-xl font-bold text-primary">
              Tudo isso <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">INCLUÍDO GRATUITAMENTE</span> na sua compra!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
