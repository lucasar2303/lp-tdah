
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      image: "/img/testimonials/testimonial-1.jpg",
      name: "Maria Santos",
      role: "Mãe do João (8 anos, TDAH)",
      content: "Em 2 meses seguindo as estratégias do e-book, meu filho reduziu 70% dos sintomas de hiperatividade! A abordagem integral realmente funciona.",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-2.jpg",
      name: "Dr. Carlos Silva",
      role: "Pediatra",
      content: "Recomendo este e-book para meus pacientes. A abordagem científica integral trouxe resultados que os tratamentos tradicionais não conseguiam.",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-3.jpg",
      name: "Ana Oliveira",
      role: "Mãe da Sofia (6 anos, Autismo)",
      content: "Minha filha melhorou drasticamente na comunicação e interação social. As estratégias de alimentação fizeram toda a diferença!",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-4.jpg",
      name: "Roberto Costa",
      role: "Pai do Pedro (10 anos, TDAH)",
      content: "Finalmente encontrei uma abordagem que trata meu filho como um todo. Os resultados apareceram em poucas semanas!",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-5.jpg",
      name: "Lucia Mendes",
      role: "Terapeuta Ocupacional",
      content: "Uso as estratégias do e-book com meus pacientes. A melhora na concentração e comportamento é visível e duradoura.",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-6.jpg",
      name: "Prof. Fernando Lima",
      role: "Professor de Educação Especial",
      content: "Este e-book mudou minha forma de trabalhar com crianças no espectro. A abordagem integral é revolucionária!",
      rating: 5
    },
    {
      image: "/img/testimonials/testimonial-7.jpg",
      name: "Patricia Alves",
      role: "Mãe da Beatriz (12 anos, Autismo)",
      content: "Minha filha reduziu 80% dos comportamentos repetitivos e melhorou muito na socialização. Estou eternamente grata!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculando o número total de grupos (2 testimonials por grupo)
  const totalGroups = Math.ceil(testimonials.length / 2);

  // Auto-play do carrossel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, [totalGroups]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalGroups - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalGroups - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 text-foreground">
            O que dizem quem já usou
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depoimentos reais de pais, familiares e profissionais que transformaram 
            a vida de seus filhos e pacientes com Autismo e TDAH
          </p>
        </div>
        
        {/* Carrossel de Testimonials */}
        <div className="relative max-w-5xl mx-auto">
          {/* Container do carrossel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {/* Agrupando testimonials em pares */}
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Primeiro print do depoimento */}
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            <MessageCircle className="w-4 h-4" />
                            Depoimento Real
                          </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                          <img 
                            src={testimonials[groupIndex * 2].image} 
                            alt={`Print do depoimento de ${testimonials[groupIndex * 2].name} em rede social`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                      
                      {/* Segundo print do depoimento */}
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                            <MessageCircle className="w-4 h-4" />
                            Depoimento Real
                          </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                          <img 
                            src={testimonials[groupIndex * 2 + 1]?.image || testimonials[0].image} 
                            alt={`Print do depoimento de ${testimonials[groupIndex * 2 + 1]?.name || testimonials[0].name} em rede social`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botões de navegação */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
          
          {/* Indicadores */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalGroups }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="text-center mt-16">
          <div className="card-highlight p-8 inline-block">
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-foreground">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 estrelas</span>
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Baseado em mais de 500 avaliações
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
