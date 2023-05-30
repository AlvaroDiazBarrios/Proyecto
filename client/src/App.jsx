import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainView } from './pages/main/MainView'
import { HomePage } from './pages/welcome/HomePage'
import { CharacterSheet } from './pages/characterSheet/CharacterSheet'
import { NewCharacter } from './pages/newCharacter/NewCharacter'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/main' element={<MainView />} />
          <Route path='/characterSheet' element={<CharacterSheet />} />
          <Route path='/newCharacter' element={<NewCharacter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
