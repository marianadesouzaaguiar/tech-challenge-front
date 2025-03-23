// PostList.tsx
import React from 'react';
import styled from 'styled-components';
import { Post } from '../types';

interface PostListProps {
  posts: Post[];
}

const PostItem = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const PostContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
`;

const PostAuthor = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-top: 10px;
`;

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <PostAuthor>Autor: {post.author}</PostAuthor>
        </PostItem>
      ))}
    </div>
  );
};

export default PostList;