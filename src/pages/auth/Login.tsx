
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Login = () => {
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
              <CardTitle className="text-2xl">Entrar</CardTitle>
              <CardDescription>
                Digite seu e-mail e senha para acessar sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Senha</Label>
                  <Link to="/cliente/recuperar-senha" className="text-sm text-bravo-blue hover:underline">
                    Esqueceu a senha?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full">Entrar</Button>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-center w-full text-gray-600">
                Não tem uma conta?{" "}
                <Link to="/cliente/registro" className="text-bravo-blue hover:underline font-medium">
                  Criar conta
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

export default Login;
