import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../pages/HomePage";
import axios from "axios";

jest.mock("axios"); // Mockando axios

describe("HomePage", () => {
  it("deve exibir o spinner enquanto carrega os posts", () => {
    render(<HomePage />);
    
    expect(screen.getByRole("status")).toBeInTheDocument(); // Verifica se o spinner está na tela
  });

  it("deve renderizar os posts corretamente após o carregamento", async () => {
    const mockPosts = [
      { id: "1", title: "Post 1", body: "Conteúdo 1" },
      { id: "2", title: "Post 2", body: "Conteúdo 2" },
    ];

    (axios.get as jest.Mock).mockResolvedValue({ data: mockPosts });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText("Post 1")).toBeInTheDocument();
      expect(screen.getByText("Post 2")).toBeInTheDocument();
    });
  });

  it("deve exibir mensagem de erro se a API falhar", async () => {
    (axios.get as jest.Mock).mockRejectedValue(new Error("Erro na API"));

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Erro ao carregar os posts/)).toBeInTheDocument();
    });
  });
});
