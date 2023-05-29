import { useLocation } from "react-router-dom"
import { useState } from "react"
import { Information } from "./Information"
import { MenuButtonChSh } from "./MenuButtonChSh"
import { CharacteristicsList } from "./CharacteristicsList"

export const CharacterSheet = () => {
    const location = useLocation()
    const user = location.state.user
    const [character, setCharacter] = useState(location.state.character)
    const [skills, setSkills] = useState(location.state.character.skills)
    const [characteristics, setCharacteristics] = useState(location.state.character.characteristics)
    const [edit, setEdit] = useState(false)

    return (
        <div class="characterSheet">
            <div class="flex flex-column flex-wrap">
                <div className="flex flex-row m-2">
                    <div className="flex ">
                        <MenuButtonChSh user={user} edit={edit} setEdit={setEdit} character={character} setCharacter={setCharacter} characteristics={characteristics} />
                    </div>
                    <div className="flex flex-column flex-grow-1">
                        <Information edit={edit} character={character} setCharacter={setCharacter} />
                    </div>
                </div>
                <div className="flex flex-column m-2 ">
                    <CharacteristicsList characteristics={characteristics} edit={edit} setCharacter={setCharacteristics} />
                </div>
            </div>
        </div>


    )
}