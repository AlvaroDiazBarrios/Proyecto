import { useLocation } from "react-router-dom"
import { MenuButton } from "../main/MenuButton"

export const CharacterSheet = () => {
    const location = useLocation()
    const username = location.state.username
    const characterId = location.state.characterId

    /*TODO:
        fetchData() y revisar si me lo puedo traer ya de golpe que creo que sí
    */

    return (
        <div className="flex flex-wrap">
            <MenuButton username={username} />
        </div>
    )
}