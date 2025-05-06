
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-bravo-beige py-12">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em contato</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Estamos à disposição para responder suas dúvidas, receber feedback ou ajudar com qualquer questão relacionada aos nossos serviços.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                      <Input 
                        type="text" 
                        id="name" 
                        placeholder="Seu nome"
                        className="input-primary"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">E-mail</label>
                      <Input 
                        type="email" 
                        id="email" 
                        placeholder="seu.email@exemplo.com"
                        className="input-primary"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium">Assunto</label>
                    <Input 
                      type="text" 
                      id="subject" 
                      placeholder="Do que se trata?"
                      className="input-primary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                    <Textarea 
                      id="message" 
                      rows={6} 
                      placeholder="Como podemos ajudar?"
                      className="input-primary resize-none"
                      required
                    ></Textarea>
                  </div>
                  <Button type="submit" className="btn-primary w-full">
                    Enviar mensagem
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Informações de contato</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-bravo-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">E-mail</h3>
                      <p className="text-gray-700">contato@bravohomem.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-bravo-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Telefone</h3>
                      <p className="text-gray-700">(11) 9999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-bravo-blue mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Endereço</h3>
                      <p className="text-gray-700">
                        Av. Paulista, 1000, 10º andar<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP 01310-100
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6 mt-8">
                    <h3 className="font-semibold text-lg mb-4">Suporte rápido via WhatsApp</h3>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700">
                        <MessageSquare className="mr-2 h-5 w-5" />
                        Falar com a Bravo no WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
