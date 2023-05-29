import { Button } from "primereact/button"
import { MenuButton } from "../main/MenuButton"
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

//TODO:
// Investigar porque no funciona el cancel con las characteristics
export const MenuButtonChSh = ({ user, edit, setEdit, character, setCharacter, skills, characteristics }) => {

    const [oldCharacter, setOldCharacter] = useState(character)
    const navigate = useNavigate()

    const handleEdit = async () => {

        if (edit) {
            try {
                const env = {
                    characterId: character.characterId,
                    name: character.name,
                    birthPlace: character.birthPlace,
                    pronouns: character.pronouns,
                    occupation: character.occupation,
                    residence: character.residence,
                    age: character.age,
                    characteristics: characteristics,
                    skills: character.skills
                }
                const response = await axios.post('http://localhost:8800/updateCharacter', env)
                const data = response.data
                setOldCharacter(env)
            } catch (err) {
                console.log(err);
            }
        }

        setEdit(!edit)
    }

    const handleCancel = () => {
        setCharacter(oldCharacter)
        setEdit(!edit)
    }

    const handleGoBack = () => {
        navigate('/main', { state: user })
    }

    return (
        <div className="flex flex-column "  >
            <MenuButton username={user.username} />
            <Button className="mt-2 ml-2" icon={edit ? 'pi pi-check' : 'pi pi-pencil'} rounded onClick={handleEdit} />
            <Button className={edit ? "mt-2 ml-2" : "hidden"} icon='pi pi-times' rounded severity="danger" onClick={handleCancel} />
            <Button className={edit ? "hidden" : "mt-2 ml-2"} icon='pi pi-angle-left' rounded onClick={handleGoBack} />
        </div>
    )
}

MenuButtonChSh.propTypes = {
    user: PropTypes.any,
    edit: PropTypes.bool,
    setEdit: PropTypes.func,
    character: PropTypes.any,
    setCharacter: PropTypes.func
}