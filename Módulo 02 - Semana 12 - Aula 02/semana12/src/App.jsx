import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom"
import {UsuariosContextProvider} from "./context/UsuariosContext"

function App(){
  return (
    <UsuariosContextProvider>
      <Navbar />
      <Outlet />
      <footer>
        Teste Footer
      </footer>
    </UsuariosContextProvider>
  )
}

export default App;