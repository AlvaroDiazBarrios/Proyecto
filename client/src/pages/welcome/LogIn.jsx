import { Dialog } from "primereact/dialog"
import { Button } from "primereact/button"
import axios from "axios"
import bcrypt from 'bcryptjs'
import { useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { InputText } from "primereact/inputtext"
import { Password } from "primereact/password"
import { Toast } from "primereact/toast"


export const LogIn = ({ displayLogIn, setDisplayLogIn }) => {
    const navigate = useNavigate()
    const toast = useRef(null)

    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleLogIn = async (e) => {
        e.preventDefault()

        var post = true
        if (!login.email || !login.password) {
            showError(`Missing ${!login.email ? "Email" : "Password"}`)
            post = false
        }

        if (login.email) {
            if (!checkEmail.test(login.email)) {
                showError("Please introduce a valid mail format")
                post = false
            }
        }

        if (post) {
            try {
                const response = await axios.post('http://localhost:8800/getPass', { 'email': login.email })

                const hashPass = response.data.pass
                const validPass = await bcrypt.compare(login.password, hashPass)

                if (validPass) {
                    await axios.post('http://localhost:8800/login', { 'email': login.email }).then((res) => {
                        const data = res.data
                        navigate('/main', { state: data })
                    })
                } else {
                    showError('Invalid Password. Try Again')
                }
            } catch (err) {
                showError(err.response.data)
            }
        }
    }

    const handleChange = (e) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const showError = (error) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
    }

    const botonLogIn = <Button label="Log In" icon="pi pi-sign-in" onClick={handleLogIn} />

    return (
        <Dialog header="Log In" position="top" visible={displayLogIn} onHide={() => setDisplayLogIn(false)} draggable={false} footer={botonLogIn}>
            <div className="flex md:flex-row flex-column row-gap-5 column-gap-3 my-3" >
                <div className="p-float-label" >
                    <InputText id="email" name="email" className="w-full" onChange={handleChange} autoFocus />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="p-float-label">
                    <Password id="password" name="password" toggleMask feedback={false} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <Toast ref={toast} />
        </Dialog>
    )
}