
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import MobileSidebar from '@/components/client/MobileSidebar';
import HeaderBar from '@/components/client/HeaderBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, CheckCircle } from 'lucide-react';

const prescriptions = [
  {
    id: 1,
    title: 'Kit Completo Capilar',
    date: '10 de maio de 2023',
    doctor: 'Dr. Ricardo Martins',
    instructions: [
      'Minoxidil 5%: Aplicar 1ml na área afetada 2x ao dia',
      'Finasterida 1mg: Tomar 1 comprimido por dia',
      'Shampoo anticaspa: Aplicar 3x por semana'
    ],
    active: true
  },
  {
    id: 2,
    title: 'Finasterida 1mg',
    date: '5 de março de 2023',
    doctor: 'Dr. Ricardo Martins',
    instructions: [
      'Tomar 1 comprimido por dia, preferencialmente no mesmo horário'
    ],
    active: false
  }
];

const ClientPrescriptions = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileSidebar />
        
        <HeaderBar title="Minhas Prescrições" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="text-xl font-semibold mb-6">Prescrições médicas</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            {prescriptions.map(prescription => (
              <Card key={prescription.id} className={prescription.active ? 'border-2 border-green-500' : ''}>
                {prescription.active && (
                  <div className="bg-green-50 text-green-600 px-4 py-2 flex items-center text-sm font-medium">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Prescrição atual
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{prescription.title}</CardTitle>
                      <CardDescription>Emitida em {prescription.date}</CardDescription>
                    </div>
                    <FileText className="h-6 w-6 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-gray-500 mb-3">Médico responsável: {prescription.doctor}</p>
                  <h4 className="font-medium mb-2">Instruções de uso:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {prescription.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar PDF
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Informação importante</h3>
            <p className="text-gray-700 mb-4">
              Sempre siga todas as instruções fornecidas pelo médico e leia atentamente as orientações prescritas.
              Em caso de dúvidas ou reações adversas, entre em contato imediatamente com nosso suporte médico.
            </p>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700">
                Suporte via WhatsApp
              </Button>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientPrescriptions;
