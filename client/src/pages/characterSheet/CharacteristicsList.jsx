import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Fieldset } from 'primereact/fieldset'
import { Characteristic } from "./Characteristic"
import { PropTypes } from 'prop-types'

export const CharacteristicsList = ({ characteristics, edit, setCharacter }) => {

    return (
        <Fieldset legend="Characteristics">

            <div className="flex flex-column mt-3 ">
                <div className="flex mt-2 md:flex-row flex-column row-gap-3" >
                    <Characteristic name='STR' value={characteristics.str} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='SIZ' value={characteristics.siz} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='HP' value={characteristics.hp} edit={edit} setCharacter={setCharacter} />
                </div>
            </div>

            <div className="flex flex-column mt-3 ">
                <div className="flex mt-2 md:flex-row flex-column row-gap-3" >
                    <Characteristic name='CON' value={characteristics.con} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='POW' value={characteristics.pow} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='MP' value={characteristics.mp} edit={edit} setCharacter={setCharacter} />
                </div>
            </div>

            <div className="flex flex-column mt-3 ">
                <div className="flex mt-2 md:flex-row flex-column row-gap-3" >
                    <Characteristic name='DEX' value={characteristics.dex} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='APP' value={characteristics.app} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='LUCK' value={characteristics.luck} edit={edit} setCharacter={setCharacter} />
                </div>
            </div>

            <div className="flex flex-column mt-3 ">
                <div className="flex mt-2 md:flex-row flex-column row-gap-3 " >
                    <Characteristic name='INT' value={characteristics.int} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='EDU' value={characteristics.edu} edit={edit} setCharacter={setCharacter} />
                    <Characteristic name='SANITY' value={characteristics.sanity} edit={edit} setCharacter={setCharacter} />
                </div>
            </div>
        </Fieldset>
    )
}

CharacteristicsList.propTypes = {
    characteristics: PropTypes.any.isRequired,
    edit: PropTypes.bool,
    setCharacter: PropTypes.func
}