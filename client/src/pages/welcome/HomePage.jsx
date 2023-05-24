import { InputText } from "primereact/inputtext"
import { Toast } from 'primereact/toast'
import { Password } from "primereact/password"
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

    const toast = useRef(null)

    const [displayDialogLogIn, setDisplayDialogLogIn] = useState(false);
    const [displayDialogSignIn, setDisplayDialogSignIn] = useState(false);

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

    const handleLogIn = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:8800/login', login).then((response) => {
                const data = response.data
                navigate('/main', { state: data })
            }).catch((error) => {
                if (error.response && error.response.data) {
                    const fail = error.response.data
                    showError(fail)
                } else {
                    showError(error)
                }
            })
        } catch (err) {
            console.log(err)
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
    const handleChange = (e) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="homePage">
            <header>
                <Menubar model={items} className="bg-purple-200 border-noround " />
                <Dialog header="Log In" position="top" visible={displayDialogLogIn} onHide={hideDialogLogIn} draggable={false}>
                    <Toast ref={toast} />
                    <InputText name="email" onChange={handleChange} className="w-full mb-3" placeholder="email" />
                    <InputText type="password" name="password" onChange={handleChange} className="w-full mb-3" placeholder="password" />
                    <Button label="Log In" icon="pi pi-user" className="w-full" onClick={handleLogIn} />
                </Dialog>
                <Dialog header="Sign In" position="top" visible={displayDialogSignIn} onHide={hideDialogSignIn} draggable={false} >
                    <div className="grid">
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText id="nombre" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText id="nombre" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText id="nombre" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText id="nombre" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText id="nombre" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                        <div className="col-6">
                            <spam className="p-float-label mt-5">
                                <InputText type="password" className="w-full" />
                                <label htmlFor="nombre">Name</label>
                            </spam>
                        </div>
                    </div>
                </Dialog>
            </header>
            <Card title="Prueba" className="m-5 bg-purple-200" >
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
            </Card>
            <Card title="Prueba" className="m-5 bg-purple-200">
                <p className="m-0">
                    Voluptate eu ad non nisi. Commodo consequat aliquip incididunt laborum officia officia consectetur esse qui qui deserunt. Sit qui ullamco cillum id adipisicing laborum occaecat reprehenderit minim. Aliquip aliqua ut Lorem laboris nisi Lorem dolore excepteur.
                </p>
            </Card>
        </div>
    )
}