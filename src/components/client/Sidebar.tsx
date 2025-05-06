
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  Clock,
  User,
  MessageSquare,
  LogOut
} from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    icon: Home,
    href: '/cliente/dashboard'
  },
  {
    label: 'Minhas Prescrições',
    icon: FileText,
    href: '/cliente/prescricoes'
  },
  {
    label: 'Histórico',
    icon: Clock,
    href: '/cliente/historico'
  },
  {
    label: 'Meu Perfil',
    icon: User,
    href: '/cliente/perfil'
  },
  {
    label: 'Suporte',
    icon: MessageSquare,
    href: '/cliente/suporte'
  }
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white border-r border-gray-200 w-64 flex-shrink-0 hidden md:block">
      <div className="p-6">
        <Link to="/" className="font-montserrat font-bold text-xl text-bravo-blue">
          Bravo Homem
        </Link>
      </div>
      
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            
            return (
              <li key={index}>
                <Link 
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-bravo-beige text-bravo-blue font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-bravo-blue' : 'text-gray-500'}`} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200">
        <button className="flex items-center text-gray-700 px-4 py-3 w-full hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut className="h-5 w-5 mr-3 text-gray-500" />
          Sair
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
