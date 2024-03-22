import { useState } from "react";
import { JogoContext } from "./JogoContext";
import { data } from "../../data/static-data";
import { Questao } from "../../models";

export const JogoProvider = ({ children }: { children: JSX.Element }) => {
  const [faseAtual, setFaseAtual] = useState(1);
  const [categoriaAtual, setCategoriaAtual] = useState(1);
  const [questoesSorteadas, setQuestoesSorteadas] = useState<Questao[]>([]);

  const addQuestao = (questao: Questao): void => {
    setQuestoesSorteadas([...questoesSorteadas, questao]);
  };

  const mudarCategoria = (): void => {
    if (categoriaAtual == 4) {
      setCategoriaAtual(1);
      setFaseAtual(faseAtual + 1);
    } else {
      setCategoriaAtual(categoriaAtual + 1);
    }
  };
  return (
    <JogoContext.Provider
      value={{
        addQuestao,
        questoesSorteadas,
        faseAtual,
        categoriaAtual,
      }}
    >
      {children}
    </JogoContext.Provider>
  );
};
