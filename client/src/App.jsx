import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register } from './pages/register/Register'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register />} />
          {/*<Route path='/add' element={<Add />} />
          <Route path='/update/:id' element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
