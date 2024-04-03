import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";
import TipText from "../../../components/TipText";

function SideEffects() {
 return (
  <div>
   <PostHeader
    title="Efeito colateral"
    description="Descreva o recurso brevemente"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Anotações</h2>

     <SimpleCard>
      <h2 className="second-title">
       O que podem ser as ações de um efeito colateral
      </h2>
      <ul>
       <li>Buscar dados em um servidor</li>
       <li>Ler ou gravar dados no armazenamento do navegador</li>
       <li>Alterações no documento HTML</li>
       <li>Exibir alertas ao usuário</li>
      </ul>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">Limpeza de efeitos colaterais</h2>

      <p className="mb-1">...</p>

      <p className="mb-2">...</p>

      <TipText
       text="Um exemplo de limpeza que influencia muito na performance é usar o
       AbortController (presente no fetch) para cancelar chamadas que não
       precisarão mais de um retorno"
      />
     </SimpleCard>
    </div>
    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">
       Exibir um alerta de acordo com o valor de um estado
      </h2>
      <p className="mb-2">...</p>

      <p className="mb-1">
       Se você clicar 5 vezes no botão abaixo um alerta será exibido
      </p>
      <button>Clique em mim :)</button>
     </SimpleCard>

     <SimpleCard>
      <h2 className="second-title">
       Efeito colateral que necessita de limpeza
      </h2>
      <p className="mb-2">
       Você permaneceu nessa página por <b>...</b> segundos.
      </p>
      <TipText text="Porque a ação acima precisa de limpeza???" />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default SideEffects;
