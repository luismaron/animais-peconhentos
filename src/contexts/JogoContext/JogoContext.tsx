import { createContext } from "react";
import { Questao } from "../../models";

export type JogoContextType = {
  faseAtual: number;
  categoriaAtual: number;
  questoesSorteadas: Questao[];
  addQuestao: (questao: Questao) => void;
  registarResposta: (idResposta: number) => void;
};

export const JogoContext = createContext<JogoContextType>(null!);
