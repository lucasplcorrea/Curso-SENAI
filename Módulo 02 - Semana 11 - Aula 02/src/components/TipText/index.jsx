import "./index.css";

function TipText({ text }) {
 return (
  <p id="tip-text">
   <img src="/assets/idea.png" alt="Ícone de lâmpada" />
   {text}
  </p>
 );
}

export default TipText;
