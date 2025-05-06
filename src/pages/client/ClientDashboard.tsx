
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import MobileSidebar from '@/components/client/MobileSidebar';
import HeaderBar from '@/components/client/HeaderBar';
import TreatmentStatusCard from '@/components/client/TreatmentStatusCard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, MessageSquare } from 'lucide-react';

const ClientDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileSidebar />
        
        <HeaderBar title="Dashboard" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6">Meus tratamentos</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TreatmentStatusCard
                status="active"
                title="Kit Completo Capilar"
                nextDelivery="15 de junho de 2023"
                daysRemaining={12}
                type="Queda Capilar"
              />
              <TreatmentStatusCard
                status="pending"
                title="Avaliação para Disfunção Erétil"
                type="Disfunção Erétil"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <FileText className="h-8 w-8 mb-4 text-bravo-blue" />
                <h3 className="text-lg font-bold mb-2">Prescrições</h3>
                <p className="text-gray-600 mb-4">Acesse suas prescrições médicas e recomendações de uso.</p>
                <Link to="/cliente/prescricoes">
                  <Button variant="outline" className="w-full flex items-center justify-between">
                    Ver prescrições <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 mb-4 text-bravo-blue" />
                <h3 className="text-lg font-bold mb-2">Histórico</h3>
                <p className="text-gray-600 mb-4">Acompanhe seu histórico de avaliações e tratamentos.</p>
                <Link to="/cliente/historico">
                  <Button variant="outline" className="w-full flex items-center justify-between">
                    Ver histórico <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <MessageSquare className="h-8 w-8 mb-4 text-bravo-blue" />
                <h3 className="text-lg font-bold mb-2">Suporte</h3>
                <p className="text-gray-600 mb-4">Precisa de ajuda? Entre em contato com nosso suporte.</p>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full flex items-center justify-between bg-green-600 hover:bg-green-700">
                    WhatsApp da Bravo <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-bravo-beige/50 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-2">Dica de saúde</h3>
            <p className="text-gray-700 mb-4">
              Manter uma alimentação equilibrada e praticar exercícios físicos regularmente pode ajudar significativamente na saúde capilar e sexual masculina.
            </p>
            <Link to="/blog">
              <Button variant="outline" className="bg-white">
                Ver mais dicas no blog
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ClientDashboard;
