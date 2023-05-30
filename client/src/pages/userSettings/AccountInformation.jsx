import { Fieldset } from "primereact/fieldset"
import { Card } from 'primereact/card'
import { InputText } from "primereact/inputtext"
import { Password } from 'primereact/password'
import { PropTypes } from 'prop-types'

export const AccountInformation = ({ user, setUser }) => {

    const handleChange = (e) => {
        try {
            setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Fieldset legend="Account Information" className="m-2" style={{ width: '100%' }}>
            <div className="flex row-gap-5 card flex-column "  >
                <div className="p-float-label "  >
                    <InputText value={user.username} id="username" name="username" className="md:w-6 w-12" maxLength={15} onChange={handleChange} />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="p-float-label "  >
                    <InputText value={user.email} id="email" name="email" className="md:w-6 w-12" maxLength={50} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="p-float-label" >
                    <Password id="password" name="password" toggleMask inputClassName="w-12" className="md:w-6 w-12" onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
        </Fieldset>
    )
}

AccountInformation.propTypes = {
    user: PropTypes.any,
    setUser: PropTypes.func
}