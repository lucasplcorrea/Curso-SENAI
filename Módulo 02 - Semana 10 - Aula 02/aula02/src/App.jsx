import Card from "./components/card.jsx"
import CardUsuario from "./components/CardUsuario.jsx";

function App () {

  const listaUsuarios = [
    {
    }
  ]


  return (
    <div>
      <h1>Olá Mundo</h1>
      <p>Bem vindo ao meu primeiro app React</p>
      <Card titulo="Telecurso 2000" />

      <Card subtitulo="Sei lá Meu" />
      <CardUsuario />
    </div>
  )

}

export default App;