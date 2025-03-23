📌 Tech Challenge - Blogging Platform
Este projeto é uma aplicação web desenvolvida em React para uma plataforma de blogs, onde professores podem criar, editar e gerenciar postagens, enquanto alunos podem visualizar e interagir com os conteúdos.

🚀 Tecnologias Utilizadas
React (com Hooks e Componentes Funcionais)

Styled Components 

Redux (para gerenciamento de estado)

Axios (para integração com a API REST)

React Router (para navegação entre páginas)

Autenticação e Autorização (para controle de acesso)

🎯 Funcionalidades
📄 Página Principal (Lista de Posts)
✔️ Exibe uma lista de posts disponíveis.
✔️ Mostra título, autor e descrição curta.
✔️ Campo de busca para filtrar posts.

📖 Página de Leitura de Post
✔️ Exibe o conteúdo completo de um post selecionado.
✔️ (Opcional) Permite comentários nos posts.

📝 Página de Criação de Postagens
✔️ Formulário para professores criarem posts.
✔️ Campos para título, conteúdo e autor.
✔️ Botão para enviar o post ao servidor.

✏️ Página de Edição de Postagens
✔️ Permite que professores editem postagens existentes.
✔️ Carrega os dados atuais do post.
✔️ Botão para salvar alterações.

🔧 Página Administrativa
✔️ Lista todas as postagens com opções para editar e excluir.
✔️ Botões para gerenciar postagens.

🔐 Autenticação e Autorização
✔️ Login para professores.
✔️ Somente usuários autenticados podem criar, editar e administrar posts.

🛠 Configuração do Projeto
📌 Pré-requisitos
Node.js >= 16

Docker (para execução opcional com container)

🚀 Passos para rodar localmente
1️⃣ Clone o repositório:


git clone https://github.com/marianadesouzaaguiar/tech-challenge-front
cd seu-repositorio
2️⃣ Instale as dependências:

npm install
# ou
yarn install
3️⃣ Inicie o servidor de desenvolvimento:

npm start
# ou
yarn start
4️⃣ O projeto estará disponível em:

http://localhost:5173
🔗 Integração com Back-End
A aplicação consome a API REST existente para:

Buscar, criar, editar e excluir postagens.

Gerenciar autenticação de professores.

Exemplo de chamada à API com Axios:

import axios from "axios";

const API_URL = "https://sua-api.com/posts";

export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
📂 Estrutura do Projeto

📦 src
 ┣ 📂 components
┃ ┗ 📜AdminPanel.tsx
 ┃┗ 📜login.tsx
 ┗ 📜Navbar.tsx
 ┣ 📜 PostDetail.tsx
 ┃ ┣ 📜 PostForm.tsx
┗ 📜 PostList.tsx
┗ 📜 ProtectedRoute.tsx
 ┣ 📂 pages
  ┗ 📜LoginPage.tsx
 ┃ ┣ 📜 HomePage.tsx
 ┃ ┣ 📜 PostPage.tsx
 ┃ ┣ 📜 CreatePostPage.tsx
 ┃ ┣ 📜 EditPostPage.tsx
 ┃ ┗ 📜 AdminPage.tsx
 ┣ 📂 services
 ┃ ┗ 📜 api.ts
 ┣ 📂 styles
 ┃ ┗ 📜 GlobalStyles.ts
 ┣ 📜 App.tsx
 ┣ 📜 main.tsx
  ┣ 📂 routes
 ┗ 📜 routes.tsx
🛠 Deploy e CI/CD
Docker: O projeto pode ser containerizado com Docker.

CI/CD: Configuração de pipelines para automação de build e deploy.

Desafios: Selecionar qual servico seria utilizado para deploy da API