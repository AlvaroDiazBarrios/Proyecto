import { Menubar } from "primereact/menubar"
import logo from '../assets/kraken.png'
import { LogIn } from "./LogIn"
import { useState } from "react"
import { SignIn } from "./SignIn"

export const Header = () => {

    const [displayLogIn, setDisplayLogIn] = useState(false)
    const [displaySignIn, setDisplaySignIn] = useState(false)

    const items = [
        {
            label: 'Log In',
            icon: 'pi pi-fw pi-user',
            command: () => setDisplayLogIn(true)
        },
        {
            label: 'Sign In',
            icon: 'pi pi-fw pi-sign-in',
            command: () => setDisplaySignIn(true)
        }
    ]

    const logoImage = <img alt="logo" src={logo} height="40" className="mr-2"></img>

    return (
        <>
            <Menubar model={items} start={logoImage} />
            <LogIn displayLogIn={displayLogIn} setDisplayLogIn={setDisplayLogIn} />
            <SignIn displaySignIn={displaySignIn} setDisplaySignIn={setDisplaySignIn} />
        </>
    )
}