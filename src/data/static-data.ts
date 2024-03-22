import { Questao } from "../models";

export const data: Questao[] = [
  {
    id: 1,
    fase: 1,
    categoria: 1,
    pergunta:
      "A Maria visualizou um objeto brilhante dentro de um buraco, é seguro ela colocar a mão ali?",
    respostas: [
      {
        texto: "Sim",
        correta: false,
        id: 1,
      },
      {
        texto: "Não",
        correta: true,
        id: 2,
      },
    ],
  },
  {
    id: 2,
    fase: 1,
    categoria: 1,
    pergunta:
      "Um grande zangão pousou no braço de Maria. Ela deve se preocupar com a proximidade do inseto?",
    respostas: [
      {
        texto: "Sim",
        correta: true,
        id: 3,
      },
      {
        texto: "Não",
        correta: false,
        id: 4,
      },
    ],
  },
  {
    id: 3,
    fase: 1,
    categoria: 1,
    pergunta:
      "Maria encontrou uma cobra verde durante o caminho a procura de uma saída do parque. É indicado ela avisar as autoridades de saúde quanto ao perigo desse animal?",
    respostas: [
      {
        texto: "Sim",
        correta: false,
        id: 5,
      },
      {
        texto: "Não",
        correta: true,
        id: 6,
      },
    ],
  },
  {
    id: 4,
    fase: 1,
    categoria: 1,
    pergunta: "Uma vespa veio na direção de Maria. É correto matá-la?",
    respostas: [
      {
        texto: "Sim",
        correta: false,
        id: 7,
      },
      {
        texto: "Não",
        correta: true,
        id: 8,
      },
    ],
  },
  {
    id: 5,
    fase: 1,
    categoria: 1,
    pergunta:
      "Maria ouviu um barulho semelhante a um chocalho, ela deve se preocupar?",
    respostas: [
      {
        texto: "Sim",
        correta: false,
        id: 9,
      },
      {
        texto: "Não",
        correta: true,
        id: 10,
      },
    ],
  },
  {
    id: 6,
    fase: 1,
    categoria: 2,
    pergunta:
      "Caso ocorra algum acidente com uma serpente, qual a melhor medida a ser tomada?",
    respostas: [
      {
        texto: "Fazer um torniquete no local da picada.",
        correta: false,
        id: 11,
      },
      {
        texto: "Lavar o local da picada com água e sabão.",
        correta: false,
        id: 12,
      },
      {
        texto: "Encaminhar a vítima ao posto de pronto atendimento.",
        correta: true,
        id: 13,
      },
      {
        texto: "Chupar o local da picada.",
        correta: false,
        id: 14,
      },
    ],
  },
  {
    id: 7,
    fase: 1,
    categoria: 2,
    pergunta:
      "Ao encontrar um grande enxame de abelhas. O que Maria deve fazer?",
    respostas: [
      {
        texto: "Passar longe delas",
        correta: false,
        id: 15,
      },
      {
        texto: "Pular dentro de uma lagoa.",
        correta: false,
        id: 16,
      },
      {
        texto: "Se manter imóvel para que elas não notem a sua presença.",
        correta: true,
        id: 17,
      },
      {
        texto: "Colocar fogo nas abelhas.",
        correta: false,
        id: 18,
      },
    ],
  },
  {
    id: 8,
    fase: 1,
    categoria: 2,
    pergunta:
      "Caso Maria encontre uma cobra cega, qual medida deve ser tomada?",
    respostas: [
      {
        texto: "Matar a cobra.",
        correta: false,
        id: 19,
      },
      {
        texto: "Ignorá-la.",
        correta: true,
        id: 20,
      },
      {
        texto: "Ligar para o corpo de bombeiros.",
        correta: false,
        id: 21,
      },
      {
        texto: "Passar veneno de insetos.",
        correta: false,
        id: 22,
      },
    ],
  },
  {
    id: 9,
    fase: 1,
    categoria: 2,
    pergunta: "Ao encontrar uma vespa, o que Maria deve fazer?",
    respostas: [
      {
        texto: "Brincar com ela.",
        correta: false,
        id: 23,
      },
      {
        texto: "Matá-la.",
        correta: false,
        id: 24,
      },
      {
        texto: "Passar longe, pois pode ser um animal perigoso.",
        correta: true,
        id: 25,
      },
      {
        texto: "Pular em uma lagoa próxima.",
        correta: false,
        id: 26,
      },
    ],
  },
  {
    id: 10,
    fase: 1,
    categoria: 2,
    pergunta:
      "Caso Maria encontre uma cobra coral, qual medida deve ser tomada?",
    respostas: [
      {
        texto: "Verificar se é verdadeira.",
        correta: false,
        id: 27,
      },
      {
        texto: "Se afastar.",
        correta: true,
        id: 28,
      },
      {
        texto: "Matá-la.",
        correta: false,
        id: 29,
      },
      {
        texto: "Ligar para o corpo de bombeiros.",
        correta: false,
        id: 30,
      },
    ],
  },
  {
    id: 11,
    fase: 1,
    categoria: 3,
    imagem: "/cobra verde.jpg",
    imagem_fonte:
      "http://sonhocomcobra.blogspot.com/2013/08/sonho-com-cobra-verde.html",
    pergunta:
      "Maria acaba de verificar essa serpente em um galho de árvore, será que ela apresenta algum perigo para nossa personagem?",
    respostas: [
      {
        texto: "Sim, taca-lhe pau.",
        correta: false,
        id: 31,
      },
      {
        texto: "Não, pode passar tranquila.",
        correta: true,
        id: 32,
      },
    ],
  },
  {
    id: 12,
    fase: 1,
    categoria: 3,
    imagem: "/caranguejeira.jpg",
    imagem_fonte:
      "https://animais.umcomo.com.br/artigo/como-tratar-uma-aranha-caranguejeira-8877.html",
    pergunta:
      "Maria encontrou uma aranha grande e peluda. Essa aranha é um animal peçonhento?",
    respostas: [
      {
        texto: "Sim, passe longe pois ela pode lhe atacar",
        correta: false,
        id: 33,
      },
      {
        texto: "Não, fique tranquila.",
        correta: true,
        id: 34,
      },
    ],
  },
  {
    id: 13,
    fase: 1,
    categoria: 3,
    imagem: "/cascavel1.jpg",
    imagem_fonte: "https://pt.wikipedia.org/wiki/Cascavel",
    pergunta:
      "Maria encontrou uma cobra que aparenta ser peçonhenta. Ela deve se preocupar?",
    respostas: [
      {
        texto: "Sim, pois apresenta fosseta loreal",
        correta: true,
        id: 35,
      },
      {
        texto: "Não, é uma cobra cega.",
        correta: false,
        id: 36,
      },
    ],
  },
  {
    id: 14,
    fase: 1,
    categoria: 3,
    imagem: "/libelula.jpg",
    imagem_fonte: "https://www.significados.com.br/libelula/",
    pergunta:
      "Maria encontrou uma vespa em seu percurso. Ela deve se preocupar?",
    respostas: [
      {
        texto: "Sim, pois é um animal peçonhento.",
        correta: false,
        id: 37,
      },
      {
        texto: "Não, o animal apresentado na imagem não é uma vespa.",
        correta: true,
        id: 38,
      },
    ],
  },
  {
    id: 15,
    fase: 1,
    categoria: 3,
    imagem: "/abelha.jpg",
    imagem_fonte: "https://www.cpt.com.br/artigos/abelhas-funcoes-da-rainha",
    pergunta: "Maria encontrou um zangão, ela deve se afastar?",
    respostas: [
      {
        texto: "Sim, pois isso não é um zangão, é uma abelha. ",
        correta: true,
        id: 39,
      },
      {
        texto: "Não, isso é uma abelha jataí.",
        correta: false,
        id: 40,
      },
    ],
  },
  {
    id: 16,
    fase: 1,
    categoria: 4,
    pergunta:
      "A personagem encontra trabalhadores coletando lenha. O que ela deve fazer para evitar acidentes com serpentes?",
    respostas: [
      {
        texto: "Entregar uma máscara.",
        correta: false,
        id: 41,
      },
      {
        texto: "Rádio de pilha para ouvir música.",
        correta: false,
        id: 42,
      },
      {
        texto: "luvas de couro.",
        correta: false,
        id: 43,
      },
      {
        texto: "luvas e perneiras de couro.",
        correta: true,
        id: 44,
      },
    ],
  },
  {
    id: 17,
    fase: 1,
    categoria: 4,
    pergunta:
      "Maria vai passar por um local onde se encontra um “mato” muito alto. O que ela deve fazer para se proteger?",
    respostas: [
      {
        texto: "pegar seu cobertor de proteção.",
        correta: false,
        id: 45,
      },
      {
        texto: "passar repelente para evitar picada de insetos.",
        correta: false,
        id: 46,
      },
      {
        texto: "utilizar sua perneira de couro.",
        correta: true,
        id: 47,
      },
      {
        texto:
          "colocar seu óculos de sol para se proteger contra os raios solares.",
        correta: false,
        id: 48,
      },
    ],
  },
  {
    id: 18,
    fase: 1,
    categoria: 4,
    pergunta:
      "Maria encontrou um enxame de abelhas. O que ele deva fazer que as abelhas não a ataque?",
    respostas: [
      {
        texto: "passar repelente para evitar picada de insetos.",
        correta: false,
        id: 49,
      },
      {
        texto:
          "vestir seu casaco preto para evitar a atração das abelhas por sua roupa ser colorida.",
        correta: true,
        id: 50,
      },
      {
        texto: "vestir uma capa de chuva.",
        correta: false,
        id: 51,
      },
      {
        texto:
          "abrir seu guarda-chuva na direção das abelhas com a intenção de matá-las.",
        correta: false,
        id: 52,
      },
    ],
  },
  {
    id: 19,
    fase: 1,
    categoria: 4,
    pergunta:
      "Maria encontra uma aranha enquanto estava caminhando, o que deve ser feito para que a aranha não perceba sua presença?",
    respostas: [
      {
        texto: "Utilizar repelente.",
        correta: false,
        id: 53,
      },
      {
        texto: "passe veneno na aranha com a intenção de matá la.",
        correta: false,
        id: 54,
      },
      {
        texto: "consulte o mapa e escolha o caminho contrário.",
        correta: true,
        id: 55,
      },
      {
        texto: "utilize sua capa de invisibilidade.",
        correta: false,
        id: 56,
      },
    ],
  },
  {
    id: 20,
    fase: 1,
    categoria: 4,
    pergunta:
      "Maria foi picada por uma serpente. O que ela deve fazer para não morrer?",
    respostas: [
      {
        texto: "fazer um torniquete.",
        correta: false,
        id: 57,
      },
      {
        texto: "passar álcool.",
        correta: false,
        id: 58,
      },
      {
        texto: "ligar para uma ambulância.",
        correta: true,
        id: 59,
      },
      {
        texto: "cortar o local da picada.",
        correta: false,
        id: 60,
      },
    ],
  },
];
