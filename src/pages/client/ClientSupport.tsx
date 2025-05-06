
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import MobileSidebar from '@/components/client/MobileSidebar';
import HeaderBar from '@/components/client/HeaderBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Mail, Phone, FileText } from 'lucide-react';

const ClientSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileSidebar />
        
        <HeaderBar title="Suporte" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <Card className="bg-bravo-beige/50 border-none">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">Como podemos ajudar?</h2>
                  <p className="text-gray-700">
                    Nossa equipe de suporte está disponível para tirar suas dúvidas e resolver problemas relacionados ao seu tratamento.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <Button className="w-full flex items-center justify-center gap-2 h-14 px-8 bg-green-600 hover:bg-green-700">
                      <MessageSquare className="h-5 w-5" />
                      Falar no WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-bravo-blue" />
                  E-mail
                </CardTitle>
                <CardDescription>Resposta em até 24h</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Envie sua dúvida para nosso e-mail de suporte.</p>
                <a href="mailto:suporte@bravohomem.com.br">
                  <Button variant="outline" className="w-full">
                    suporte@bravohomem.com.br
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-bravo-blue" />
                  Telefone
                </CardTitle>
                <CardDescription>Seg-Sex: 9h às 18h</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Fale diretamente com nossa equipe de atendimento.</p>
                <Button variant="outline" className="w-full">
                  (11) 4321-1234
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-bravo-blue" />
                  FAQ
                </CardTitle>
                <CardDescription>Perguntas frequentes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Consulte nossas respostas para as dúvidas mais comuns.</p>
                <Button variant="outline" className="w-full">
                  Ver perguntas frequentes
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-4">Sobre seu tratamento</h3>
            <p className="mb-4">
              Dúvidas específicas sobre seu tratamento? Entre em contato diretamente com nosso time de suporte 
              via WhatsApp para obter orientações e esclarecimentos médicos.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-3 text-bravo-blue">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Dúvidas sobre medicamentos</h4>
                  <p className="text-gray-600 text-sm">
                    Nossos especialistas podem esclarecer questões sobre efeitos, dosagens ou dúvidas sobre sua prescrição.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-3 text-bravo-blue">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Problemas com entrega</h4>
                  <p className="text-gray-600 text-sm">
                    Se seu pedido está atrasado ou houve algum problema com a entrega, nosso time pode te ajudar.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="mr-3 text-bravo-blue">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Mudança de plano</h4>
                  <p className="text-gray-600 text-sm">
                    Quer mudar seu plano atual ou adicionar novos produtos? Fale com nosso time de atendimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientSupport;
