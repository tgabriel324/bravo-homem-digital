
import React from 'react';
import { FileText, Stethoscope, Package } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Responda ao questionário',
    description: 'Preencha nosso formulário confidencial para que possamos entender sua saúde e necessidades específicas.',
    icon: FileText
  },
  {
    id: 2,
    title: 'Avaliação médica',
    description: 'Um de nossos médicos especialistas analisará suas respostas e criará um plano de tratamento personalizado.',
    icon: Stethoscope
  },
  {
    id: 3,
    title: 'Receba em casa',
    description: 'Enviamos seu tratamento em embalagens discretas diretamente para sua porta, com acompanhamento contínuo.',
    icon: Package
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como funciona</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nosso processo foi desenhado para ser simples, discreto e eficiente, garantindo que você receba o melhor tratamento possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="card-primary flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-bravo-beige flex items-center justify-center mb-6">
                <step.icon size={28} className="text-bravo-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
