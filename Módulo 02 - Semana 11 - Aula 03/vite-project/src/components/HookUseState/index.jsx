import { useState } from "react";
import "./index.css";

function HookUseState() {
 const [valorAleatorio, setValorAleatorio] = useState();
 const [count, setCount] = useState(0);

 return (
  <div>
   <ul>
    <li>
     <p>
      useState: Criar variáveis que causam novas visualizações da tela assim que
      houver uma alteração no seu valor
     </p>
     <button onClick={() => setValorAleatorio(Math.random())}>
      Gerar Valor Aleatório
     </button>
     <h4>{valorAleatorio}</h4>
    </li>
   </ul>

   <h4>Atualizando um estado co base no valor anterior</h4>
   <button onClick={() => setCount(c => c + 1)}>
    O valor do contador é: {count}
   </button>
  </div>
 );
}

export default HookUseState;
