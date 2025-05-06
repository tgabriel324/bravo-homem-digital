
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, FileText, User, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const patientData = {
  id: 1,
  name: 'Carlos Oliveira',
  age: 35,
  date: '05/06/2023 15:30',
  treatmentType: 'Queda Capilar',
  status: 'Pendente',
  responses: [
    {
      section: "Dados Pessoais",
      questions: [
        { question: "Idade", answer: "35 anos" },
        { question: "Altura", answer: "1.78m" },
        { question: "Peso", answer: "82kg" }
      ]
    },
    {
      section: "Saúde Geral",
      questions: [
        { question: "Possui alguma doença crônica?", answer: "Não" },
        { question: "Faz uso regular de algum medicamento?", answer: "Não" },
        { question: "Tem alergia a algum medicamento?", answer: "Não" }
      ]
    },
    {
      section: "Histórico Capilar",
      questions: [
        { question: "Quando começou a notar a queda de cabelo?", answer: "Aproximadamente 3 anos atrás" },
        { question: "Alguém na sua família tem calvície?", answer: "Sim, meu pai e avô paterno" },
        { question: "Já fez algum tratamento para queda capilar?", answer: "Tentei usar minoxidil por conta própria por 2 meses, mas não continuei" }
      ]
    },
    {
      section: "Estilo de Vida",
      questions: [
        { question: "Fuma?", answer: "Não" },
        { question: "Consome bebidas alcoólicas?", answer: "Socialmente, 1-2 vezes por semana" },
        { question: "Pratica atividades físicas?", answer: "Sim, academia 3x por semana" }
      ]
    }
  ]
};

const PatientEvaluation = () => {
  const { id } = useParams<{ id: string }>();
  const [notes, setNotes] = useState('');
  const [prescription, setPrescription] = useState('');
  
  const handleFinishEvaluation = () => {
    // In a real app, this would send the evaluation to a backend
    alert('Avaliação finalizada com sucesso!');
    // Navigate to dashboard or perform other actions
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Link to="/medico/dashboard" className="mr-4 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold">Ficha do Paciente</h1>
          </div>
          <Badge variant="outline" className="bg-amber-50 text-amber-600 border-amber-200 flex items-center">
            <Clock className="h-4 w-4 mr-1" /> Pendente
          </Badge>
        </div>
        
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-bravo-blue text-white rounded-full flex items-center justify-center font-medium mr-3">
                    {patientData.name.charAt(0)}
                  </div>
                  <h2 className="text-xl font-bold">{patientData.name}</h2>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{patientData.age} anos</span>
                  <FileText className="h-4 w-4 mr-1" />
                  <span>Tratamento: {patientData.treatmentType}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-gray-600">Data da anamnese</div>
                <div className="font-medium">{patientData.date}</div>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="respostas">
          <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger value="respostas">Respostas da Anamnese</TabsTrigger>
            <TabsTrigger value="avaliacao">Avaliação Médica</TabsTrigger>
          </TabsList>
          
          <TabsContent value="respostas">
            <div className="space-y-6">
              {patientData.responses.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.section}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="divide-y divide-gray-200">
                      {section.questions.map((item, qIndex) => (
                        <div key={qIndex} className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="font-medium text-gray-900">{item.question}</dt>
                          <dd className="mt-1 text-gray-700 sm:col-span-2 sm:mt-0">{item.answer}</dd>
                        </div>
                      ))}
                    </dl>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="avaliacao">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Observações Médicas</CardTitle>
                  <CardDescription>
                    Adicione notas e observações sobre o caso deste paciente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Digite suas observações..." 
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Prescrição Sugerida</CardTitle>
                  <CardDescription>
                    Descreva o tratamento recomendado para este paciente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Digite a prescrição..." 
                    rows={6}
                    value={prescription}
                    onChange={(e) => setPrescription(e.target.value)}
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center justify-center" onClick={handleFinishEvaluation}>
                    <CheckCircle className="h-5 w-5 mr-2" /> Finalizar avaliação
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PatientEvaluation;
