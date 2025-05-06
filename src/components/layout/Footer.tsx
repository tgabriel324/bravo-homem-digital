
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bravo-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-6">Bravo Homem</h3>
            <p className="text-gray-200 mb-6">
              Tratamentos modernos e discretos para saúde masculina, com acompanhamento médico especializado.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-bravo-beige transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-bravo-beige transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-bravo-beige transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tratamento/queda-capilar" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Queda Capilar
                </Link>
              </li>
              <li>
                <Link to="/tratamento/disfuncao-eretil" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Disfunção Erétil
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Termos & Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/termos" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="text-gray-200 hover:text-bravo-beige transition-colors">
                  Suporte via WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-500 pt-8">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Bravo Homem. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
