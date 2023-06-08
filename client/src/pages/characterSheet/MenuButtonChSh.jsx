import { Button } from "primereact/button"
import { MenuButton } from "../main/MenuButton"
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { Toast } from "primereact/toast"

export const MenuButtonChSh = ({ user, edit, setEdit, characterInfo, skills, characteristics, setCharacterBeforeChanges, setCharacteristics, setSkills, setCharacterInfo, characterBeforeChanges }) => {

    const navigate = useNavigate()
    const toast = useRef(null)

    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }

    const newCharacter = {
        characterId: characterBeforeChanges.characterId,
        name: characterInfo.name,
        birthPlace: characterInfo.birthPlace,
        pronouns: characterInfo.pronouns,
        occupation: characterInfo.occupation,
        residence: characterInfo.residence,
        age: characterInfo.age,
        characteristics: characteristics,
        skills: skills
    }

    const handleEdit = async () => {

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

        if (edit && post) {
            try {
                const response = await axios.post('http://localhost:8800/updateCharacter', newCharacter)
                setCharacterBeforeChanges(newCharacter)
            } catch (err) {
                console.log(err);
            }
        }
        setEdit(!edit)

    }

    const handleCancel = () => {
        setEdit(!edit)
        setCharacterInfo({
            characterId: characterBeforeChanges.characterId,
            name: characterBeforeChanges.name,
            birthPlace: characterBeforeChanges.birthPlace,
            pronouns: characterBeforeChanges.pronouns,
            occupation: characterBeforeChanges.occupation,
            residence: characterBeforeChanges.residence,
            age: characterBeforeChanges.age,
        })
        setCharacteristics(characterBeforeChanges.characteristics)
        setSkills(characterBeforeChanges.skills)
    }

    const handleGoBack = () => {
        navigate('/main', { state: user })
    }

    return (
        <div className="flex md:flex-column flex-row row-gap-3 column-gap-3 md:mr-2 mb-2"  >
            <MenuButton user={user} />
            <Button className="" icon={edit ? 'pi pi-check' : 'pi pi-pencil'} rounded onClick={handleEdit} />
            <Button className={edit ? "" : "hidden"} icon='pi pi-times' rounded severity="danger" onClick={handleCancel} />
            <Button className={edit ? "hidden" : ""} icon='pi pi-angle-left' rounded onClick={handleGoBack} />
            <Toast ref={toast} />
        </div>
    )
}

MenuButtonChSh.propTypes = {
    user: PropTypes.any,
    edit: PropTypes.bool,
    setEdit: PropTypes.func,
    characterInfo: PropTypes.any,
    characterBeforeChanges: PropTypes.any,
    setCharacterBeforeChanges: PropTypes.func,
    setCharacterInfo: PropTypes.func,
    setCharacteristics: PropTypes.func,
    setSkills: PropTypes.func,
}