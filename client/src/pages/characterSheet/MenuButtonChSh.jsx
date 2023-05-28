import { Button } from "primereact/button"
import { MenuButton } from "../main/MenuButton"
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const MenuButtonChSh = ({ user, edit, setEdit, character, setCharacter }) => {

    const [oldCharacter, setOldCharacter] = useState(character)
    const navigate = useNavigate()

    const handleEdit = async () => {

        if (edit) {
            try {
                const response = await axios.post('http://localhost:8800/updateCharacter', character)
                const data = response.data
                setOldCharacter(character)
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