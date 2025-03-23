import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>(); // Obtém o ID da URL
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!postId) {
      setError("Post não encontrado.");
      setLoading(false);
      return;
    }

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost({
          id: response.data.id.toString(),
          title: response.data.title,
          content: response.data.body,
          author: "Autor desconhecido", // A API de exemplo não fornece um autor
        });
      })
      .catch(() => setError("Erro ao carregar o post."))
      .finally(() => setLoading(false));
  }, [postId]);

  if (loading) return <p className="text-center text-blue-500">Carregando post...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!post) return <p className="text-center text-gray-500">Post não encontrado.</p>;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
      <hr className="my-2 border-gray-300" />
      <p className="mt-2 text-gray-700 leading-relaxed">{post.content}</p>
      <p className="mt-4 text-sm text-gray-500">✍️ Autor: {post.author}</p>
    </div>
  );
};

export default PostDetail;