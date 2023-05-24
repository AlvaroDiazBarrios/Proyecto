import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './pages/register/Register'
import { MainView } from './pages/main/MainView'
import { Login } from './pages/login/Login'
import { HomePage } from './pages/welcome/HomePage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/main' element={<MainView />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
