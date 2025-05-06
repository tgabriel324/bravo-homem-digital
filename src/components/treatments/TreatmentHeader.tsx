
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TreatmentHeaderProps {
  title: string;
  description: string;
  imageSrc?: string;
  route: string;
}

const TreatmentHeader = ({ title, description, imageSrc = '/placeholder.svg', route }: TreatmentHeaderProps) => {
  return (
    <section className="bg-bravo-beige py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bravo-black mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {description}
            </p>
            <Link to={route}>
              <Button className="btn-primary flex items-center">
                Começar tratamento <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-bravo-blue/10 rounded-full"></div>
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentHeader;
