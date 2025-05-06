
import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type StatusType = 'active' | 'pending' | 'attention';

interface TreatmentStatusCardProps {
  status: StatusType;
  title: string;
  nextDelivery?: string;
  daysRemaining?: number;
  type: string;
}

const TreatmentStatusCard = ({ status, title, nextDelivery, daysRemaining = 0, type }: TreatmentStatusCardProps) => {
  const getStatusInfo = () => {
    switch (status) {
      case 'active':
        return {
          icon: <CheckCircle className="h-6 w-6 text-green-500" />,
          label: 'Ativo',
          color: 'bg-green-500',
          textColor: 'text-green-500',
          bgColor: 'bg-green-50',
          progressColor: 'bg-green-500'
        };
      case 'pending':
        return {
          icon: <Clock className="h-6 w-6 text-amber-500" />,
          label: 'Pendente',
          color: 'bg-amber-500',
          textColor: 'text-amber-500',
          bgColor: 'bg-amber-50',
          progressColor: 'bg-amber-500'
        };
      case 'attention':
        return {
          icon: <AlertCircle className="h-6 w-6 text-red-500" />,
          label: 'Atenção',
          color: 'bg-red-500',
          textColor: 'text-red-500',
          bgColor: 'bg-red-50',
          progressColor: 'bg-red-500'
        };
      default:
        return {
          icon: <Clock className="h-6 w-6 text-gray-500" />,
          label: 'Desconhecido',
          color: 'bg-gray-500',
          textColor: 'text-gray-500',
          bgColor: 'bg-gray-50',
          progressColor: 'bg-gray-500'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const progressValue = daysRemaining > 30 ? 100 : (daysRemaining / 30) * 100;

  return (
    <div className={`border rounded-lg overflow-hidden ${statusInfo.bgColor}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            {statusInfo.icon}
            <span className={`ml-2 font-medium ${statusInfo.textColor}`}>{statusInfo.label}</span>
          </div>
          <span className="text-sm font-medium text-gray-600">Tratamento: {type}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        {status === 'active' && (
          <>
            <div className="mb-1 flex justify-between items-center">
              <span className="text-sm text-gray-600">Próximo envio:</span>
              <span className="text-sm font-medium">{nextDelivery}</span>
            </div>
            <div className="mb-4">
              <Progress value={progressValue} className="h-2" />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-500">Hoje</span>
                <span className="text-xs font-medium">{daysRemaining} dias restantes</span>
              </div>
            </div>
          </>
        )}
        
        {status === 'pending' && (
          <p className="text-gray-700 mb-4">
            Estamos analisando sua avaliação médica. Em breve você receberá uma resposta.
          </p>
        )}
        
        {status === 'attention' && (
          <p className="text-gray-700 mb-4">
            Seu tratamento requer atenção. Por favor, faça uma nova avaliação.
          </p>
        )}
        
        <div className="flex space-x-4">
          {status === 'active' && (
            <>
              <Link to="/cliente/prescricoes" className="flex-1">
                <Button variant="outline" className="w-full">Ver prescrição</Button>
              </Link>
              <Link to="/anamnese/queda-capilar" className="flex-1">
                <Button variant="outline" className="w-full">Refazer anamnese</Button>
              </Link>
            </>
          )}
          
          {status === 'pending' && (
            <Button disabled className="w-full">Aguardando análise médica</Button>
          )}
          
          {status === 'attention' && (
            <Link to="/anamnese/queda-capilar" className="w-full">
              <Button className="w-full">Fazer nova avaliação</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentStatusCard;
