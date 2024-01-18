import ItemCount from "./conmponents/ItemCount/ItemCount"
import ItemListContainer from "./conmponents/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./conmponents/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./conmponents/NavBar/NavBar"


function App() {


  return (
    <>
      
        <NavBar />
        <ItemListContainer greeting={'productos'} />
          <ItemDetailContainer />
          <ItemCount />
        
    </>
  )
}

export default App
