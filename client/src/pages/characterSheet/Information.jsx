import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { PropTypes } from 'prop-types'

export const Information = ({ edit, character, setCharacter }) => {

    const handleChange = (e) => {
        setCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="characterInfo">

            <div className="flex flex-column mt-3 ">
                <div className="flex justify-content-evenly mt-2 flex-row " >
                    <span className='p-float-label'>
                        <InputText style={!edit ? { pointerEvents: 'none' } : {}} id='name' name='name' value={character.name} onChange={handleChange} />
                        <label htmlFor='name' >Name</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText style={!edit ? { pointerEvents: 'none' } : {}} id='birthPlace' name='birthPlace' value={character.birthPlace} onChange={handleChange} />
                        <label htmlFor='birthPlace' >Birth Place</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText style={!edit ? { pointerEvents: 'none' } : {}} id='pronouns' name='pronouns' value={character.pronouns} onChange={handleChange} />
                        <label htmlFor='pronouns' >Pronouns</label>
                    </span>
                </div>
            </div>

            <div className="flex flex-column mt-5 ">
                <div className="flex flex-row justify-content-evenly" >
                    <span className='p-float-label'>
                        <InputText style={!edit ? { pointerEvents: 'none' } : {}} id='occupation' name='occupation' value={character.occupation} onChange={handleChange} />
                        <label htmlFor='occupation' >Occupation</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText style={!edit ? { pointerEvents: 'none' } : {}} id='residence' name='residence' value={character.residence} onChange={handleChange} />
                        <label htmlFor='residence' >Residence</label>
                    </span>
                    <span className='p-float-label'>
                        <InputNumber style={!edit ? { pointerEvents: 'none' } : {}} id='age' name='age' value={character.age} min={15} max={99} onChange={handleChange} />
                        <label htmlFor='age' >Age</label>
                    </span>
                </div>
            </div>

        </div>
    )
}

Information.propTypes = {
    edit: PropTypes.bool,
    character: PropTypes.any,
    setCharacter: PropTypes.func.isRequired
}