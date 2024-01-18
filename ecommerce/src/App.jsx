import ItemCount from "./conmponents/ItemCount/ItemCount"
import ItemListContainer from "./conmponents/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./conmponents/ItemDetailContainer/ItemDetailContainer"
import NavBar from "./conmponents/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'productos'} />} />
          <Route path='/detail/:product' element={<ItemDetailContainer />} />
          <ItemCount />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
