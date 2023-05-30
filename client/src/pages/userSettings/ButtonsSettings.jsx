import { Button } from 'primereact/button'
import bcrypt from 'bcryptjs'
import { PropTypes } from 'prop-types'
import { Toast } from 'primereact/toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useRef } from 'react'

export const ButtonsSettings = ({ userBeforeChanges, setUserBeforeChange, user }) => {
    const navigate = useNavigate()
    const toast = useRef(null)
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const handleCancel = () => {
        navigate("/main", { state: userBeforeChanges })
    }

    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }

    const handleUpdate = async () => {
        let post = true

        if (!user.username) {
            post = false
            showError('Username cannot be empty.')
        }

        if (!user.name) {
            post = false
            showError('Name cannot be empty')
        }

        if (!user.surname) {
            post = false
            showError('Surname cannot be empty')
        }

        if (!user.gender) {
            post = false
            showError('Gender cannot be empty')
        }

        if (!user.email) {
            post = false
            showError('Email cannot be empty')
        } else if (!checkEmail.test(user.email)) {
            showError('Please ensure email format')
        }

        let userPass

        if (user.password) {
            const hash = await bcrypt.hash(user.password, 10)
            userPass = {
                userId: user.userId,
                email: user.email,
                username: user.username,
                name: user.name,
                surname: user.surname,
                gender: user.gender,
                password: hash
            }
        }

        if (post) {
            try {
                const response = await axios.post('http://localhost:8800/updateUser', user.password ? userPass : user)
                const data = response.data
                showSuccess(data)
                setUserBeforeChange(user)

            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="flex md:flex-column flex-row column-gap-2 m-2 md:row-gap-2 md:w-1" >
            <Toast ref={toast} />
            <div className="flex justify-content-center" >
                <Button rounded icon='pi pi-save' onClick={handleUpdate} />
            </div>
            <div className="flex justify-content-center"  >
                <Button severity='danger' rounded icon='pi pi-times' onClick={handleCancel} />
            </div>
        </div>

    )
}

ButtonsSettings.propTypes = {
    userBeforeChanges: PropTypes.any,
    setUserBeforeChange: PropTypes.func,
    user: PropTypes.any,
}