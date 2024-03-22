import { Link, Outlet } from "react-router-dom";
import "./App.css";
export default function Template() {
  return (
    <div className="page">
      <header className="menu">
        <img src="/lupa.png" alt="banner" id="img1" />
        <ul>
          <li className="home">
            <Link to={"/"}>Página Inicial</Link>
          </li>
          <li>
            <Link to={"animais"}>Animais Peçonhentos</Link>
            <div className="submenu1">
              <ul>
                <li>
                  <Link to={"serpentes"}>Serpentes</Link>
                </li>
                <li>
                  <Link to={"qualicerados"}>Quelicerados</Link>
                </li>
                <li>
                  <Link to={"himenopteros"}>Himenópteros</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"jogo"}>Jogo</Link>
          </li>
          <li>
            <Link to={"sobre"}>Sobre</Link>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer id="rod">
        <b>Animais Peçonhentos </b>
        <h4>
          {" "}
          Orientadores: Paulo Roberto Custódio de Oliveira e Luís Henrique Pupo
          Maron{" "}
        </h4>
        <h4>
          {" "}
          Estudantes: Isabelly Maria Medeiros de Souza e Isadora Alves Batista{" "}
        </h4>
      </footer>
    </div>
  );
}
