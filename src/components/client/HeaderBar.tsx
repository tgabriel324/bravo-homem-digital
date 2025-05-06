
import React from 'react';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderBarProps {
  title: string;
  userName?: string;
}

const HeaderBar = ({ title, userName = 'João Silva' }: HeaderBarProps) => {
  return (
    <div className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="mr-4 text-gray-600 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  2
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Notificações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="py-3 px-4 cursor-pointer">
                <div>
                  <p className="font-medium">Sua prescrição foi atualizada</p>
                  <p className="text-sm text-gray-600">Há 2 horas</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="py-3 px-4 cursor-pointer">
                <div>
                  <p className="font-medium">Reposição do seu tratamento</p>
                  <p className="text-sm text-gray-600">Está na hora de fazer seu pedido mensal</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center py-2 cursor-pointer">
                <p className="text-bravo-blue font-medium w-full">Ver todas</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center">
                <div className="w-8 h-8 bg-bravo-blue text-white rounded-full flex items-center justify-center font-medium mr-2">
                  {userName.charAt(0)}
                </div>
                <span className="text-gray-700 hidden sm:inline">{userName}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer">Meu Perfil</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Configurações</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 cursor-pointer">Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
