import PostHeader from "../../../components/PostHeader";
import SimpleCard from "../../../components/SimpleCard";

function UncontrolledComponent() {
 return <h1>Componente não controlado</h1>;
}

function ControlledComponent() {
 return <h1>Componente controlado</h1>;
}

function ControlledVsUncontrolledComponents() {
 return (
  <div>
   <PostHeader
    title="Componentes controlados e não controlados"
    description="Descreva o recurso de forma breve"
   />

   <div id="page-content">
    <div>
     <h2 className="section-title">Componentes controlados</h2>

     <SimpleCard>
      <h2 className="caption">Definição</h2>
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
      <h2 className="caption">Definição</h2>
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
    </div>
   </div>
  </div>
 );
}

export default ControlledVsUncontrolledComponents;
