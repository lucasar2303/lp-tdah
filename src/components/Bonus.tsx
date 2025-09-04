
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
            Leve mais do que esperava
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ao adquirir o <strong>Baralho da Ortografia</strong>, você recebe <strong>gratuitamente</strong> o{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent font-bold">
              Baralho dos Sinais de Pontuação
            </span>
          </p>
        </div>
        
        {/* Cards principais dos produtos */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Baralho da Ortografia */}
          <div className="card-floating p-8 bg-white/90 backdrop-blur-sm shadow-2xl border border-blue-100">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Baralho da Ortografia
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary line-through">R$ 29,90</span>
                <p className="text-muted-foreground mt-2">56 flashcards interativos</p>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Regras ortográficas essenciais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Exemplos práticos e claros</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">Método comprovado e eficaz</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Baralho dos Sinais de Pontuação (BÔNUS) */}
          <div className="card-floating p-8 bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-2xl border border-yellow-300 relative overflow-hidden">
            {/* Badge GRÁTIS */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-yellow-600 font-bold text-sm text-center">GRÁTIS</span>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Baralho dos Sinais de Pontuação
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white line-through">R$ 19,90</span>
                <p className="text-white/90 mt-2">30 cartões educativos exclusivos</p>
              </div>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Explicações objetivas e diretas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Exemplos práticos para memorização</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-sm">Complementa perfeitamente o aprendizado</span>
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
                      R$ 49,80
                    </span>
                    <span className="text-2xl text-gray-500">→</span>
                    <span className="text-5xl font-bold text-blue-600">
                      R$ 10,00
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">
                    Economia de <strong className="text-green-600">R$ 39,80</strong>
                  </p>
                </div>
                
                {/* Benefícios */}
                <div className="space-y-3 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Baralho da Ortografia (56 flashcards)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Baralho dos Sinais de Pontuação (30 cartões) - <strong className="text-green-600">GRÁTIS</strong></span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <a 
                  href="https://pay.hotmart.com/J98360473A?sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&checkoutMode=10&subid3=&subid4=&utm_campaign=&subid5=&utm_medium=&subid2=&subid=organic&utm_term=&sid2=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_content=&bid=1756204630466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-block text-center"
                >
                  Quero Garantir Minha Oferta
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
