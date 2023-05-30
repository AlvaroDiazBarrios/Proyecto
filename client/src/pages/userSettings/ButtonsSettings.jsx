import { Button } from 'primereact/button'
import { PropTypes } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

/*TODO:
    Hacer el toast de todo OK tras el update
*/
export const ButtonsSettings = ({ userBeforeChanges, setUserBeforeChange, user }) => {
    const navigate = useNavigate()

    const handleCancel = () => {
        navigate("/main", { state: userBeforeChanges })
    }

    const handleUpdate = async () => {
        try {
            const response = await axios.post('http://localhost:8800/updateUser', user)
            const data = response.data
            setUserBeforeChange(user)

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex md:flex-column flex-row column-gap-2 m-2 md:row-gap-2 md:w-1" style={{ border: '2px dashed blue' }}>
            <div className="flex justify-content-center" style={{ border: '2px dashed green' }}>
                <Button rounded icon='pi pi-save' onClick={handleUpdate} />
            </div>
            <div className="flex justify-content-center" style={{ border: '2px dashed orange' }} >
                <Button severity='danger' rounded icon='pi pi-times' onClick={handleCancel} />
            </div>
        </div>

    )
}

ButtonsSettings.propTypes = {
    userBeforeChanges: PropTypes.any,
    setUserBeforeChange: PropTypes.func,
    user: PropTypes.any
}