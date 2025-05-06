
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, ArrowLeft, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample blog post data (in a real app this would come from an API)
const blogPosts = {
  'entendendo-causas-queda-capilar-masculina': {
    title: 'Entendendo as causas da queda capilar masculina',
    image: '/placeholder.svg',
    date: '12 Jan 2023',
    author: 'Dr. Ricardo Santos',
    category: 'Queda Capilar',
    content: `
      <p class="mb-4">A queda capilar é uma preocupação comum entre os homens, afetando cerca de 70% deles em algum momento da vida. Embora muitas vezes seja considerada apenas uma questão estética, a calvície pode ter um impacto significativo na autoestima e na qualidade de vida.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Principais causas da queda capilar masculina</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">1. Fatores genéticos</h3>
      <p class="mb-4">A causa mais comum da queda capilar em homens é a alopecia androgenética, também conhecida como calvície de padrão masculino. Esta condição é hereditária e pode ser transmitida tanto pela linha materna quanto paterna.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">2. Hormônios</h3>
      <p class="mb-4">A di-hidrotestosterona (DHT), um hormônio derivado da testosterona, é o principal responsável pela miniaturização dos folículos capilares em homens geneticamente predispostos. Com o tempo, os folículos afetados produzem fios cada vez mais finos até pararem completamente.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">3. Idade</h3>
      <p class="mb-4">Com o avanço da idade, a taxa de crescimento capilar diminui naturalmente. Os folículos podem se tornar menos eficientes na produção de novos fios, levando a um afinamento gradual.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">4. Estresse</h3>
      <p class="mb-4">O estresse crônico pode causar uma condição chamada eflúvio telógeno, onde uma quantidade significativa de cabelos entra simultaneamente na fase de queda do ciclo capilar.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">5. Dieta e nutrição</h3>
      <p class="mb-4">Deficiências nutricionais, especialmente de proteínas, ferro, zinco e vitaminas B, podem contribuir para a queda e enfraquecimento dos cabelos.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Como identificar os primeiros sinais</h2>
      <p class="mb-4">Os sinais iniciais da calvície masculina geralmente incluem:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Recuo da linha frontal do cabelo, formando o padrão em "M"</li>
        <li class="mb-2">Afinamento da coroa (parte superior da cabeça)</li>
        <li class="mb-2">Aumento da quantidade de cabelos no travesseiro ou na escova</li>
        <li class="mb-2">Couro cabeludo mais visível através do cabelo</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Tratamentos disponíveis</h2>
      <p class="mb-4">Felizmente, existem tratamentos eficazes para a queda capilar masculina, especialmente quando iniciados nos estágios iniciais:</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Medicamentos</h3>
      <p class="mb-4">Finasterida e Minoxidil são os dois medicamentos mais comprovados cientificamente para tratar a calvície masculina. A finasterida age bloqueando a conversão da testosterona em DHT, enquanto o minoxidil estimula diretamente o crescimento dos folículos.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">Suplementos</h3>
      <p class="mb-4">Vitaminas específicas e suplementos podem ajudar a fornecer os nutrientes necessários para a saúde capilar, embora geralmente funcionem melhor como complemento a outros tratamentos.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusão</h2>
      <p class="mb-4">Entender as causas da sua queda capilar é o primeiro passo para um tratamento eficaz. Com as opções disponíveis hoje, é possível interromper a progressão da calvície e até mesmo recuperar parte do cabelo perdido em muitos casos.</p>
      
      <p class="mb-4">Se você está notando sinais de queda capilar, considere buscar orientação médica para determinar a causa exata e o melhor plano de tratamento personalizado para o seu caso.</p>
    `
  },
  'mitos-verdades-disfuncao-eretil': {
    title: 'Mitos e verdades sobre a disfunção erétil',
    image: '/placeholder.svg',
    date: '28 Fev 2023',
    author: 'Dr. André Oliveira',
    category: 'Disfunção Erétil',
    content: `
      <p class="mb-4">A disfunção erétil (DE) afeta milhões de homens em todo o mundo, mas ainda é um tema cercado de mitos e informações equivocadas. Neste artigo, vamos separar os fatos da ficção para ajudar a desmistificar essa condição comum.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 1: A disfunção erétil só afeta homens mais velhos</h2>
      <p class="mb-4"><strong>Verdade:</strong> Embora a prevalência aumente com a idade, homens de qualquer idade podem experimentar disfunção erétil. Estudos mostram que até 26% dos homens abaixo dos 40 anos já relataram algum grau de DE.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 2: A DE é sempre causada por baixo desejo sexual</h2>
      <p class="mb-4"><strong>Verdade:</strong> A disfunção erétil e a diminuição da libido são problemas distintos, embora possam coexistir. A DE é a incapacidade de obter ou manter uma ereção adequada para a relação sexual, enquanto o baixo desejo sexual está relacionado à falta de interesse em atividades sexuais.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 3: A DE é apenas um problema psicológico</h2>
      <p class="mb-4"><strong>Verdade:</strong> Embora fatores psicológicos como ansiedade, estresse e depressão possam causar ou contribuir para a DE, em muitos casos existem causas físicas subjacentes, como problemas vasculares, diabetes, hipertensão, obesidade ou efeitos colaterais de medicamentos.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 4: Medicamentos para DE funcionam instantaneamente</h2>
      <p class="mb-4"><strong>Verdade:</strong> Os medicamentos para DE, como inibidores da PDE-5 (sildenafil, tadalafil), não funcionam automaticamente. Eles facilitam a ereção em resposta à estimulação sexual, mas não criam uma ereção sem essa estimulação.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 5: Os medicamentos para DE são perigosos para o coração</h2>
      <p class="mb-4"><strong>Verdade:</strong> Para a maioria dos homens, os medicamentos para DE são seguros. No entanto, eles podem interagir com certos medicamentos, especialmente nitratos usados para angina, causando quedas perigosas na pressão arterial. É essencial consultar um médico antes de usar qualquer medicamento para DE.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 6: A DE não é um indicador de outros problemas de saúde</h2>
      <p class="mb-4"><strong>Verdade:</strong> A disfunção erétil pode ser um sinal de alerta para condições de saúde subjacentes, especialmente doenças cardiovasculares. Os mesmos fatores de risco para doenças cardíacas (como diabetes, hipertensão e colesterol alto) também contribuem para a DE.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Mito 7: Não há opções de tratamento além dos medicamentos orais</h2>
      <p class="mb-4"><strong>Verdade:</strong> Embora os medicamentos orais sejam eficazes para muitos homens, existem outras opções de tratamento, incluindo terapia psicológica, dispositivos a vácuo, injeções intracavernosas, supositórios uretrais e, em alguns casos, cirurgia.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusão</h2>
      <p class="mb-4">A disfunção erétil é uma condição médica legítima que pode ser tratada com sucesso na maioria dos casos. Entender os fatos sobre a DE é o primeiro passo para buscar tratamento adequado e retomar uma vida sexual saudável.</p>
      
      <p class="mb-4">Se você está enfrentando dificuldades com ereções, é importante conversar com um profissional de saúde para determinar a causa e explorar as opções de tratamento disponíveis.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // For demo purposes, hardcoded check
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container-custom py-16">
          <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
          <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
          <Link to="/blog">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Random related posts
  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, post]) => ({ slug: key, ...post }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="h-[400px] w-full relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container-custom text-white text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center text-sm">
                <span className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" /> {post.date}
                </span>
                <span className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" /> {post.author}
                </span>
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </div>
        
        <article className="container-custom py-12">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/blog">
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao blog
                </Button>
              </Link>
            </div>
          </div>
        </article>
        
        <section className="bg-gray-50 py-12">
          <div className="container-custom">
            <h3 className="text-2xl font-bold mb-8">Artigos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <Link 
                  key={index} 
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold hover:text-bravo-blue transition-colors">{relatedPost.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/tratamento/queda-capilar">
                <Button className="btn-primary">
                  Quero iniciar meu tratamento
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
