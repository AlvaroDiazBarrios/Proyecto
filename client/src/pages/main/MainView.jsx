import { Sidebar } from 'primereact/sidebar'
import { Divider } from 'primereact/divider'
import { useLocation } from "react-router-dom"
import { Button } from 'primereact/button'
import { useState } from 'react'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { useNavigate } from 'react-router-dom'

export const MainView = () => {
    const location = useLocation()
    const user = location.state
    const navigate = useNavigate()
    const [sideBarVisibility, setSideBarVisibility] = useState(false)

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
        <div className="mainView">
            <Button className='top-auto left-auto' icon='pi pi-bars' text rounded onClick={handleMenuBar} />
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
        </div>
    )
}