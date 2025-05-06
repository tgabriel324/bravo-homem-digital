
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductFeature {
  text: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  features: ProductFeature[];
  price: string;
  route: string;
}

const ProductCard = ({ id, name, description, image, features, price, route }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="h-48 overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="text-bravo-blue mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature.text}</span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-500">A partir de</div>
          <div className="text-xl font-bold text-bravo-blue">{price}</div>
        </div>
        <Link to={route} className="block">
          <Button className="w-full">Selecionar</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
