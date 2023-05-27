import axios from 'axios'
import { useRef } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { PropTypes } from 'prop-types'
import { Toast } from 'primereact/toast'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { useNavigate } from 'react-router-dom'

export const CharacterList = ({ characters, username }) => {

    const toast = useRef(null)
    const navigate = useNavigate()

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

    const confirmDelete = (characterId) => {
        confirmDialog({
            message: 'Are you sure you want to delete this character?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => handleDeleteCharacter(characterId)
        })
    }

    const handleDeleteCharacter = async (character) => {
        try {
            const response = await axios.post("http://localhost:8800/deleteCharacter", { characterId: character.characterId })
            showSuccess(response.data)
            setTimeout(() => {
                window.location.reload()
            }, 4000)
        } catch (err) {
            console.log(err);
        }
    }

    const handleGoToCharacter = (character) => {

        const data = {
            username: username,
            character: character
        }

        navigate("/characterSheet", { state: data })
    }

    const footer = (character) => (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button severity='danger' icon="pi pi-trash" rounded onClick={() => confirmDelete(character)} />
            <Button icon="pi pi-chevron-right" rounded onClick={() => handleGoToCharacter(character)} />
        </div>
    )

    return (
        <div className="flex-grow-1">
            {characters.length === 0 && <Card title="Wow!" className='surface-200 m-5' >Nothing to see here yet.</Card>}
            <div className="grid">
                {
                    characters.map(character => (
                        <div className="col-4 gap-2" key={character.characterId}>
                            <Card className='surface-200 border-round-md mr-2 mt-2' key={character.characterId} title={character.name} subTitle={character.surname} footer={() => footer(character)} >Descripción de hasta 100 palabras</Card>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-wrap justify-content-end">
                <Button severity='success' className='m-5' icon='pi pi-plus' rounded />
            </div>
            <ConfirmDialog draggable={false} position='top' header="Delete confirmation" />
            <Toast ref={toast} position="bottom-left" />
        </div>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            characterId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            pronouns: PropTypes.string.isRequired
        })
    ).isRequired,
    username: PropTypes.string
}