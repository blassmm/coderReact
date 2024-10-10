import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div className="container-app">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidossss"} />
    </div>
  )
}

export default App
