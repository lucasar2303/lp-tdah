
import { ArrowRight, Clock, Users, Zap, Star, CheckCircle, Gift } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-blue-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Linhas decorativas animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-indigo-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Header principal */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Oferta Especial
              </span>
            </div>
            
            <h2 className="mb-8 text-white text-4xl md:text-5xl font-bold leading-tight">
              Reduza os Sintomas de{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Autismo e TDAH
              </span>{' '}
              em até 80%
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Junte-se a milhares de famílias que já transformaram a vida de seus filhos com Autismo e TDAH. 
              Sua nova esperança está a um clique de distância!
            </p>
          </div>
          
          {/* Card principal com oferta */}
          <div className="card-floating p-8 md:p-12 bg-white/95 backdrop-blur-sm text-foreground mb-12 shadow-2xl border border-white/20">
            {/* Comparação de preços */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-gray-400 line-through mb-2">R$ 49,90</div>
                <div className="text-sm text-gray-500">Valor individual</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200">
                <div className="text-sm text-blue-600 mb-2 font-semibold">Oferta especial</div>
                <div className="text-5xl font-bold text-blue-600">R$ 19,99</div>
                <div className="text-sm text-blue-500">Por tempo limitado</div>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">60%</div>
                <div className="text-sm text-green-600 font-semibold">de desconto</div>
              </div>
            </div>
            
            {/* Benefícios incluídos */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  O que está incluído:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">E-Book completo sobre Autismo e TDAH</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Abordagem baseada na Ciência Integral</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Estratégias práticas de alimentação e suplementação</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Garantias:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">7 dias de garantia incondicional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Suporte personalizado incluído</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">Atualizações gratuitas</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA principal */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>Promoção válida por tempo limitado</span>
              </div>
              
              <a 
                href="https://pay.hotmart.com/G101450314D?off=0y0ya9jk&hotfeature=51&_hi=eyJjaWQiOiIxNzU2MjQzNDM3NDM1MTc3ODM5NzE4ODAwMTAwNDAwIiwiYmlkIjoiMTc1NjI0MzQzNzQzNTE3NzgzOTcxODgwMDEwMDQwMCIsInNpZCI6IjIwN2M1YzU5YjA0NTQ0MjJiMmQyYWJlZGM2ZjY5MWFhIn0=.1757090207715"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden mb-6 inline-block"
              >
                <span className="relative z-10">Comprar Agora</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
              </a>
              
              {/* Recursos adicionais */}
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">Acesso imediato</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">Suporte incluído</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-gray-600">7 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mensagem de urgência */}
          <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white p-6 rounded-2xl shadow-xl border border-red-400/50">
            <p className="text-lg font-semibold">
              🎯 <strong>Última chance:</strong> Esta oferta especial pode sair do ar a qualquer momento. 
              Não perca a oportunidade de transformar a vida de quem você ama hoje mesmo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
