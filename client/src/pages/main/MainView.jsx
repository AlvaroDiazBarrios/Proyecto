import { MenuButton } from "./MenuButton"
import { Button } from "primereact/button"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { CharacterCard } from "./CharacterCard"


export const MainView = () => {

    const location = useLocation()
    const user = location.state
    const navigate = useNavigate()

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetchCharacters()
    }, [])

    const fetchCharacters = async () => {
        try {
            const response = await axios.post('http://localhost:8800/getAllCharacters', { userId: user.userId })
            const data = response.data
            setCharacters(data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleNewCharacter = () => {
        navigate("/newCharacter", { state: user })
    }

    return (
        <div id="principal" className="flex md:flex-row flex-column row-gap-2" >
            <div id="c-MenuButton" className="flex flex-row md:flex-column column-gap-3 row-gap-3"  >
                <MenuButton user={user} />
                <Button severity='success' className='' icon='pi pi-plus' rounded onClick={handleNewCharacter} />
            </div>
            <div id="c-CharacterCards" className="flex flex-wrap md:flex-row flex-column row-gap-3 column-gap-1 justify-content-between mx-2" style={{ width: '100%' }}>
                <CharacterCard characters={characters} user={user} />
            </div>

        </div>
    )
}