import { useLocation } from "react-router-dom"
import { MenuButton } from "../main/MenuButton"

export const CharacterSheet = () => {
    const location = useLocation()
    const username = location.state.username
    const character = location.state.character

    /*TODO:
     [x] Fetch Data
     [] Programar la interfaz 
    */

    return (
        <div className="flex flex-wrap">
            <MenuButton username={username} />
        </div>
    )
}