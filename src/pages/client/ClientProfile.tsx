
import React from 'react';
import Sidebar from '@/components/client/Sidebar';
import MobileSidebar from '@/components/client/MobileSidebar';
import HeaderBar from '@/components/client/HeaderBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Lock } from 'lucide-react';

const ClientProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileSidebar />
        
        <HeaderBar title="Meu Perfil" />
        
        <main className="flex-1 overflow-y-auto p-6">
          <Tabs defaultValue="dados-pessoais" className="w-full">
            <TabsList className="grid w-full sm:w-auto grid-cols-3 mb-8">
              <TabsTrigger value="dados-pessoais" className="flex items-center">
                <User className="h-4 w-4 mr-2" /> Dados Pessoais
              </TabsTrigger>
              <TabsTrigger value="endereco" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> Endereço
              </TabsTrigger>
              <TabsTrigger value="senha" className="flex items-center">
                <Lock className="h-4 w-4 mr-2" /> Senha
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="dados-pessoais">
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                  <CardDescription>
                    Atualize seus dados de contato e informações pessoais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" value="João Silva" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF</Label>
                      <Input id="cpf" value="123.456.789-00" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" value="joao.silva@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" value="(11) 98765-4321" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="birth-date">Data de nascimento</Label>
                      <Input id="birth-date" type="date" value="1990-05-15" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gênero</Label>
                      <select 
                        id="gender"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-bravo-blue transition-all shadow-sm"
                      >
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                        <option value="prefer-not-to-say">Prefiro não informar</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salvar alterações</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="endereco">
              <Card>
                <CardHeader>
                  <CardTitle>Endereço</CardTitle>
                  <CardDescription>
                    Atualize seu endereço de entrega dos produtos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="street">Logradouro</Label>
                      <Input id="street" value="Rua das Flores" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="number">Número</Label>
                      <Input id="number" value="123" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="complement">Complemento</Label>
                      <Input id="complement" value="Apto 45" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="neighborhood">Bairro</Label>
                      <Input id="neighborhood" value="Centro" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Cidade</Label>
                      <Input id="city" value="São Paulo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <select 
                        id="state"
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-bravo-blue transition-all shadow-sm"
                      >
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="BA">Bahia</option>
                        <option value="RS">Rio Grande do Sul</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipcode">CEP</Label>
                      <Input id="zipcode" value="01234-567" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Salvar endereço</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="senha">
              <Card>
                <CardHeader>
                  <CardTitle>Alterar senha</CardTitle>
                  <CardDescription>
                    Mantenha sua conta segura alterando sua senha periodicamente.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Senha atual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nova senha</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar nova senha</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Alterar senha</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default ClientProfile;
