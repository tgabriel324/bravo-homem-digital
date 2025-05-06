
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rodrigo S.',
    age: 32,
    text: 'Depois de tentar vários produtos sem sucesso, o tratamento da Bravo Homem foi o único que realmente funcionou para minha queda de cabelo. Em 3 meses, já notei uma diferença significativa.',
    photo: '/placeholder.svg',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcos L.',
    age: 45,
    text: 'A conveniência do atendimento online e a discrição na entrega fizeram toda a diferença. O médico foi muito atencioso e o tratamento para disfunção tem sido eficaz desde a primeira semana.',
    photo: '/placeholder.svg',
    rating: 5
  },
  {
    id: 3,
    name: 'Felipe M.',
    age: 28,
    text: 'O processo foi muito mais simples do que eu imaginava. Respondi ao questionário, conversei com o médico e recebi meus produtos em casa. Estou vendo resultados reais contra a queda capilar.',
    photo: '/placeholder.svg',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Relatos reais de homens que transformaram sua saúde e qualidade de vida com nossos tratamentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-primary flex flex-col">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}, {testimonial.age}</h4>
                  <div className="flex text-yellow-500 mt-1">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
