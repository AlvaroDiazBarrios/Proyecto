import { useState } from "react"
import { useLocation } from "react-router-dom"
import { PersonalInformation } from "./PersonalInformation"
import { AccountInformation } from "./AccountInformation"
import { ButtonsSettings } from "./ButtonsSettings"

export const UserSettings = () => {
    const location = useLocation()
    const [user, setUser] = useState(location.state)
    const [userBeforeChanges, setUserBerforeChanges] = useState(location.state)

    return (
        <div className="flex md:flex-row flex-column" style={{ border: '2px dashed red' }} >
            <ButtonsSettings userBeforeChanges={userBeforeChanges} setUserBeforeChange={setUserBerforeChanges} user={user} />
            <div className="flex flex-column m-2 md:w-11" style={{ border: '2px dashed white' }}>
                <div className="flex justify-content-center" style={{ border: '2px dashed green' }}>
                    <PersonalInformation user={user} setUser={setUser} />
                </div>
                <div className="flex justify-content-center" style={{ border: '2px dashed orange' }} >
                    <AccountInformation />
                </div>
            </div>
        </div>
    )
}