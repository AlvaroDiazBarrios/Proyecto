import { useState } from "react"
import { useLocation } from "react-router-dom"
import { PersonalInformation } from "./PersonalInformation"
import { AccountInformation } from "./AccountInformation"
import { ButtonsSettings } from "./ButtonsSettings"

export const UserSettings = () => {
    const location = useLocation()
    const [user, setUser] = useState({
        userId: location.state.userId,
        email: location.state.email,
        username: location.state.username,
        name: location.state.name,
        surname: location.state.surname,
        gender: location.state.gender,
        password: ''
    })

    const [userBeforeChanges, setUserBerforeChanges] = useState({
        userId: location.state.userId,
        email: location.state.email,
        username: location.state.username,
        name: location.state.name,
        surname: location.state.surname,
        gender: location.state.gender,
        password: ''
    })

    return (
        <div className="flex md:flex-row flex-column"  >
            <ButtonsSettings userBeforeChanges={userBeforeChanges} setUserBeforeChange={setUserBerforeChanges} user={user} />
            <div className="flex flex-column m-2 md:w-11" >
                <div className="flex justify-content-center" >
                    <PersonalInformation user={user} setUser={setUser} />
                </div>
                <div className="flex justify-content-center"  >
                    <AccountInformation user={user} setUser={setUser} />
                </div>
            </div>
        </div>
    )
}