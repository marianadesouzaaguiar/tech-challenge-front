import React, { useState } from "react";
import styled from "styled-components";
import { TypesPost } from '../types';

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const PostListContainer = styled.div`
  width: 100%;
`;

const PostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
`;

const PostTitle = styled.span`
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 8px 12px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;

  &.edit {
    background-color: #007bff;
    color: white;
  }

  &.delete {
    background-color: #dc3545;
    color: white;
  }
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

const AdminPostList: React.FC<{ posts: TypesPost[]; onEdit: (id: number) => void; onDelete: (id: number) => void }> = ({ posts, onEdit, onDelete }) => {
  return (
    <PostListContainer>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <div>
            <Button className="edit" onClick={() => onEdit(post.id)}>Editar</Button>
            <Button className="delete" onClick={() => onDelete(post.id)}>Excluir</Button>
          </div>
        </PostItem>
      ))}
    </PostListContainer>
  );
};

const AdminPage: React.FC = () => {
  const [posts, setPosts] = useState<TypesPost[]>(realPosts);

  const handleEdit = (id: number) => {
    console.log(`Editar post ${id}`);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container>
      <Title>Página Administrativa</Title>
      <AdminPostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default AdminPage;