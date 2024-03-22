import { Resposta } from ".";

export type Questao = {
  id: number;
  fase: number;
  categoria: number;
  pergunta: string;
  respostas: Resposta[];
  imagem?: string;
  imagem_fonte?: string;
};
