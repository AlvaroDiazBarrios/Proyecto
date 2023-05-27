import { InputText } from "primereact/inputtext"
import { Dropdown } from 'primereact/dropdown'
import bcrypt from 'bcryptjs'
import { Toast } from 'primereact/toast'
import { Menubar } from 'primereact/menubar'
import { Card } from 'primereact/card'
import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { useRef, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "/node_modules/primeflex/primeflex.css"

export const HomePage = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const [signIn, setSignIn] = useState({
        name: '',
        surname: '',
        gender: '',
        username: '',
        email: '',
        password: ''
    })

    const genders = [
        "Male",
        "Female",
        "Non Binary"
    ]
    const toast = useRef(null)
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const [displayDialogLogIn, setDisplayDialogLogIn] = useState(false)
    const [displayDialogSignIn, setDisplayDialogSignIn] = useState(false)


    const navigate = useNavigate()

    const logInClick = () => {
        setDisplayDialogLogIn(true)
    }

    const signInClick = () => {
        setDisplayDialogSignIn(true)
    }

    const showError = (error) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: error, life: 3000 });
    }

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

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
                await axios.post('http://localhost:8800/getPass', { 'email': login.email }).then(async (response) => {
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


                }).catch((error) => {
                    const fail = error.response.data
                    showError(fail)
                })
            } catch (err) {
                console.log(err)
            }
        }
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
                await axios.post('http://localhost:8800/register', data).then((response) => {
                    showSuccess(response.data)
                    hideDialogSignIn()
                }).catch((error) => {
                    showError(error.response.data)
                })
            } catch (err) {
                console.log(err)
            }
        }
    }

    const hideDialogLogIn = () => {
        setDisplayDialogLogIn(false);
    }

    const hideDialogSignIn = () => {
        setDisplayDialogSignIn(false);
    }

    const items = [
        {
            label: 'Log In',
            icon: 'pi pi-fw pi-user',
            command: logInClick
        },
        {
            label: 'Sign In',
            icon: 'pi pi-fw pi-sign-in',
            command: signInClick
        }
    ]

    const handleChangeLogIn = (e) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleChangeSignIn = (e) => {
        setSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const botonLogIn = (
        <div>
            <Button label="Log In" icon="pi pi-sign-in" onClick={handleLogIn} />
        </div>
    )

    const botonSignIn = (
        <div>
            <Button label="Sign In" icon="pi pi-check" onClick={handleSignIn} />
        </div>
    )

    return (
        <>
            <header>
                <Menubar model={items} className="surface-200 border-noround w-full h-full" />
                <Dialog header="Log In" position="top" visible={displayDialogLogIn} onHide={hideDialogLogIn} draggable={false} footer={botonLogIn}>
                    <Toast ref={toast} />
                    <div className="grid">
                        <div className="col-12">
                            <span className="p-float-label mt-5">
                                <InputText className="w-full" type="email" name="email" id="email" onChange={handleChangeLogIn} autoFocus />
                                <label htmlFor="email">Email</label>
                            </span>
                        </div>
                        <div className="col-12">
                            <span className="p-float-label mt-5" >
                                <InputText className="w-full" type="password" name="password" id="password" onChange={handleChangeLogIn} />
                                <label htmlFor="password">Password</label>
                            </span>
                        </div>
                    </div>
                </Dialog>
                <Dialog header="Sign In" position="top" visible={displayDialogSignIn} onHide={hideDialogSignIn} draggable={false} footer={botonSignIn}  >
                    <div className="grid">
                        <div className="col-6">
                            <span className="p-float-label mt-5">
                                <InputText value={signIn.name} id="nombre" name="name" className="w-full" onChange={handleChangeSignIn} autoFocus />
                                <label htmlFor="nombre">Name</label>
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="p-float-label mt-5">
                                <InputText value={signIn.username} id="username" name="username" className="w-full" onChange={handleChangeSignIn} />
                                <label htmlFor="username">Username</label>
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="p-float-label mt-5">
                                <InputText value={signIn.surname} id="surname" name="surname" className="w-full" onChange={handleChangeSignIn} />
                                <label htmlFor="surname">Surname</label>
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="p-float-label mt-5">
                                <InputText value={signIn.email} id="email" name="email" className="w-full" onChange={handleChangeSignIn} />
                                <label htmlFor="email">Email</label>
                            </span>
                        </div>
                        <div className="col-6">
                            <Dropdown value={signIn.gender} onChange={handleChangeSignIn} name="gender" className="w-full mt-5" placeholder="Gender" options={genders} />
                        </div>
                        <div className="col-6">
                            <span className="p-float-label mt-5">
                                <InputText value={signIn.password} type="password" id="password" name="password" className="w-full" onChange={handleChangeSignIn} />
                                <label htmlFor="nombre">Password</label>
                            </span>
                        </div>
                    </div>
                </Dialog>
                <Toast ref={toast} position="bottom-left" />
            </header>
            <Card title="Prueba" className="m-5 surface-200" >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
            <Card title="Prueba" className="m-5 surface-200">
                <p className="m-0">
                    Voluptate eu ad non nisi. Commodo consequat aliquip incididunt laborum officia officia consectetur esse qui qui deserunt. Sit qui ullamco cillum id adipisicing laborum occaecat reprehenderit minim. Aliquip aliqua ut Lorem laboris nisi Lorem dolore excepteur.
                </p>
            </Card>
        </>
    )
}