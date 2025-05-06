
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="container-custom flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <h1 className="font-montserrat font-bold text-3xl text-bravo-blue">Bravo Homem</h1>
            </Link>
          </div>
          
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Criar conta</CardTitle>
              <CardDescription>
                Preencha seus dados para criar uma nova conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-confirm">Confirmar senha</Label>
                  <Input id="password-confirm" type="password" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Concordo com os{" "}
                  <Link to="/termos" className="text-bravo-blue hover:underline">
                    termos de uso
                  </Link>{" "}
                  e{" "}
                  <Link to="/politica-de-privacidade" className="text-bravo-blue hover:underline">
                    política de privacidade
                  </Link>
                </label>
              </div>
              <Button className="w-full">Criar conta</Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-center w-full text-gray-600">
                Já tem uma conta?{" "}
                <Link to="/cliente/login" className="text-bravo-blue hover:underline font-medium">
                  Entrar
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <footer className="py-6 border-t border-gray-200">
        <div className="container-custom text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Bravo Homem. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link to="/termos" className="hover:text-bravo-blue">Termos</Link>
            <Link to="/politica-de-privacidade" className="hover:text-bravo-blue">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Register;
