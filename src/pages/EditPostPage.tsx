import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

const EditPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Editar Post</h1>
      <PostForm postId={postId} onSuccess={() => navigate("/admin")} />
    </div>
  );
};

export default EditPostPage;