import { Route, Routes } from "react-router-dom"
import HomePage from "./page/HomePage/HomePage"
import ShopyPage from "./page/ShopyPage/ShopyPage"
import ProductPage from "./page/ProductPage/ProductPage"




function App() {
  

  return (
    <>
    <Routes>
      <Route path={'/'} element ={<HomePage/>}/>
      <Route path={'/shopy/'} element ={<ShopyPage/>}/>
      <Route path={'/shopy/:id'} element ={<ProductPage/>}/>
   </Routes>
   
    </>
  )
}

export default App
