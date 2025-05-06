
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-montserrat font-bold text-2xl text-bravo-blue">
            Bravo Homem
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-bravo-blue transition-colors">
                Tratamentos <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/tratamento/queda-capilar" className="block px-4 py-3 text-sm text-gray-700 hover:bg-bravo-beige hover:text-bravo-blue transition-colors">
                  Queda Capilar
                </Link>
                <Link to="/tratamento/disfuncao-eretil" className="block px-4 py-3 text-sm text-gray-700 hover:bg-bravo-beige hover:text-bravo-blue transition-colors">
                  Disfunção Erétil
                </Link>
              </div>
            </div>
            <Link to="/blog" className="text-gray-700 hover:text-bravo-blue transition-colors">
              Blog
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-bravo-blue transition-colors">
              Contato
            </Link>
            <Link to="/cliente/login">
              <Button variant="outline" className="rounded-full">
                Entrar
              </Button>
            </Link>
            <Link to="/tratamento/queda-capilar">
              <Button className="rounded-full bg-bravo-blue hover:bg-bravo-blue/90">
                Começar agora
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 py-4">
              <div className="border-b border-gray-200 pb-2">
                <button 
                  className="flex items-center justify-between w-full text-left text-gray-700 py-2"
                  onClick={() => document.getElementById('tratamentos-dropdown')?.classList.toggle('hidden')}
                >
                  <span>Tratamentos</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div id="tratamentos-dropdown" className="hidden pl-4 mt-2 space-y-2">
                  <Link to="/tratamento/queda-capilar" className="block py-2 text-sm text-gray-700 hover:text-bravo-blue" onClick={toggleMenu}>
                    Queda Capilar
                  </Link>
                  <Link to="/tratamento/disfuncao-eretil" className="block py-2 text-sm text-gray-700 hover:text-bravo-blue" onClick={toggleMenu}>
                    Disfunção Erétil
                  </Link>
                </div>
              </div>
              <Link to="/blog" className="text-gray-700 hover:text-bravo-blue py-2" onClick={toggleMenu}>
                Blog
              </Link>
              <Link to="/contato" className="text-gray-700 hover:text-bravo-blue py-2" onClick={toggleMenu}>
                Contato
              </Link>
              <Link to="/cliente/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full rounded-full">
                  Entrar
                </Button>
              </Link>
              <Link to="/tratamento/queda-capilar" onClick={toggleMenu}>
                <Button className="w-full rounded-full bg-bravo-blue hover:bg-bravo-blue/90">
                  Começar agora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
