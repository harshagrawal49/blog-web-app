import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}