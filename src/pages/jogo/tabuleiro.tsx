import { useNavigate } from "react-router-dom";
import "./tabuleiro.css";

export default function Tabuleiro() {
  const navigate = useNavigate();
  function pergunta(_e: React.MouseEvent<HTMLElement, MouseEvent>) {
    navigate("pergunta");
  }
  return (
    <main className="page" onClick={pergunta}>
      <img src="/personagem.png" alt="personagem" className="personagem" />
    </main>
  );
}
