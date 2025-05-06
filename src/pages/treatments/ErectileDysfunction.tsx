
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TreatmentHeader from '@/components/treatments/TreatmentHeader';
import ProductCard from '@/components/treatments/ProductCard';

const edProducts = [
  {
    id: 'sildenafil',
    name: 'Sildenafil 50mg',
    description: 'Medicamento eficaz para o tratamento da disfunção erétil, com ação rápida e duração de até 6 horas.',
    image: '/placeholder.svg',
    features: [
      { text: 'Efeito em aproximadamente 30-60 minutos' },
      { text: 'Duração de 4-6 horas' },
      { text: 'Para uso sob demanda' },
      { text: 'Embalagem com 4 comprimidos mensais' }
    ],
    price: 'R$ 129,90/mês',
    route: '/anamnese/disfuncao-eretil'
  },
  {
    id: 'tadalafil',
    name: 'Tadalafil 5mg',
    description: 'Tratamento de uso diário para disfunção erétil, proporcionando espontaneidade nas relações.',
    image: '/placeholder.svg',
    features: [
      { text: 'Uso diário em baixa dosagem' },
      { text: 'Efeito contínuo (24 horas)' },
      { text: 'Maior espontaneidade' },
      { text: 'Ação por até 36 horas' }
    ],
    price: 'R$ 149,90/mês',
    route: '/anamnese/disfuncao-eretil'
  },
  {
    id: 'kit-premium-ed',
    name: 'Kit Premium Disfunção Erétil',
    description: 'Solução completa para disfunção erétil, combinando medicamentos de uso diário e sob demanda.',
    image: '/placeholder.svg',
    features: [
      { text: 'Tadalafil 5mg uso diário' },
      { text: 'Sildenafil 100mg para momentos especiais' },
      { text: 'Suplemento vitamínico para saúde sexual' },
      { text: 'Economia de 20% em relação aos produtos individuais' }
    ],
    price: 'R$ 219,90/mês',
    route: '/anamnese/disfuncao-eretil'
  }
];

const ErectileDysfunction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TreatmentHeader 
          title="Tratamento para Disfunção Erétil" 
          description="Soluções eficazes e discretas para melhorar a função erétil, com medicamentos de alta qualidade e acompanhamento médico especializado."
          route="/anamnese/disfuncao-eretil"
        />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Sobre a disfunção erétil</h2>
              <p className="text-lg text-gray-700 max-w-4xl">
                A disfunção erétil é um problema comum que afeta homens de todas as idades, causada por 
                fatores físicos, psicológicos ou uma combinação de ambos. Com o tratamento adequado, 
                é possível recuperar a confiança e melhorar significativamente a função erétil e a qualidade de vida.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Opções de tratamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {edProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ErectileDysfunction;
