import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Information } from "./Information"
import { MenuButtonChSh } from "./MenuButtonChSh"
import { Characteristics } from "./Characteristics"

export const CharacterSheet = () => {
    const location = useLocation()
    const user = location.state.user
    const [character, setCharacter] = useState(location.state.character)
    const [edit, setEdit] = useState(false)

    return (
        <div class="characterSheet">
            <div class="flex flex-column flex-wrap">
                <div className="flex flex-row">
                    <div class="flex bg-blue-500 ">
                        <MenuButtonChSh user={user} edit={edit} setEdit={setEdit} character={character} setCharacter={setCharacter} />
                    </div>
                    <div className="flex flex-column bg-red-500 flex-grow-1">
                        <Information edit={edit} character={character} setCharacter={setCharacter} />
                    </div>
                </div>
                <div className="flex ">
                    <Characteristics />
                </div>
            </div>
        </div>


    )
}