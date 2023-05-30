
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { CharacterInformation } from "../characterSheet/CharacterInformation"
import { CharacteristicsList } from "../characterSheet/CharacteristicsList"
import { SkillsList } from "../characterSheet/SkillsList"
import { ButtonNewCharacter } from './ButtonNewCharacter'

export const NewCharacter = () => {
    const location = useLocation()
    const user = location.state

    const [characterInfo, setCharacterInfo] = useState({
        name: '',
        birthPlace: '',
        pronouns: '',
        occupation: '',
        residence: '',
        age: ''
    })
    const [skills, setSkills] = useState({
        accounting: 0,
        charm: 0,
        driveAuto: 0,
        brawl: 0,
        libraryUse: 0,
        occult: 0,
        persuade: 0,
        psychology: 0,
        cthulhuMythos: 0
    })
    const [characteristics, setCharacteristics] = useState({
        str: 0,
        con: 0,
        dex: 0,
        int: 0,
        siz: 0,
        pow: 0,
        app: 0,
        edu: 0,
        hp: 0,
        mp: 0,
        luck: 0,
        sanity: 0
    })

    return (
        <div className="characterSheet">
            <div className="flex flex-column flex-wrap" >

                <div className="flex md:flex-row flex-column m-2" >
                    <div className="flex mb-2">
                        <ButtonNewCharacter characterInfo={characterInfo} skills={skills} characteristics={characteristics} user={user} />
                    </div>
                    <div className="flex flex-column flex-grow-1">
                        <CharacterInformation edit={true} characterInfo={characterInfo} setCharacterInfo={setCharacterInfo} />
                    </div>
                </div>

                <div className="m-2 " >
                    <CharacteristicsList characteristics={characteristics} edit={true} setCharacteristics={setCharacteristics} />
                </div>

                <div className="m-2"  >
                    <SkillsList edit={true} skills={skills} setSkills={setSkills} />
                </div>
            </div>
        </div>


    )
}