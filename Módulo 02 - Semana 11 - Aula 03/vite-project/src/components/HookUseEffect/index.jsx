import { useEffect } from "react";
import { useState } from "react";

function HookUseEffect() {
 const [observar, setObservar] = useState(0);

 //  a ser executado em todas as renderizações
 useEffect(() => {
  console.log(
   "useEffect: nova renderização por conta da falta do segundo parâmetro"
  );
 });
 // a ser executado na primeira renderização
 useEffect(() => {
  console.log(
   "useEffect: primeira renderização porque usa somente o array vazio como segundo parâmetro"
  );
 }, []);
 // a ser executado na primeira renderização e sempre que o valor do estado observar mudar
 useEffect(() => {
  console.log(
   "useEffect: o valor do estado observar mudou (usa um array com a dependência do estado), agora é: ",
   observar
  );
 }, [observar]);

 return (
  <div>
   <h3>HookUseEffect</h3>

   <h4>Parametros</h4>

   <ul>
    <li>callback: função a ser executada</li>
    <li>
     dependecias:
     <ul>
      <li>
       se eu não passar: ele vai executar a callback toda vez que o componente
       for renderizado
      </li>
      <li>
       se eu passar um array vazio [], ele vai executar a callback assim que o
       componente for renderizado
      </li>
      <li>
       se eu passar um array com variaveis, ele vai executar a callback toda vez
       que uma dessas variaveis mudar
      </li>
     </ul>
    </li>
   </ul>

   <button onClick={() => setObservar((o) => o + 1)}>
    Alterar valor do estado para causar uma renderização
   </button>
  </div>
 );
}

export default HookUseEffect;
