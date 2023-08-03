
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Register } from './pages/Register'
import { AboutUs } from './pages/Home/components/AboutUs'
import { NotFound } from './pages/NotFound/NotFound'
import { ResetPassword } from './pages/ResetPassword'
import { NewPassword } from './pages/ResetPassword/NewPassword'

function App (): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/faq" element={<AboutUs/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/change-password" element={<NewPassword/>}/>
      <Route path= "/*" element={<NotFound/>}/>
    </Routes>
  )
}

export default App
