import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Signin from "./pages/signin"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signun' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
      
      </Routes>
    </BrowserRouter>
  )
}