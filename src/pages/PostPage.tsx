import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Se estiver usando React Router
import PostDetail from '../components/PostDetail';

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da URL
  const [post] = useState(null);       // Defina o tipo de 'post'

  useEffect(() => {
    // Lógica para buscar os detalhes do post do backend usando o ID
    // Exemplo:
    // fetch(`/api/posts/${id}`)
    //   .then(res => res.json())
    //   .then(data => setPost(data));
  }, [id]);

  if (!post) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      {post && <PostDetail post={post} />} 
</div>
  );
};

export default Post;