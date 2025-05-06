
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-bravo-beige py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Termos de Uso</h1>
            <p className="text-lg text-gray-700">Última atualização: 1 de maio de 2023</p>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>
                Bem-vindo ao Bravo Homem. Estes Termos de Uso ("Termos") regem seu acesso e uso do site Bravo Homem, incluindo qualquer conteúdo, funcionalidade e serviços oferecidos através do site (coletivamente, o "Serviço").
              </p>
              <p>
                Ao usar o Serviço, você concorda com estes Termos. Por favor, leia-os cuidadosamente.
              </p>
              
              <h2>1. Elegibilidade</h2>
              <p>
                Para usar o Serviço, você deve ter pelo menos 18 anos de idade e ser capaz de formar um contrato vinculativo sob a lei aplicável. Ao usar o Serviço, você declara e garante que atende a todos os requisitos de elegibilidade.
              </p>
              
              <h2>2. Conta de Usuário</h2>
              <p>
                Para acessar certas funcionalidades do Serviço, você precisará criar uma conta. Você é responsável por manter a confidencialidade de sua senha e por todas as atividades que ocorrem sob sua conta. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta.
              </p>
              
              <h2>3. Consulta Médica e Serviços de Tratamento</h2>
              <p>
                3.1. O Serviço facilita consultas médicas online e a entrega de tratamentos prescritos. Os médicos que prestam serviços através da plataforma são profissionais independentes e não são funcionários da Bravo Homem.
              </p>
              <p>
                3.2. Você concorda em fornecer informações precisas e completas sobre sua saúde durante o processo de consulta online. Qualquer tratamento prescrito será baseado nas informações que você fornecer.
              </p>
              <p>
                3.3. Embora nossos médicos se esforcem para fornecer tratamentos adequados, nem a Bravo Homem nem os médicos garantem que um tratamento específico será eficaz para você.
              </p>
              <p>
                3.4. Você entende que as consultas online não substituem consultas presenciais e exames físicos quando estes são necessários. Se você tiver uma emergência médica, deve procurar atendimento médico de emergência imediatamente.
              </p>
              
              <h2>4. Pagamentos e Assinaturas</h2>
              <p>
                4.1. Você concorda em pagar todas as taxas e cobranças associadas ao seu uso do Serviço, conforme apresentado durante o processo de checkout.
              </p>
              <p>
                4.2. Alguns de nossos serviços são oferecidos com base em assinatura. Ao se inscrever em uma assinatura, você autoriza-nos a cobrar a taxa de assinatura no início de cada período de assinatura, até que você cancele.
              </p>
              <p>
                4.3. Você pode cancelar sua assinatura a qualquer momento através da sua conta ou entrando em contato conosco. O cancelamento entrará em vigor no final do período de faturamento atual.
              </p>
              
              <h2>5. Política de Devolução e Reembolso</h2>
              <p>
                5.1. Devido à natureza dos produtos e serviços oferecidos, não aceitamos devoluções de medicamentos ou produtos médicos por razões de segurança e regulamentação.
              </p>
              <p>
                5.2. Reembolsos podem ser considerados caso a caso, conforme determinado pela administração da Bravo Homem.
              </p>
              
              <h2>6. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo, recursos e funcionalidades disponíveis no Serviço, incluindo, mas não se limitando a, texto, gráficos, logotipos, imagens, vídeos, áudios e software, são propriedade da Bravo Homem ou de seus licenciadores e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
              </p>
              
              <h2>7. Limitação de Responsabilidade</h2>
              <p>
                Em nenhuma circunstância a Bravo Homem, seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu acesso ou uso do Serviço.
              </p>
              
              <h2>8. Lei Aplicável</h2>
              <p>
                Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar suas disposições sobre conflitos de leis.
              </p>
              
              <h2>9. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos a qualquer momento. Publicaremos os Termos revisados no Serviço com uma data de "última atualização". Seu uso contínuo do Serviço após a publicação de Termos revisados significa que você aceita e concorda com as alterações.
              </p>
              
              <h2>10. Contato</h2>
              <p>
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em termos@bravohomem.com.br.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
