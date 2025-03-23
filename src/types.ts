// types.ts
export interface TypesPost {
  id: number;
  title: string;
  content: string;
  author: string;
  [key: string]: any; // Adicionado para permitir outras propriedades
}