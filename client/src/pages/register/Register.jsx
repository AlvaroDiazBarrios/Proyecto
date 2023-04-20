import { useState } from "react"


export const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleRegister = (e) => {
        e.preventDefault()


    }
    return (
        <>
            <h1>User Registration</h1>
            <form className="registration-form" method="post">
                <input className="registration-form-input" type="text" name="username" placeholder="username" />
                <input className="registration-form-input" type="email" name="email" placeholder="email" />
                <input className="registration-form-input" type="password" name="password" placeholder="password" />
                <input className="registration-form-input" type="password" name="password" placeholder="repeat password" />
                <button className="registration-form-btn" onClick={handleRegister}>Register</button>
            </form>

        </>
    )
}
