import React from 'react';
import styled from 'styled-components';
import { TypesPost } from '../types';

interface AdminPanelProps {
  posts: TypesPost[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const PanelContainer = styled.div`
  width: 100%;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const AdminPanel: React.FC<AdminPanelProps> = ({ posts, onEdit, onDelete }) => {
  return (
    <PanelContainer>
      <PostList>
        {posts.map((post) => (
          <PostItem key={post.id}>
            <span>{post.title}</span>
            <div>
              <Button onClick={() => onEdit(post.id)}>Editar</Button>
              <Button onClick={() => onDelete(post.id)}>Excluir</Button>
            </div>
          </PostItem>
        ))}
      </PostList>
    </PanelContainer>
  );
};

export default AdminPanel;