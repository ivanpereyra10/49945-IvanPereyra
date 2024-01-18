import ItemCount from "./conmponents/ItemCount/ItemCount"
import ItemListContainer from "./conmponents/ItemListContainer/ItemListContainer"
import NavBar from "./conmponents/NavBar/NavBar"

function App() {


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'productos'} />
      <ItemCount /> 
    </> 
  )
}

export default App
