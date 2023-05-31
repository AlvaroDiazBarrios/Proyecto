import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { Fieldset } from 'primereact/fieldset'
import { PropTypes } from 'prop-types'
import { CharacterInfoItem } from './CharacterInfoItem'

export const CharacterInformation = ({ edit, characterInfo, setCharacterInfo }) => {

    const handleChange = (e) => {
        setCharacterInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <Fieldset legend="Character Info" >
            <div className="flex md:flex-row row-gap-5 flex-column mt-3 justify-content-evenly flex-wrap ">
                <CharacterInfoItem edit={edit} name='name' value={characterInfo.name} setCharacterInfo={setCharacterInfo} />
                <CharacterInfoItem edit={edit} name='birthPlace' value={characterInfo.birthPlace} setCharacterInfo={setCharacterInfo} />
                <CharacterInfoItem edit={edit} name='pronouns' value={characterInfo.pronouns} setCharacterInfo={setCharacterInfo} />
            </div>

            <div className="flex md:flex-row flex-column justify-content-evenly row-gap-5 mt-5" >
                <CharacterInfoItem edit={edit} name='occupation' value={characterInfo.occupation} setCharacterInfo={setCharacterInfo} />
                <CharacterInfoItem edit={edit} name='residence' value={characterInfo.residence} setCharacterInfo={setCharacterInfo} />
                <CharacterInfoItem edit={edit} name='age' value={characterInfo.age} setCharacterInfo={setCharacterInfo} />
            </div>

        </Fieldset>
    )
}

CharacterInformation.propTypes = {
    edit: PropTypes.bool,
    characterInfo: PropTypes.any,
    setCharacterInfo: PropTypes.func.isRequired
}