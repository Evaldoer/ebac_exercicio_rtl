import { render, screen, fireEvent } from "@testing-library/react";
import Post from "../components/Post";

describe("Post", () => {
  test("deve adicionar dois comentários", () => {
    render(
      <Post imageUrl="https://wallpapercave.com/wp/wp7797690.jpg">
        Comentário de teste
      </Post>
    );

    const inputNome = screen.getByTestId("input-nome");
    const inputComentario = screen.getByTestId("input-comentario");
    const botaoEnviar = screen.getByTestId("botao-enviar");

    // Primeiro comentário
    fireEvent.change(inputNome, { target: { value: "João" } });
    fireEvent.change(inputComentario, { target: { value: "Muito bom!" } });
    fireEvent.click(botaoEnviar);

    // Segundo comentário
    fireEvent.change(inputNome, { target: { value: "Maria" } });
    fireEvent.change(inputComentario, { target: { value: "Adorei!" } });
    fireEvent.click(botaoEnviar);

    const lista = screen.getByTestId("lista-comentarios");
    expect(lista).toHaveTextContent("João: Muito bom!");
    expect(lista).toHaveTextContent("Maria: Adorei!");
  });
});
