
import React from 'react';
import { Shield, Package, Stethoscope } from 'lucide-react';

const guarantees = [
  {
    id: 1,
    title: 'Confidencialidade total',
    description: 'Todas as consultas e informações são protegidas por sigilo médico. Sua privacidade é nossa prioridade.',
    icon: Shield
  },
  {
    id: 2,
    title: 'Entrega discreta',
    description: 'Enviamos seus produtos em embalagens neutras, sem identificação do conteúdo ou da Bravo Homem no exterior.',
    icon: Package
  },
  {
    id: 3,
    title: 'Aprovação médica',
    description: 'Todos os tratamentos são avaliados e aprovados por médicos especialistas antes do envio.',
    icon: Stethoscope
  }
];

const Guarantees = () => {
  return (
    <section className="section-padding bg-bravo-beige">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas garantias</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Comprometidos com a qualidade, segurança e discrição em cada etapa do seu tratamento.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee) => (
            <div key={guarantee.id} className="bg-white rounded-lg p-8 shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-bravo-blue/10 flex items-center justify-center mb-6">
                <guarantee.icon size={28} className="text-bravo-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
