import { PropTypes } from 'prop-types'
import { InputText } from 'primereact/inputtext'

export const CharacterInfoItem = ({ name, value, edit, setCharacterInfo }) => {

    const etiquetas = {
        name: "Name",
        birthPlace: "Place Of Birth",
        pronouns: "Pronouns",
        occupation: "Occupation",
        residence: "Residence",
        age: "Age"
    }

    const handleChange = (e) => {
        try {
            setCharacterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <span className='p-float-label' >
            <InputText className='' style={!edit ? { pointerEvents: 'none' } : {}} id={name} name={name} value={value} onChange={handleChange} />
            <label htmlFor={name} >{etiquetas[name]}</label>
        </span>
    )
}

CharacterInfoItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    edit: PropTypes.bool,
    setCharacterInfo: PropTypes.func
}