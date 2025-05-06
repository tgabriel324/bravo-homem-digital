
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-bravo-beige py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privacidade</h1>
            <p className="text-lg text-gray-700">Última atualização: 1 de maio de 2023</p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>
                A Bravo Homem ("nós", "nossos" ou "empresa") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você usa nosso site e serviços.
              </p>
              
              <h2>Informações que coletamos</h2>
              <p>Podemos coletar os seguintes tipos de informações sobre você:</p>
              <ul>
                <li>
                  <strong>Informações pessoais</strong>: nome, endereço de e-mail, endereço postal, número de telefone, data de nascimento e outras informações que você nos fornece ao usar nossos serviços.
                </li>
                <li>
                  <strong>Informações médicas</strong>: histórico médico, condições atuais de saúde, medicamentos e outras informações médicas relevantes para fornecer nossos serviços.
                </li>
                <li>
                  <strong>Informações de pagamento</strong>: dados do cartão de crédito, informações de faturamento e histórico de transações.
                </li>
                <li>
                  <strong>Informações de uso</strong>: como você acessa e usa nosso site e serviços.
                </li>
              </ul>
              
              <h2>Como usamos suas informações</h2>
              <p>Usamos as informações coletadas para:</p>
              <ul>
                <li>Fornecer, manter e melhorar nossos serviços</li>
                <li>Processar e facilitar transações e pedidos</li>
                <li>Permitir que médicos avaliem seu caso e prescrevam tratamentos apropriados</li>
                <li>Enviar comunicações relacionadas ao serviço, como atualizações de pedidos e notificações</li>
                <li>Responder às suas perguntas e solicitações de suporte</li>
                <li>Personalizar sua experiência e fornecer conteúdo e ofertas de produtos relevantes</li>
                <li>Monitorar e analisar tendências, uso e atividades relacionadas aos nossos serviços</li>
                <li>Detectar, investigar e prevenir atividades fraudulentas e não autorizadas</li>
              </ul>
              
              <h2>Compartilhamento de informações</h2>
              <p>Podemos compartilhar suas informações com:</p>
              <ul>
                <li>
                  <strong>Médicos e profissionais de saúde</strong>: para facilitar consultas online, avaliações médicas e prescrições.
                </li>
                <li>
                  <strong>Prestadores de serviços</strong>: empresas que realizam serviços em nosso nome, como processamento de pagamentos, análise de dados, entrega de e-mails, hospedagem de serviços, atendimento ao cliente e serviços logísticos.
                </li>
                <li>
                  <strong>Parceiros comerciais</strong>: para oferecer determinados produtos, serviços ou promoções.
                </li>
                <li>
                  <strong>Conformidade legal</strong>: quando exigido por lei, regulamento ou processo legal.
                </li>
              </ul>
              
              <h2>Segurança de dados</h2>
              <p>
                Implementamos medidas de segurança projetadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Essas medidas incluem criptografia de dados, firewalls, controles de acesso físico às instalações e controles de acesso a informações.
              </p>
              <p>
                No entanto, nenhum sistema é completamente seguro, e não podemos garantir a segurança absoluta de suas informações.
              </p>
              
              <h2>Seus direitos e escolhas</h2>
              <p>Dependendo da sua localização, você pode ter certos direitos em relação às suas informações pessoais, incluindo:</p>
              <ul>
                <li>Acessar, corrigir ou excluir suas informações pessoais</li>
                <li>Limitar ou objetar ao processamento de suas informações</li>
                <li>Solicitar a portabilidade de seus dados</li>
                <li>Optar por não receber e-mails de marketing</li>
              </ul>
              <p>
                Para exercer esses direitos, entre em contato conosco pelo e-mail privacy@bravohomem.com.br.
              </p>
              
              <h2>Alterações a esta política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão mais recente será publicada em nosso site com a data de "última atualização". Seu uso contínuo dos nossos serviços após a publicação de alterações constitui aceitação dessas alterações.
              </p>
              
              <h2>Contato</h2>
              <p>
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em:
              </p>
              <p>
                Bravo Homem<br />
                E-mail: contato@bravohomem.com.br<br />
                WhatsApp: (11) 99999-9999
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
