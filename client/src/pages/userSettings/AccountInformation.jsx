import { Fieldset } from "primereact/fieldset"
import { InputText } from "primereact/inputtext"
import { Password } from 'primereact/password'
import { PropTypes } from 'prop-types'
/*TODO:
    Hacer que sea como el personal information y pensar lo de la contraseña
*/
export const AccountInformation = () => {

    return (
        <Fieldset legend="Account Information" className="m-2" style={{ width: '95%' }} >
            <div className="flex flex-column row-gap-5" style={{ border: '2px dashed white' }} >
                <div className="p-float-label" style={{ border: '2px dashed red' }} >
                    <InputText id="username" className="md:w-6 w-12" maxLength={15} />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="p-float-label" style={{ border: '2px dashed red' }}>
                    <Password id="pass" toggleMask inputClassName="w-12" className="md:w-6 w-12" />
                    <label htmlFor="pass">Password</label>
                </div>
            </div>
        </Fieldset>
    )
}

AccountInformation.propTypes = {
    user: PropTypes.any,
    setUser: PropTypes.func
}