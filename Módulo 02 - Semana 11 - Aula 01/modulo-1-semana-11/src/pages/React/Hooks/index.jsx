//CHANGE FOR COMMIT ONLY
import { useEffect, useState } from "react";
import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function Hooks() {
 const [randomPass, setRandomPass] = useState(null);
 const [secondsInThePage, setSecondsInThePage] = useState(0);

 function generatePassword(length) {
  const charset =
   "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let pass = "";

  for (let i = 0; i < length; i++) {
   pass += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  setRandomPass(pass);
 }

 useEffect(() => {
  const timeout = setTimeout(() => {
   setSecondsInThePage(secondsInThePage + 1);
  }, 1000);

  return () => {
   clearTimeout(timeout);
  };
 }, [secondsInThePage]);

 return (
  <div>
   <PostHeader title="Hooks" description="Descreva o recurso de forma breve" />

   <div id="page-content">
    <div>
     <h2 className="section-title">Built-in React Hooks</h2>

     <SimpleCard>
      <span>
       Built-in (Tradução: Integrados) React Hooks é como são chamados os Hooks
       disponibilizados pela equipe do React ou seja, estão integrados a lib do
       React.
      </span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de estado</h2>

      <h2 className="caption">O que é estado</h2>
      <span className="mb-2">
       A grosso modo, os estados são a memória do componente. Utilizamos estados
       para definir as informações exibidas ao usuário que precisam ser
       atualizadas na tela assim que forem atualizadas na memória do navegador
       (no código).
      </span>

      <h2 className="caption">Pra que servem os Hooks de estado</h2>
      <span className="mb-2">
       Os hooks de estado permitem que você gerencie os estados de um
       componente. Ou seja, são eles que você usa para que um componente
       “lembre” informações. Por exemplo, um componente de contador pode usar um
       estado para armazenar o valor atual do contador, sendo assim sempre que o
       valor do contador for alterado (pra adicionar +1, por exemplo) a
       alteração será exibida na tela.
      </span>

      <span>
       <b>useState</b> declara uma variável de estado que você pode atualizar
       diretamente.
      </span>
      <code className="mb-2">const [index, setIndex] = useState(0)</code>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de efeito</h2>

      <span className="mb-2">
       Permitem lidar de maneira simples com efeitos colaterais durante o ciclo
       de vida do componente;
      </span>

      <code className="mb-2">useEffect(callback, dependências);</code>

      <h2 className="caption">Parâmetros</h2>
      <ul>
       <li>
        <b>callback</b>: função a ser executada quando o valor de uma
        dependência for alterado
       </li>
       <li>
        <b>dependências</b>: um array de valores a ser observado, se o array for
        vazio o useEffect será executado na primeira renderização do componente,
        já se você não passar esse propriedade o useEffect será executado a cada
        renderização do componente.
       </li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hooks de referência</h2>

      <h2 className="caption">Pra que servem os Hooks de referência</h2>
      <span className="mb-2">...</span>

      <span className="mb-2">
       <b>useRef</b> ... descreva ...
      </span>

      <p>Para criar a referência:</p>
      <code className="mb-2">const inputRef = useRef(null);</code>

      <p>Para usar a referência:</p>
      <code className="mb-2">
       &lt;input type=&quot;text&quot; ref=&#123;inputRef&#125; /&gt;
      </code>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Outros Hooks</h2>

      <ul>
       <li>
        <b>Hooks de contexto</b>: Para lidar com informações de outros
        componentes.
       </li>
       <li>
        <b>Hooks de desempenho</b>: Para evitar que a aplicação realize
        trabalhos desnecessários.
       </li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Hooks customizados</h2>

     <SimpleCard>
      <h2 className="second-title">Conceito</h2>
      <span className="mb-1">...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Características</h2>

      <ul>
       <li>...</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Criando um gerador de senhas</h2>
      <p className="mb-2">
       O botão abaixo vai gerar uma senha aleatória sempre que você clicar nele.
       Perceba que o componente influenciado pelo valor do estado é atualizado
       sempre que o valor muda.
      </p>

      <button className="mb-1" onClick={() => generatePassword(8)}>
       Gerar senha
      </button>

      <p className="caption">Senha gerada: {randomPass}</p>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">useEffect</h2>
      <p className="mb-1">
       Graças ao useEffect, assim que você entrou na página o contador abaixo
       foi iniciado e indica que você permaneceu nessa página por{" "}
       <b>{secondsInThePage}</b> segundos
      </p>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Hook customizados</h2>
      <p className="mb-1">
       Lista de usuários carregada da API JSON Placeholder assim que você entrou
       nesta página usando um hook customizado criado para abstrair a lógica de
       busca de dados.
      </p>

      {/* {isLoading && <p>Carregando usuários...</p>}

      {!isLoading && (
       <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
       </ul>
      )} */}
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default Hooks;
