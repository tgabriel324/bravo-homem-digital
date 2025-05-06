
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import MobileSidebar from '@/components/client/MobileSidebar';
import HeaderBar from '@/components/client/HeaderBar';
import { Button } from '@/components/ui/button';
import { Eye, FileText, MessageSquare } from 'lucide-react';

const historyItems = [
  {
    id: 1,
    date: '10 de maio de 2023',
    type: 'Anamnese',
    description: 'Avaliação inicial para tratamento de queda capilar',
    status: 'Aprovada',
    statusColor: 'text-green-600 bg-green-50'
  },
  {
    id: 2,
    date: '10 de maio de 2023',
    type: 'Prescrição',
    description: 'Kit Completo Capilar',
    status: 'Ativa',
    statusColor: 'text-green-600 bg-green-50'
  },
  {
    id: 3,
    date: '12 de maio de 2023',
    type: 'Pedido',
    description: 'Kit Completo Capilar - Envio inicial',
    status: 'Entregue',
    statusColor: 'text-blue-600 bg-blue-50'
  },
  {
    id: 4,
    date: '2 de junho de 2023',
    type: 'Anamnese',
    description: 'Avaliação inicial para tratamento de disfunção erétil',
    status: 'Em análise',
    statusColor: 'text-amber-600 bg-amber-50'
  }
];

const ClientHistory = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileSidebar />
        
        <HeaderBar title="Histórico" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="text-xl font-semibold mb-6">Meu histórico de atividades</h2>
          
          <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {historyItems.map(item => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {item.type === 'Prescrição' && (
                          <Button variant="ghost" size="sm" className="text-bravo-blue hover:text-bravo-blue/70">
                            <FileText className="h-4 w-4 mr-1" /> Ver
                          </Button>
                        )}
                        {item.type === 'Anamnese' && (
                          <Button variant="ghost" size="sm" className="text-bravo-blue hover:text-bravo-blue/70">
                            <Eye className="h-4 w-4 mr-1" /> Ver
                          </Button>
                        )}
                        {item.type === 'Pedido' && (
                          <Button variant="ghost" size="sm" className="text-bravo-blue hover:text-bravo-blue/70">
                            <Eye className="h-4 w-4 mr-1" /> Detalhes
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-bravo-beige/50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Acompanhamento</h3>
            <p className="text-gray-700 mb-4">
              Manter seu médico informado sobre os resultados do tratamento é essencial para ajustes e melhores resultados. 
              Considere realizar uma nova anamnese caso perceba mudanças significativas na sua condição.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 flex-1">
                <MessageSquare className="h-4 w-4 mr-2" /> Falar com suporte
              </Button>
              <Button variant="outline" className="flex-1">
                Refazer anamnese
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientHistory;
