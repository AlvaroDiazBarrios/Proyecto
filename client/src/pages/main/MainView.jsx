import { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from "react-router-dom"
import { CharacterList } from './CharacterList'
import { MenuButton } from './MenuButton'

export const MainView = () => {
    //Obtener Datos del usuario que le llegan desde la HomePage
    const location = useLocation()
    const user = location.state

    //Estado de la lista de personajes de ese ususario
    const [character, setCharacter] = useState([])

    //Cargamos los datos desde la api
    useEffect(() => {
        fetchCharacters()
    }, [])

    const fetchCharacters = async () => {
        try {
            const response = await axios.post('http://localhost:8800/getAllCharacters', { userId: user.userId })
            const data = response.data
            setCharacter(data)
        } catch (error) {
            console.log(error)
        }
    }

    //Página Main
    return (
        <div className="flex flex-wrap">
            <MenuButton username={user.username} />
            <CharacterList characters={character} username={user.username} />
        </div>
    )
}