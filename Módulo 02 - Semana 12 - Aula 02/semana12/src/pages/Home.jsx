import {UsuariosContext} from "../context/UsuariosContext"
import {useContext} from "react"

function Home() {

  const {usuarios} = useContext(UsuariosContext)

  return (
    <div>
      <h1>Página Home</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
          </li>
        ))}
        
        </ul>
    </div>
  );
}

export default Home;