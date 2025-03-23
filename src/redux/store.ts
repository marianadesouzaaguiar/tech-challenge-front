import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer'; 
import postReducer from '../reducers/postReducer';   

const store = configureStore({
  reducer: {
    auth: authReducer, // 'auth' será a chave para acessar o estado de autenticação
    posts: postReducer, // 'posts' será a chave para acessar o estado dos posts
  },
  
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;