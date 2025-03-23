import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import PostList from "../components/PostList";
import styled from "styled-components";
import { TypesPost } from '../types'; // Importe o tipo Post

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  text-align: center;
  margin-top: 20px;
`;

const realPosts: TypesPost[] = [
  {
    id: 1,
    title: 'A Importância da Inteligência Artificial no Desenvolvimento de Software',
    content: 'A IA está revolucionando a maneira como desenvolvemos software, automatizando tarefas complexas e permitindo a criação de aplicativos mais inteligentes.',
    author: 'Carlos Silva',
  },
  {
    id: 2,
    title: 'Guia Completo para Iniciantes em React',
    content: 'Se você está começando com React, este guia abrangente irá ajudá-lo a entender os conceitos básicos e construir sua primeira aplicação.',
    author: 'Ana Oliveira',
  },
  {
    id: 3,
    title: 'As Melhores Práticas para Otimização de Desempenho em Aplicações Web',
    content: 'A otimização de desempenho é crucial para proporcionar uma excelente experiência ao usuário. Descubra as melhores práticas para tornar suas aplicações web mais rápidas e eficientes.',
    author: 'Mariana Souza',
  },
  {
    id: 4,
    title: 'A Evolução do JavaScript: Do ES5 ao ESNext',
    content: 'JavaScript tem evoluído rapidamente nos últimos anos, com a introdução de novos recursos e sintaxes que tornam o desenvolvimento mais produtivo e agradável.',
    author: 'Ricardo Almeida',
  },
  {
    id: 5,
    title: 'Como Construir uma API RESTful com Node.js e Express',
    content: 'Aprenda a criar uma API RESTful completa usando Node.js e Express, desde a configuração do servidor até a implementação de endpoints para manipulação de dados.',
    author: 'Fernanda Costa',
  },
  {
    id: 6,
    title: 'Introdução ao Desenvolvimento de Aplicativos Mobile com React Native',
    content: 'React Native permite criar aplicativos mobile multiplataforma usando JavaScript e React. Descubra como começar a desenvolver seus próprios aplicativos.',
    author: 'Gustavo Pereira',
  },
  {
    id: 7,
    title: 'A Importância do Teste Automatizado no Desenvolvimento de Software',
    content: 'Testes automatizados são essenciais para garantir a qualidade e a estabilidade do software. Aprenda a implementar testes eficazes em seus projetos.',
    author: 'Juliana Santos',
  },
  {
    id: 8,
    title: 'O Futuro do Desenvolvimento Web: WebAssembly e Serverless',
    content: 'WebAssembly e Serverless estão moldando o futuro do desenvolvimento web, permitindo a criação de aplicações mais rápidas e escaláveis.',
    author: 'Lucas Oliveira',
  },
];

const HomePage: React.FC = () => {
  const [posts] = useState<TypesPost[]>(realPosts);
  const [filteredPosts, setFilteredPosts] = useState<TypesPost[]>(realPosts);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading] = useState<boolean>(false); // No loading needed
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(results);
  }, [searchTerm, posts]);

  if (loading) {
    return (
      <LoadingContainer>
        <FaSpinner className="animate-spin text-3xl text-blue-500" />
      </LoadingContainer>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Container>
      <Title>Lista de Posts</Title>
      <SearchInput
        type="text"
        placeholder="Buscar post por título ou conteúdo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <PostList posts={filteredPosts} />
    </Container>
  );
};

export default HomePage;