import { useState } from "react";

const PostComments = () => {
  const [nome, setNome] = useState("");
  const [comentario, setComentario] = useState("");
  const [comentarios, setComentarios] = useState<string[]>([]);

  const adicionarComentario = () => {
    if (nome && comentario) {
      setComentarios([...comentarios, `${nome}: ${comentario}`]);
      setNome("");
      setComentario("");
    }
  };

  return (
    <div data-testid="lista-comentarios">
      {comentarios.map((coment, index) => (
        <p key={index} data-testid="comentario">
          {coment}
        </p>
      ))}

      <div className="post-comments-form">
        <input
          type="text"
          placeholder="Seu nome"
          data-testid="input-nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <textarea
          placeholder="Deixe seu comentário"
          data-testid="input-comentario"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />
        <button data-testid="botao-enviar" onClick={adicionarComentario}>
          Comentar
        </button>
      </div>
    </div>
  );
};

export default PostComments;
