import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Estilização do formulário
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
    min-height: 100px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    font-size: 0.9rem;
  }
`;

interface PostFormProps {
  postId?: string;
  onSuccess: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ postId, onSuccess }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("Professor(a)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (postId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
          setTitle(response.data.title);
          setContent(response.data.content);
          setAuthor(response.data.author || "Professor(a)");
        })
        .catch((err) => {
          setError("Erro ao carregar o post.");
        });
    }
  }, [postId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !author) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setLoading(true);
    setError(null);

    const postData = { title, content, author };

    try {
      if (postId) {
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, postData);
      } else {
        await axios.post("https://jsonplaceholder.typicode.com/posts", postData);
      }

      onSuccess();
    } catch (err) {
      setError("Erro ao salvar o post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>{postId ? "Editar Post" : "Criar Post"}</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextArea
        placeholder="Conteúdo do post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Salvando..." : postId ? "Atualizar" : "Publicar"}
      </Button>
    </FormContainer>
  );
};

export default PostForm;