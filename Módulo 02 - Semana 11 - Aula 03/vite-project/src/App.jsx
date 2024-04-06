import "./App.css";
import HookUseState from "./components/HookUseState";
import HookUseEffect from "./components/HookUseEffect";


function App() {
  console.log("Houve uma nova renderização");

  return (
    <>
      <h1>HOOKS</h1>
      <h2>Recursos do React: REATIVIDADE</h2>

      <HookUseState />
      <HookUseEffect />
    
    </>
  );
}

export default App;
