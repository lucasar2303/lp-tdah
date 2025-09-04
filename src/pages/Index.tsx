
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
              <span className="font-bold text-2xl">80% OFF! Não deixe para depois!</span>
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
              Quero garantir o meu
            </h3>
            
            {/* Subtítulo com destaque */}
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              Não perca essa oportunidade única de dominar a ortografia!
            </p>
                         {/* Botão CTA principal com efeitos */}
             <div className="animate-fade-in overflow-hidden py-4" style={{animationDelay: '0.6s'}}>
               <a 
                 href="https://pay.hotmart.com/J98360473A?sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&checkoutMode=10&subid3=&subid4=&utm_campaign=&subid5=&utm_medium=&subid2=&subid=organic&utm_term=&sid2=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_content=&bid=1756204630466"
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
      <Bonus />
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
              Tire suas dúvidas sobre o Baralho da Ortografia
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
                  Por que é tão barato?
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
                      <strong className="text-foreground">Excelente pergunta!</strong> Diante da realidade socioeconômica do nosso país onde muitos estudantes não têm acesso fácil a materiais de qualidade, decidi popularizar esse conhecimento para que o acesso seja amplo para todos!
                    </p>
                    <p>
                      Além disso, caso você sinta que o material não é bom ou não lhe ajudou, o <strong className="text-foreground">Código de Defesa do Consumidor (Art.49)</strong> garante que você receba o seu reembolso em até 7 dias após a compra!
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
                  É possível aprender por meio de baralhos?
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
                      Cada pessoa tem seu processo de aprendizagem. Contudo, se a pessoa utilizar a ferramenta conforme as instruções, a sua capacidade de memorização de conteúdo será muito maior do que se ela não usasse. Aqui não prometemos milagres, mas resultados a partir da aplicação de um método baseado cientificamente.
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
                  Já estudei ortografia antes. O material pode me ajudar?
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
                      <strong className="text-foreground">Sem dúvidas!</strong> O material é um eficiente instrumento para revisão! Além disso, você pode descobrir detalhes da ortografia que não havia aprendido ainda!
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
                  Quanto tempo eu preciso utilizar o material para ter resultados?
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
                      Ao aplicar a estratégia, você já consegue perceber os primeiros efeitos nos primeiros <strong className="text-foreground">7 dias</strong>, porém, quanto maior o espaço de tempo utilizando a ferramenta, melhores serão os resultados!
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
                  O baralho serve para crianças e adolescentes em idade escolar?
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
                  <div className="text-muted-foreground leading-relaxed pt-4">
                    <p>
                      <strong className="text-foreground">Com certeza!</strong> A ferramenta pode ser aplicada para ajudar estudantes na idade escolar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Item 6 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(5)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  Como funciona o pagamento? É seguro?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 5 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 5 
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
            
            {/* FAQ Item 7 */}
            <div className="card-floating bg-white shadow-lg border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(6)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">7</span>
                  Como recebo o produto?
                </h3>
                <div className={`transition-transform duration-300 ${openFAQ === 6 ? 'rotate-180' : 'rotate-0'}`}>
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 6 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="text-muted-foreground leading-relaxed space-y-4 pt-4">
                    <p>
                      Após a compra, você receberá um <strong className="text-foreground">e-mail para acessar o conteúdo</strong>. Por isso, é importante que coloque seu e-mail corretamente ao realizar a compra!
                    </p>
                    <p>
                      Assim que a sua compra for confirmada, corra para seu e-mail e acesse o link recebido. Através dele você fará o seu registro na plataforma para baixar seu material!
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
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco ou aproveite nossa garantia de 7 dias!
              </p>
              <a 
                href="https://pay.hotmart.com/J98360473A?sck=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&checkoutMode=10&subid3=&subid4=&utm_campaign=&subid5=&utm_medium=&subid2=&subid=organic&utm_term=&sid2=&xcod=organichQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_content=&bid=1756204630466"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Quero Garantir Minha Oferta
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
