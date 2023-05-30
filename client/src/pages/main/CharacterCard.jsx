import { Card } from "primereact/card"
import { Button } from "primereact/button"
import { Toast } from "primereact/toast"
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import axios from "axios"

export const CharacterCard = ({ characters, user }) => {

    const toast = useRef(null)
    const navigate = useNavigate()

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

    const handleGoToCharacter = (character) => {

        const data = {
            user: user,
            character: character
        }

        navigate("/characterSheet", { state: data })
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

    const footer = (character) => (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button severity='danger' icon="pi pi-trash" rounded onClick={() => confirmDelete(character)} />
            <Button icon="pi pi-chevron-right" rounded onClick={() => handleGoToCharacter(character)} />
        </div>
    )

    return (
        <>
            {characters.length === 0 && <Card title="Wow!" className="flex-grow-1 mx-2"  >Nothing to see here yet.</Card>}
            {
                characters.map(character => (
                    <Card className='border-round-md' key={character.characterId} title={character.name} subTitle={character.occupation} footer={() => footer(character)} style={{ minWidth: '25%' }}  ></Card>
                ))
            }
            <ConfirmDialog draggable={false} position='top' header="Delete confirmation" />
            <Toast ref={toast} />
        </>
    )
}