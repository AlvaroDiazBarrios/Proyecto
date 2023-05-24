import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainView } from './pages/main/MainView'
import { HomePage } from './pages/welcome/HomePage'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/main' element={<MainView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
