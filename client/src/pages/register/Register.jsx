import { useState } from "react"
import './register.css'
import bcrypt from 'bcryptjs'
import axios from 'axios'


export const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const handelChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleRegister = async (e) => {
        e.preventDefault()

        if (user.password === user.repeatPassword) {
            const data = {
                username: user.username,
                email: user.email,
                password: await bcrypt.hash(user.password, 10)
            }

            try {
                await axios.post('http://localhost:8800/register', data)
            } catch (err) {
                console.log(err)
            }
        } else {
            window.alert("Passwords must be the same")
        }
    }

    return (
        <>
            <fieldset className="registration-form" >
                <legend>User Registration</legend>

                <label htmlFor="registration-username">Username*:</label>
                <input id="registration-username" className="registration-form-input" type="text" name="username" placeholder="username" onChange={handelChange} />

                <label htmlFor="registration-username">Email*:</label>
                <input className="registration-form-input" type="email" name="email" placeholder="email" onChange={handelChange} />

                <label htmlFor="registration-username">Password*:</label>
                <input className="registration-form-input" type="password" name="password" placeholder="password" onChange={handelChange} />
                <input className="registration-form-input" type="password" name="repeatPassword" placeholder="repeat password" onChange={handelChange} />

                <button className="registration-form-btn" onClick={handleRegister}>Register</button>
            </fieldset>
        </>
    )
}
