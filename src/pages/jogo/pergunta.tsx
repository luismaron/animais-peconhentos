import "./pergunta.css";
import { data } from "../../data/static-data";

export default function Pergunta() {
  const 
  function onHandleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function sortearQuestao(){
    
  }
  return (
    <main id="questao">
      <form onSubmit={onHandleSubmit}>
        {data.map((questao) => (
          <div key={questao.id}>
            {questao.pergunta}
            <div className="questoes">
              {questao.imagem && (
                <div className="figuras">
                  <img src={questao.imagem} alt="imagem questão" />
                </div>
              )}
              <div className="respostas">
                <ul>
                  {questao.respostas.map((resposta) => (
                    <li key={resposta.id}>
                      <input
                        type="radio"
                        name="resposta"
                        value={resposta.texto}
                        id={`resposta${resposta.id}`}
                      />
                      <label htmlFor={`resposta${resposta.id}`}>
                        {resposta.texto}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <button className="myButton"> CONFIRMAR RESPOSTA </button>
      </form>
    </main>
  );
}
