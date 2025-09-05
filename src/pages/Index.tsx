
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TargetAudience from "@/components/TargetAudience";
import Benefits from "@/components/Benefits";
import Bonus from "@/components/Bonus";
import Author from "@/components/Author";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FinalCTA from "@/components/FinalCTA";
import { ChevronDown, ChevronUp } from "lucide-react";

// Hook personalizado para o contador regressivo
const useCountdown = (initialMinutes: number) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return { minutes, seconds };
};

const Index = () => {
  const { minutes, seconds } = useCountdown(15);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0); // Primeira pergunta aberta por padrão

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Tarja Promocional */}
      <div className="bg-black text-white py-4 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">🔥</span>
              <span className="font-bold text-2xl">60% OFF! Não deixe para depois!</span>
            </div>
            
            <div className="flex items-center gap-3 bg-white/20 px-5 py-2 rounded-lg">
              <span className="text-base font-medium">Termina em:</span>
              <div className="flex gap-2">
                <div className="bg-white text-blue-700 px-3 rounded font-mono font-bold min-w-[3rem] text-center text-xl">
                  {minutes.toString().padStart(2, '0')}
                </div>
                <span className="text-white font-bold text-xl">:</span>
                <div className="bg-white text-blue-700 px-3 rounded font-mono font-bold min-w-[3rem] text-center text-xl">
                  {seconds.toString().padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <Features />
      <TargetAudience />

      
      
      {/* Mini Seção CTA - Design Atraente */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 left-20 w-20 h-20 bg-white/10 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Linhas decorativas animadas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-white/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container-custom relative z-10 px-8">
          <div className="text-center">
            {/* Ícone decorativo animado */}
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
            {/* Título principal com efeito de destaque */}
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              👉 Clique em Comprar Agora
            </h3>
            
            {/* Subtítulo com destaque */}
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              e descubra um novo caminho para lidar com o Autismo e o TDAH!
            </p>
                         {/* Botão CTA principal com efeitos */}
             <div className="animate-fade-in overflow-hidden py-4" style={{animationDelay: '0.6s'}}>
               <a 
                 href="https://pay.hotmart.com/G101450314D?off=0y0ya9jk&hotfeature=51&_hi=eyJjaWQiOiIxNzU2MjQzNDM3NDM1MTc3ODM5NzE4ODAwMTAwNDAwIiwiYmlkIjoiMTc1NjI0MzQzNzQzNTE3NzgzOTcxODgwMDEwMDQwMCIsInNpZCI6IjIwN2M1YzU5YjA0NTQ0MjJiMmQyYWJlZGM2ZjY5MWFhIn0=.1757090207715"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-xl px-12 py-5 rounded-2xl shadow-2xl transition-all duration-300 hover:from-yellow-300 hover:to-orange-400 transform hover:scale-105 active:scale-95 overflow-hidden inline-block"
               >
                 <span className="relative z-10">Comprar agora!</span>
                 <span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">🚀</span>
                 
                 {/* Efeito de brilho contido */}
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
               </a>
             </div>
            
            {/* Texto de urgência */}
            <p className="text-sm text-blue-200 mt-6 animate-pulse">
              ⚡ Oferta por tempo limitado - Não perca!
            </p>
          </div>
        </div>
      </section>

      
      <Benefits />
      <Author />
      <Testimonials />
      <Guarantee />
      <FinalCTA />
      
      {/* Seção FAQ */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-6 text-foreground text-4xl md:text-5xl font-bold">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre o E-Book de Autismo e TDAH
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Para quem é esse conteúdo?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 0 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 0 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                    <p>
                      <strong className="text-foreground">Para pais, familiares, educadores e profissionais</strong> que lidam com Autismo e TDAH e buscam novas soluções baseadas na Ciência Integral.
                    </p>
                    <p>
                      O conteúdo é especialmente útil para quem quer uma abordagem que busca as causas profundas, integrando conhecimentos das ciências biológicas, humanas, espirituais e filosóficas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Como funciona a garantia?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 1 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed pt-4">
                    <p>
                      Você tem até <strong className="text-foreground">7 dias para solicitar seu reembolso</strong>, sem burocracia. Se não gostar do conteúdo ou não ver resultados, devolvemos 100% do seu dinheiro sem perguntas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Recebo certificado digital?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 2 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed pt-4">
                    <p>
                      <strong className="text-foreground">Sim, você recebe um certificado de conclusão digital</strong> após a compra do e-book, validando seu acesso ao conhecimento sobre Autismo e TDAH baseado na Ciência Integral.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(3)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Como acessar o produto?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 3 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed pt-4">
                    <p>
                      <strong className="text-foreground">Após a confirmação da compra, o acesso é liberado imediatamente</strong>. Você receberá um e-mail com o link para download do e-book e poderá acessar em qualquer dispositivo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(4)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Como funciona o pagamento? É seguro?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 4 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 4 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                    <p>
                      Você pode realizar o pagamento via <strong className="text-foreground">PIX ou cartão de crédito</strong>. Fique tranquilo, pois seus dados estão seguros.
                    </p>
                    <p>
                      O pagamento é processado pela plataforma <strong className="text-foreground">Hotmart</strong>, a principal plataforma de vendas de infoprodutos no Brasil, a qual permite reembolso e oferece suporte para qualquer problema que possa ocorrer com a compra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Final */}
          <div className="text-center mt-16">
            <div className="card-highlight p-8 inline-block">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                🚀 Não perca essa oportunidade
              </h3>
              <p className="text-muted-foreground mb-6">
                Transforme conhecimento em prática e descubra novas formas de cuidar de quem você ama.
              </p>
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
        </div>
      </section>
    </div>
  );
};

export default Index;
