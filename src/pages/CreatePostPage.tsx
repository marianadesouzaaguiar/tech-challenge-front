import { useNavigate } from "react-router-dom";
import React from "react";
import PostForm from "../components/PostForm";


const CreatePostPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Criar Novo Post</h1>
      <PostForm onSuccess={() => navigate("/")} />
    </div>
  );
};


export default CreatePostPage;
