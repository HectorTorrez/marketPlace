
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { AboutUs } from './pages/Home/components/AboutUs'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/faq" element={<AboutUs/>}/>

    </Routes>
  )
}

export default App
