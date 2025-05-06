
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TreatmentHeader from '@/components/treatments/TreatmentHeader';
import ProductCard from '@/components/treatments/ProductCard';

const hairProducts = [
  {
    id: 'minoxidil',
    name: 'Minoxidil 5%',
    description: 'Solução tópica para estimular o crescimento capilar e reduzir a queda de cabelo.',
    image: '/placeholder.svg',
    features: [
      { text: 'Estimula o crescimento de novos fios' },
      { text: 'Fortalece os fios existentes' },
      { text: 'Aplicação tópica fácil e discreta' },
      { text: 'Resultados visíveis em 3-6 meses' }
    ],
    price: 'R$ 119,90/mês',
    route: '/anamnese/queda-capilar'
  },
  {
    id: 'finasterida',
    name: 'Finasterida 1mg',
    description: 'Medicamento oral que previne a queda de cabelo e estimula o crescimento em casos de calvície masculina.',
    image: '/placeholder.svg',
    features: [
      { text: 'Inibe a enzima causadora da queda' },
      { text: 'Previne a progressão da calvície' },
      { text: 'Uso oral diário' },
      { text: 'Trata a causa raiz da queda de cabelo' }
    ],
    price: 'R$ 149,90/mês',
    route: '/anamnese/queda-capilar'
  },
  {
    id: 'kit-completo',
    name: 'Kit Completo Capilar',
    description: 'Combinação de tratamentos para máxima eficácia contra a queda de cabelo e estímulo ao crescimento.',
    image: '/placeholder.svg',
    features: [
      { text: 'Minoxidil 5% + Finasterida 1mg' },
      { text: 'Shampoo especializado anti-queda' },
      { text: 'Suplemento vitamínico para cabelos' },
      { text: 'Economia de 15% em relação aos produtos individuais' }
    ],
    price: 'R$ 229,90/mês',
    route: '/anamnese/queda-capilar'
  }
];

const HairLoss = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <TreatmentHeader 
          title="Tratamento para Queda Capilar" 
          description="Soluções cientificamente comprovadas para combater a queda de cabelo e estimular o crescimento, com acompanhamento médico especializado e entrega discreta em sua casa."
          route="/anamnese/queda-capilar"
        />
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Sobre a queda capilar</h2>
              <p className="text-lg text-gray-700 max-w-4xl">
                A queda de cabelo afeta a maioria dos homens em algum momento da vida, principalmente devido à 
                calvície de padrão masculino (alopecia androgenética), causada por fatores genéticos e hormonais.
                Com os tratamentos certos, é possível interromper a progressão da queda e estimular novos crescimentos.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Opções de tratamento</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairProducts.map(product => (
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

export default HairLoss;
