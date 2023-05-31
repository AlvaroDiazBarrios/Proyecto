import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import { useRef, useState } from "react"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Dropdown } from "primereact/dropdown"
import { Toast } from "primereact/toast"
import bcrypt from 'bcryptjs'
import axios from "axios"



export const SignIn = ({ displaySignIn, setDisplaySignIn }) => {

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const toast = useRef(null)

    const genders = [
        "Male",
        "Female",
        "Non Binary"
    ]

    const [signIn, setSignIn] = useState({
        name: '',
        surname: '',
        gender: '',
        username: '',
        email: '',
        password: ''
    })

    const showError = (error) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
    }

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

    const handleChange = (e) => {
        setSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSignIn = async (e) => {
        e.preventDefault()

        var post = true

        if (!signIn.name) {
            showError("Name cannot be empty")
            post = false
        }

        if (!signIn.surname) {
            showError("Surname cannot be empty")
            post = false
        }

        if (!signIn.gender) {
            showError("Gender cannot be empty")
            post = false
        }

        if (!signIn.username) {
            showError("Username cannot be empty")
            post = false
        }

        if (!signIn.email) {
            showError("Email cannot be empty")
            post = false
        } else {
            if (!checkEmail.test(signIn.email)) {
                showError('Please Introduce a valid email format')
                post = false
            }
        }

        if (!signIn.password) {
            showError("Password cannot be empty")
            post = false
        }

        if (post) {
            try {

                const hash = await bcrypt.hash(signIn.password, 10)
                const data = {
                    name: signIn.name,
                    surname: signIn.surname,
                    gender: signIn.gender,
                    username: signIn.username,
                    email: signIn.email,
                    password: hash
                }
                const response = await axios.post('http://localhost:8800/register', data)
                showSuccess(response.data)
                setDisplaySignIn(false)

            } catch (err) {
                showError(err.response.data)
            }
        }
    }

    const botonSignIn = (
        <div>
            <Button label="Sign In" icon="pi pi-check" onClick={handleSignIn} />
        </div>
    )

    return (
        <Dialog header="Sign In" position="top" visible={displaySignIn} onHide={() => { setDisplaySignIn(false); setSignIn((prev) => ({ ...prev, ['gender']: '' })); }} draggable={false} footer={botonSignIn}>
            <div className="flex md:flex-row flex-column column-gap-3 row-gap-5" >
                <div className="flex flex-column row-gap-5 mt-3"  >
                    <div className="p-float-label">
                        <InputText id="name" name="name" className="w-full" onChange={handleChange} autoFocus />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="p-float-label">
                        <InputText id="surname" name="surname" className="w-full" onChange={handleChange} />
                        <label htmlFor="surname">Surname</label>
                    </div>
                    <div className="p-float-label">
                        <Dropdown value={signIn.gender} id="gender" name="gender" options={genders} className="w-full" onChange={handleChange} />
                        <label htmlFor="gender">Gender</label>
                    </div>
                </div>
                <div className="flex flex-column row-gap-5 md:mt-3"  >
                    <div className="p-float-label">
                        <InputText id="username" name="username" className="w-full" onChange={handleChange} />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="p-float-label">
                        <InputText id="email" name="email" className="w-full" onChange={handleChange} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="p-float-label">
                        <Password id="password" name="password" toggleMask onChange={handleChange} />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
            </div>
            <Toast ref={toast} />
        </Dialog>
    )
}