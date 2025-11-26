//import Login from "./components/props/Login.jsx"
//import Login from "./components/state/Login.jsx"
import Login from "./components/CSS/Login.jsx"     // (1) Importa a versão do componente Login com estilização CSS

function App() {                                   // (2) Define o componente principal da aplicação

  return (                                         // (3) Estrutura da aplicação
    <>
     <Login />                                     // (4) Renderiza o componente Login no corpo da aplicação
    </>
  )
}

export default App                                 // (5) Exporta o componente para ser usado pelo main.jsx
