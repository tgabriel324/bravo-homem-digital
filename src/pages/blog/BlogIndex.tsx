
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Entendendo as causas da queda capilar masculina',
    excerpt: 'Descubra os principais fatores que contribuem para a queda de cabelo em homens e como identificar os primeiros sinais.',
    image: '/placeholder.svg',
    date: '12 Jan 2023',
    category: 'Queda Capilar',
    slug: 'entendendo-causas-queda-capilar-masculina'
  },
  {
    id: '2',
    title: 'Mitos e verdades sobre a disfunção erétil',
    excerpt: 'Separamos os fatos da ficção sobre um dos problemas de saúde masculina mais comuns e ainda cercados de tabus.',
    image: '/placeholder.svg',
    date: '28 Fev 2023',
    category: 'Disfunção Erétil',
    slug: 'mitos-verdades-disfuncao-eretil'
  },
  {
    id: '3',
    title: 'Como o estresse afeta a saúde sexual masculina',
    excerpt: 'O impacto do estresse crônico no desempenho sexual e na qualidade de vida dos homens modernos.',
    image: '/placeholder.svg',
    date: '15 Mar 2023',
    category: 'Saúde Sexual',
    slug: 'como-estresse-afeta-saude-sexual-masculina'
  },
  {
    id: '4',
    title: 'Finasterida: funcionamento, benefícios e efeitos colaterais',
    excerpt: 'Tudo o que você precisa saber sobre um dos medicamentos mais eficazes contra a queda capilar masculina.',
    image: '/placeholder.svg',
    date: '03 Abr 2023',
    category: 'Queda Capilar',
    slug: 'finasterida-funcionamento-beneficios-efeitos-colaterais'
  },
  {
    id: '5',
    title: 'Alimentação e saúde masculina: o que você precisa saber',
    excerpt: 'Como a dieta influencia diretamente na saúde hormonal, capilar e sexual dos homens.',
    image: '/placeholder.svg',
    date: '19 Mai 2023',
    category: 'Saúde Geral',
    slug: 'alimentacao-saude-masculina'
  },
  {
    id: '6',
    title: 'Inovações no tratamento da disfunção erétil',
    excerpt: 'As mais recentes descobertas e abordagens terapêuticas para melhorar a função erétil.',
    image: '/placeholder.svg',
    date: '07 Jun 2023',
    category: 'Disfunção Erétil',
    slug: 'inovacoes-tratamento-disfuncao-eretil'
  },
];

const categories = [
  'Todos',
  'Queda Capilar',
  'Disfunção Erétil',
  'Saúde Sexual',
  'Saúde Geral'
];

const BlogIndex = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-bravo-beige py-16">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-4">Blog Bravo Homem</h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Artigos, dicas e informações confiáveis sobre saúde masculina, 
              escritos por especialistas e embasados cientificamente.
            </p>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
