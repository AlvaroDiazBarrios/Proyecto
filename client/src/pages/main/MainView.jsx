import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { useLocation } from "react-router-dom"
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { useEffect, useState } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const MainView = () => {
    const location = useLocation()
    const user = location.state
    const navigate = useNavigate()
    const [sideBarVisibility, setSideBarVisibility] = useState(false)
    const [character, setCharacter] = useState(null)

    useEffect(() => {

        fetchCharacters()
    }, [])

    const fetchCharacters = async () => {
        var data
        await axios.post('http://localhost:8800/getAllCharacters', { userId: user.userId }).then(response => {
            data = response.data
        }).catch(err => {
            console.log(err);
        })
        setCharacter(data)
        console.log(data);
    }

    const confirmLogOut = () => {
        confirmDialog({
            message: 'Do you want to log out?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => navigate('/')
        })
    }

    const handleMenuBar = (e) => {
        e.preventDefault()
        setSideBarVisibility(true)
    }

    return (
        <div className="grid">
            <div className="col-1">
                <Button className='top-auto left-auto m-2' icon='pi pi-bars' rounded outlined onClick={handleMenuBar} />
            </div>
            <Sidebar visible={sideBarVisibility} onHide={() => setSideBarVisibility(false)} >
                <div className="grid">
                    <div className="col-12">
                        <Button label={user.username} icon='pi pi-user' text className='mt-3 w-full' />
                    </div>
                    <Divider />
                    <ConfirmDialog draggable={false} position='top' header="Log out Confirmation" />
                    <div className="col-12">
                        <Button label='Log Out' severity='danger' icon='pi pi-sign-out' text className='w-full' onClick={confirmLogOut} />
                    </div>
                </div>
            </Sidebar>
            <div className="col-11">
                {
                    character.map((itm) => (
                        <Card key={itm.characterId} className='m-5 bg-purple-200' title={itm.name} subTitle={itm.pronouns} >Añadir descripción a la base de datos de unas 100 palabas como máximo</Card>
                    ))
                }
                <Button severity='success' label='Add New' className='ml-5' />
            </div>
        </div>
    )
}