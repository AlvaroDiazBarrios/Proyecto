import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [show, setShow] = useState(false)
    const [fail, setFail] = useState('')
    const navigate = useNavigate()

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    const handelChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCancel = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const handelLogIn = async (e) => {
        e.preventDefault()

        try {
            await axios.post('http://localhost:8800/login', user).then((response) => {
                const data = response.data
                navigate('/main', { state: data })
            }).catch((error) => {
                if (error.response && error.response.data) {
                    const fail = error.response.data
                    setFail(fail)
                    handleShow()
                } else {
                    console.log(error)
                }
            })
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <>
            <div className="container p-5">
                <Form>
                    <Form.Group className="mb-3 bg-dark text-light rounded p-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handelChange} />
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className="mb-1" placeholder="Password" name="password" onChange={handelChange} />
                        <Button onClick={handelLogIn} className="my-3">Log In</Button>
                        <Button variant="danger" className="m-3" onClick={handleCancel}>Cancel</Button>
                    </Form.Group>
                </Form>


            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {fail}
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>
        </>
    )

}