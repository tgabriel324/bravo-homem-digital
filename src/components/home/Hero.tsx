
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-bravo-beige py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bravo-black mb-6 leading-tight">
              Tratamento personalizado para queda de cabelo
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Acompanhamento médico online, produtos de qualidade entregues diretamente na sua casa, com total discrição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tratamento/queda-capilar">
                <Button className="btn-primary w-full sm:w-auto flex items-center">
                  Começar agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/#como-funciona">
                <Button variant="outline" className="btn-outline w-full sm:w-auto">
                  Como funciona
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-bravo-blue/10 rounded-full"></div>
              <img 
                src="/placeholder.svg" 
                alt="Tratamento para queda de cabelo" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
