
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const treatments = [
  {
    id: 'queda-capilar',
    title: 'Queda Capilar',
    description: 'Tratamentos personalizados com minoxidil, finasterida e outros medicamentos comprovados para combater a queda de cabelo e estimular o crescimento.',
    imageSrc: '/placeholder.svg'
  },
  {
    id: 'disfuncao-eretil',
    title: 'Disfunção Erétil',
    description: 'Soluções eficazes e discretas para melhorar a função erétil, com medicamentos de alta qualidade e acompanhamento médico especializado.',
    imageSrc: '/placeholder.svg'
  }
];

const TreatmentBlocks = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos tratamentos</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções eficazes e discretas para os problemas de saúde mais comuns entre homens.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment) => (
            <div key={treatment.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-60 overflow-hidden">
                <img 
                  src={treatment.imageSrc}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{treatment.title}</h3>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <Link to={`/tratamento/${treatment.id}`}>
                  <Button variant="outline" className="flex items-center">
                    Ver opções <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentBlocks;
