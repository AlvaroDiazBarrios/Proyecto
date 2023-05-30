
import { Button } from "primereact/button"
import { Toast } from 'primereact/toast'
import { MenuButton } from "../main/MenuButton"
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

//TODO:
export const ButtonNewCharacter = ({ user, characterInfo, skills, characteristics, }) => {

    const navigate = useNavigate()
    const toast = useRef(null)
    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }
    const newCharacter = {
        name: characterInfo.name,
        birthPlace: characterInfo.birthPlace,
        pronouns: characterInfo.pronouns,
        occupation: characterInfo.occupation,
        residence: characterInfo.residence,
        age: characterInfo.age,
        characteristics: characteristics,
        skills: skills
    }

    const handlePost = async () => {
        let post = true

        if (!newCharacter.name) {
            showError("Name cannot be empty.")
            post = false
        }

        if (!newCharacter.birthPlace) {
            showError("Place of Birth cannot be empty.")
            post = false
        }

        if (!newCharacter.pronouns) {
            showError("Pronouns cannot be empty.")
            post = false
        }

        if (!newCharacter.occupation) {
            showError("Occupation cannot be empty.")
            post = false
        }

        if (!newCharacter.residence) {
            showError("Residence cannot be empty.")
            post = false
        }

        if (!newCharacter.age) {
            showError("Age cannot be empty.")
            post = false
        }

        if (post) {
            try {
                //const response = await axios.post('http://localhost:8800/updateCharacter', newCharacter)
                //const data = response.data
                //setCharacterBeforeChanges(newCharacter)
            } catch (err) {
                console.log(err);
            }
        }

    }

    const handleGoBack = () => {
        navigate('/main', { state: user })
    }

    return (
        <div className="flex md:flex-column flex-row row-gap-3 column-gap-3 md:mr-2 mb-2"  >
            <Toast ref={toast} />
            <MenuButton username={user.username} />
            <Button className="" icon={'pi pi-check'} rounded onClick={handlePost} />
            <Button severity="danger" icon='pi pi-times' rounded onClick={handleGoBack} />
        </div>
    )
}

ButtonNewCharacter.propTypes = {
    user: PropTypes.any,
    characterInfo: PropTypes.any,
    skills: PropTypes.any,
    characteristics: PropTypes.any
}