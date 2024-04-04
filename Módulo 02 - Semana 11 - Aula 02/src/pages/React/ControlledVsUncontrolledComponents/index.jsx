import { useRef } from "react";
import { useState } from "react";
import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function UncontrolledComponent() {
const inputRef = useRef();

function submitUncontrolledClass (e) {
    e.preventDefault();
    window.alert(
        `Você enviou o formulário da turma : ${inputRef?.current?.value}`);

}

return (
    <form onSubmit={(e) => submitUncontrolledClass (e)}>
        <input type="text" ref={inputRef} name="uncontrolled-class"/>
        <button type="submit">Enviar</button>
    </form>
 );
}

//Envio desontrolado
function UncontrolledFormComponent() {
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        window.alert(`Você enviou o formulário com o valor: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Enviar</button>
        </form>
    );
}

function ControlledComponent() {

    const [controlledClass, setControlledClass] = useState("")
    function submitControlledClass(e) {
        e.preventDefault()

        window.alert(`Você enviou o formulário da turma: ${controlledClass}`)
    }

 return (
    <form onSubmit={(e) => submitControlledClass(e)}>
        <input 
        type="text" 
        value={controlledClass}
        onChange={(e) => {
            setControlledClass (e.target.value);
        }}
        name="controlled-class" />
        <button type="submit">Enviar</button>
    </form>
 );
}

//Incremento Controlado
function CounterComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Contador</h2>
            <p>Contagem: {count}</p>
            <button onClick={incrementCount}>Incrementar</button>
        </div>
    );
}

function ControlledVsUncontrolledComponents() {
 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Controlados dependem da mudança de um estado, enquanto controlados não dependem"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Em React, um hook controlado é aquele em que o estado é gerenciado explicitamente pelo React, ou seja, o estado é atualizado pelo React e refletido no componente</h2>
      <span>...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>Adicione</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Componentes não controlados</h2>

     <SimpleCard>
      <h2 className="caption">Um hook não controlado é aquele em que o estado é gerenciado pelo próprio componente, sem intervenção direta do React.</h2>
      <span>...</span>
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Pontos importantes</h2>

      <ul>
       <li>...</li>
      </ul>
     </SimpleCard>
    </div>

    <div>
     <h2 className="section-title">Demonstrações práticas</h2>

     <SimpleCard>
      <h2 className="second-title">Componente não controlado</h2>
      <UncontrolledComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Componente controlado</h2>
      <ControlledComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Contador Controlado</h2>
      <CounterComponent />
     </SimpleCard>

     <SimpleCard>
      <h2 className="caption">Formulário Descontrolado</h2>
      <UncontrolledFormComponent />
     </SimpleCard>
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
