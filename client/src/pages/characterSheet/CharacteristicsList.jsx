import { Fieldset } from 'primereact/fieldset'
import { Characteristic } from "./Characteristic"
import { PropTypes } from 'prop-types'
import { useEffect } from 'react'

export const CharacteristicsList = ({ characteristics, edit, setCharacteristics }) => {

    return (
        <Fieldset legend="Characteristics">

            <div className="flex mt-2 md:flex-row flex-column row-gap-3"  >
                <Characteristic name='STR' value={Number(characteristics.str)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='SIZ' value={Number(characteristics.siz)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='HP' value={Number(characteristics.hp)} edit={edit} setCharacteristics={setCharacteristics} />
            </div>

            <div className="flex mt-2 md:flex-row flex-column row-gap-3 mt-3" >
                <Characteristic name='CON' value={Number(characteristics.con)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='POW' value={Number(characteristics.pow)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='MP' value={Number(characteristics.mp)} edit={edit} setCharacteristics={setCharacteristics} />
            </div>

            <div className="flex mt-2 md:flex-row flex-column row-gap-3 mt-3" >
                <Characteristic name='DEX' value={Number(characteristics.dex)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='APP' value={Number(characteristics.app)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='LUCK' value={Number(characteristics.luck)} edit={edit} setCharacteristics={setCharacteristics} />
            </div>

            <div className="flex mt-2 md:flex-row flex-column row-gap-3 mt-3" >
                <Characteristic name='INT' value={Number(characteristics.int)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='EDU' value={Number(characteristics.edu)} edit={edit} setCharacteristics={setCharacteristics} />
                <Characteristic name='SANITY' value={Number(characteristics.sanity)} edit={edit} setCharacteristics={setCharacteristics} />
            </div>
        </Fieldset>
    )
}

CharacteristicsList.propTypes = {
    characteristics: PropTypes.any.isRequired,
    edit: PropTypes.bool,
    setCharacteristics: PropTypes.func
}