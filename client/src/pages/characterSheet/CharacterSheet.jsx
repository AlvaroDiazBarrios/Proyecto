import { useLocation } from "react-router-dom"
import { useState } from "react"
import { CharacterInformation } from "./CharacterInformation"
import { MenuButtonChSh } from "./MenuButtonChSh"
import { CharacteristicsList } from "./CharacteristicsList"
import { SkillsList } from "./SkillsList"

export const CharacterSheet = () => {
    const location = useLocation()
    const user = location.state.user

    const [character, setCharacter] = useState(location.state.character)
    const [characterInfo, setCharacterInfo] = useState({
        name: location.state.character.name,
        birthPlace: location.state.character.birthPlace,
        pronouns: location.state.character.pronouns,
        occupation: location.state.character.occupation,
        residence: location.state.character.residence,
        age: location.state.character.age,
    })
    const [skills, setSkills] = useState(location.state.character.skills)
    const [characteristics, setCharacteristics] = useState(location.state.character.characteristics)

    const [edit, setEdit] = useState(false)

    return (
        <div className="characterSheet">
            <div className="flex flex-column flex-wrap" >

                <div className="flex md:flex-row flex-column m-2" >
                    <div className="flex mb-2">
                        <MenuButtonChSh user={user} edit={edit} setEdit={setEdit} characterInfo={characterInfo} characteristics={characteristics} skills={skills} characterBeforeChanges={character} setCharacterBeforeChanges={setCharacter} setCharacterInfo={setCharacterInfo} setCharacteristics={setCharacteristics} setSkills={setSkills} />
                    </div>
                    <div className="flex flex-column flex-grow-1">
                        <CharacterInformation edit={edit} characterInfo={characterInfo} setCharacterInfo={setCharacterInfo} />
                    </div>
                </div>

                <div className="m-2 " >
                    <CharacteristicsList characteristics={characteristics} edit={edit} setCharacteristics={setCharacteristics} />
                </div>

                <div className="m-2"  >
                    <SkillsList edit={edit} skills={skills} setSkills={setSkills} />
                </div>
            </div>
        </div>


    )
}