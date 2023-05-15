import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
    })
    const navigate = useNavigate()


    const handelChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate('/')
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
        <div className="container p-5">
            <Form>
                <Form.Group className="mb-3 bg-dark text-light rounded p-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={handelChange} />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handelChange} />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handelChange} />
                    <Form.Control type="password" className="mt-1 mb-1" placeholder="Repeat password" name="repeatPassword" onChange={handelChange} />
                    <Button variant="primary" className="my-3 pull-right" onClick={handleRegister}>
                        Submit
                    </Button>
                    <Button variant="danger" className="m-3" onClick={handleCancel}>Cancel</Button>
                </Form.Group>
            </Form>
        </div>
    )
}
