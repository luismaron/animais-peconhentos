import { JogoProvider } from "./contexts/JogoContext/JogoContextProvider";
import Home from "./pages";
import AnimaisPeconhentos from "./pages/animais-peconhentos";
import Himenopteros from "./pages/himenopteros";
import Jogo from "./pages/jogo";
import Pergunta from "./pages/jogo/pergunta";
import Tabuleiro from "./pages/jogo/tabuleiro";
import Qualicerados from "./pages/qualicerados";
import Serpentes from "./pages/serpentes";
import Sobre from "./pages/sobre";
import Template from "./pages/template";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="animais" element={<AnimaisPeconhentos />} />
        <Route path="serpentes" element={<Serpentes />} />
        <Route path="qualicerados" element={<Qualicerados />} />
        <Route path="himenopteros" element={<Himenopteros />} />
      </Route>
      <Route
        path="/jogo"
        element={
          <JogoProvider>
            <Jogo />
          </JogoProvider>
        }
      >
        <Route index element={<Tabuleiro />} />
        <Route path="pergunta" element={<Pergunta />} />
      </Route>
    </Routes>
  );
}

export default App;
