import { Route, Routes } from "react-router-dom"
import ShopyPage from "./page/ShopyPage/ShopyPage"
import ProductPage from "./page/ProductPage/ProductPage"
import AuthPage from "./page/AuthPage/AuthPage"
import RegPage from "./page/RegPage/RegPage"




function App() {
  

  return (
    <>
    <Routes>
      <Route path={'/auth'} element ={<AuthPage/>}/>
      <Route path={'/'} element ={<RegPage/>}/>
      <Route path={'/shopy/'} element ={<ShopyPage/>}/>
      <Route path={'/shopy/:id'} element ={<ProductPage/>}/>
   </Routes>
   
    </>
  )
}

export default App
