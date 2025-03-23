import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Post from '../pages/PostPage';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostState = {
    posts: [], // Inicializa 'posts' como um array vazio de 'Post'
    loading: false,
    error: null,
  };

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post>) => {
      state.posts = [...state.posts, action.payload];
      state.loading = false;
      state.error = null;
    },
    // ... outros reducers relacionados a posts
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;