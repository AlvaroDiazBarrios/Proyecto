
import { PropTypes } from 'prop-types'
import { InputNumber } from 'primereact/inputnumber'
import { Dialog } from 'primereact/dialog'
import React, { useState } from 'react'

export const Skill = ({ name, value, edit, setSkills }) => {

    const half = Math.floor(value / 2)
    const fifth = Math.floor(value / 5)
    const [visible, setVisible] = useState(false)
    const [tirada, setTirada] = useState('')

    const etiquetas = {
        accounting: "Accounting",
        charm: "Charm",
        driveAuto: "Drive Auto",
        brawl: "Brawl",
        libraryUse: "Library Use",
        occult: "Occult",
        persuade: "Persuade",
        psychology: "Psychology",
        cthulhuMythos: "Cthulhu Mythos"
    }

    const handleChange = (e, inputName) => {
        try {
            setSkills((prev) => ({ ...prev, [inputName]: e.value }))
        } catch (err) {
            console.log(err)
        }
    }

    const handleThrow = () => {
        const number = Math.floor(Math.random() * 100) + 1
        if (number <= value && number > half) {
            setTirada(number + ' - Normal Success');
        } else if (number <= half && number > fifth) {
            setTirada(number + ' - Hard Success');
        } else if (number <= fifth) {
            setTirada(number + ' Imposible Success')
        } else {
            setTirada(number + ' - Fail')
        }
        setVisible(true)
    }

    return (
        <>
            <div className="flex p-inputgroup justify-content-center"  >
                <span className="p-inputgroup-addon" onClick={handleThrow} style={{ cursor: 'pointer', minWidth: '30%' }}>{etiquetas[name]}</span>
                <span className="p-inputgroup-addon">
                    <InputNumber min={1} max={99} name={name} style={!edit ? { maxWidth: '60px', pointerEvents: 'none' } : { maxWidth: '60px' }} value={value} onChange={(e) => handleChange(e, name.toLowerCase())} />
                </span>
                <span className="p-inputgroup-addon">
                    <InputNumber name={name + 'Half'} style={{ maxWidth: '60px', pointerEvents: 'none' }} value={value <= 99 ? half : Math.floor(99 / 2)} />
                </span>
                <span className="p-inputgroup-addon">
                    <InputNumber name={name + 'Fifth'} style={{ maxWidth: '60px', pointerEvents: 'none' }} value={value <= 99 ? fifth : Math.floor(99 / 5)} />
                </span>
            </div>
            <Dialog draggable={false} visible={visible} onHide={() => { setVisible(false) }} header={etiquetas[name] + " - Throw"} style={{ minWidth: '20vw' }}>
                <p style={{ textAlign: 'center' }}>{tirada}</p>
            </Dialog>
        </>
    )
}

Skill.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    edit: PropTypes.bool,
    setSkills: PropTypes.func
}
