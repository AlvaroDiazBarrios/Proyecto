import { Button } from "primereact/button"
import { Sidebar } from "primereact/sidebar"
import { Divider } from 'primereact/divider'
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { PropTypes } from 'prop-types'

export const MenuButton = ({ user }) => {

    const [sideBarVisibility, setSideBarVisibility] = useState(false)
    const navigate = useNavigate()

    const handleMenuBar = (e) => {
        e.preventDefault()
        setSideBarVisibility(true)
    }

    const handleUserSettings = () => {
        navigate("/userSettings", { state: user })
    }

    return (
        <>
            <Button className='' icon='pi pi-bars' rounded onClick={handleMenuBar} />
            <Sidebar visible={sideBarVisibility} onHide={() => setSideBarVisibility(false)} >
                <div className="grid">
                    <div className="col-12">
                        <Button label={user.username} icon='pi pi-user' text className='mt-3 w-full' onClick={handleUserSettings} />
                    </div>
                    <Divider />
                    <div className="col-12">
                        <Button label='Log Out' severity='danger' icon='pi pi-sign-out' text className='w-full' onClick={() => navigate("/")} />
                    </div>
                </div>
            </Sidebar>
        </>
    )
}

MenuButton.propTypes = {
    user: PropTypes.any
}