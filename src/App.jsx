import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ContadorContainer from './components/Ejemplos/ContadorContainer'

function App() {

  return (
    <div className="container-app">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a mi ecommerce!"} />
      <ContadorContainer />
    </div>
  )
}

export default App

