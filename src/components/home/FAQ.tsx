
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "Como funciona a consulta online?",
    answer: "Você preenche um questionário médico detalhado sobre sua saúde e o problema específico. Um médico especialista avalia suas respostas, podendo solicitar informações adicionais se necessário, e então prescreve o tratamento mais adequado para o seu caso."
  },
  {
    id: "faq-2",
    question: "Os medicamentos são seguros?",
    answer: "Sim. Todos os medicamentos que prescrevemos são aprovados pela ANVISA e cientificamente comprovados. Nossos médicos avaliam cuidadosamente seu histórico médico para recomendar apenas tratamentos seguros e adequados ao seu caso específico."
  },
  {
    id: "faq-3",
    question: "Como é feita a entrega dos produtos?",
    answer: "Enviamos todos os produtos em embalagens discretas, sem qualquer identificação do conteúdo ou da Bravo Homem no exterior. Oferecemos frete grátis para todo o Brasil, com rastreamento completo da entrega."
  },
  {
    id: "faq-4",
    question: "Quanto tempo até ver resultados?",
    answer: "O tempo para resultados visíveis varia conforme o tratamento e o organismo de cada pessoa. Para queda capilar, os primeiros resultados geralmente aparecem entre 3-6 meses de uso contínuo. Para disfunção erétil, os efeitos podem ser percebidos já nos primeiros usos do medicamento."
  },
  {
    id: "faq-5",
    question: "Posso cancelar minha assinatura a qualquer momento?",
    answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou multas, diretamente pela sua área de cliente no site ou entrando em contato com nosso suporte via WhatsApp."
  },
  {
    id: "faq-6",
    question: "Como posso falar com o médico após iniciar o tratamento?",
    answer: "Você terá acesso à sua área de cliente, onde poderá enviar mensagens ao médico responsável pelo seu tratamento, fazer perguntas e solicitar ajustes na sua prescrição conforme necessário."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas frequentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e serviços.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-b border-gray-200 py-2">
              <AccordionTrigger className="text-left font-medium text-lg hover:text-bravo-blue">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
