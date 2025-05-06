
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Eye, User, FileText, Clock, Settings, LogOut, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

// Sample patient data
const patients = [
  {
    id: 1,
    name: 'Carlos Oliveira',
    age: 35,
    date: '05/06/2023 15:30',
    treatmentType: 'Queda Capilar',
    status: 'Pendente'
  },
  {
    id: 2,
    name: 'Rafael Souza',
    age: 42,
    date: '05/06/2023 14:15',
    treatmentType: 'Disfunção Erétil',
    status: 'Pendente'
  },
  {
    id: 3,
    name: 'Lucas Martins',
    age: 28,
    date: '05/06/2023 11:45',
    treatmentType: 'Queda Capilar',
    status: 'Pendente'
  },
  {
    id: 4,
    name: 'Alexandre Santos',
    age: 39,
    date: '05/06/2023 09:20',
    treatmentType: 'Disfunção Erétil',
    status: 'Pendente'
  }
];

const DoctorDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.treatmentType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar for desktop */}
      <div className={`bg-white border-r border-gray-200 w-64 flex-shrink-0 fixed inset-y-0 left-0 z-20 transition-transform duration-300 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="p-6">
          <Link to="/" className="font-montserrat font-bold text-xl text-bravo-blue">
            Bravo Homem
          </Link>
        </div>
        
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <Link to="/medico/dashboard" className="flex items-center px-4 py-3 rounded-lg bg-bravo-beige text-bravo-blue font-medium">
                <User className="h-5 w-5 mr-3 text-bravo-blue" />
                Fila de Avaliação
              </Link>
            </li>
            <li>
              <Link to="/medico/histor
              ico" className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 mr-3 text-gray-500" />
                Histórico
              </Link>
            </li>
            <li>
              <Link to="/medico/perfil" className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                <Settings className="h-5 w-5 mr-3 text-gray-500" />
                Meu Perfil
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <button className="flex items-center text-gray-700 px-4 py-3 w-full hover:bg-gray-100 rounded-lg transition-colors">
            <LogOut className="h-5 w-5 mr-3 text-gray-500" />
            Sair
          </button>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top bar */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="text-gray-600 md:hidden mr-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <h1 className="text-xl font-bold">Fila de Avaliação</h1>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 hidden sm:inline text-gray-700">Dr. Ricardo Martins</span>
            <div className="w-8 h-8 bg-bravo-blue text-white rounded-full flex items-center justify-center font-medium">
              R
            </div>
          </div>
        </div>
        
        {/* Main content area */}
        <main className="flex-1 p-6">
          <Card className="mb-6">
            <div className="p-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Buscar paciente ou tratamento" 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <select 
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bravo-blue transition-all shadow-sm"
                    defaultValue="all"
                  >
                    <option value="all">Todos os tratamentos</option>
                    <option value="hair">Queda Capilar</option>
                    <option value="ed">Disfunção Erétil</option>
                  </select>
                  <Button variant="outline">
                    Filtrar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Pacientes aguardando avaliação</h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Idade</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Tratamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPatients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="font-medium">{patient.name}</TableCell>
                      <TableCell>{patient.age} anos</TableCell>
                      <TableCell>{patient.date}</TableCell>
                      <TableCell>{patient.treatmentType}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200">
                          {patient.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Link to={`/medico/pacientes/${patient.id}`}>
                          <Button size="sm" className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" /> Avaliar
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredPatients.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        Nenhum paciente encontrado
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
