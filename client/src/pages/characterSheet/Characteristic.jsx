import { PropTypes } from 'prop-types'
import { InputNumber } from 'primereact/inputnumber'
import React from 'react'

export const Characteristic = ({ name, value, edit, setCharacter }) => {
    const half = Math.floor(value / 2)
    const fifth = Math.floor(value / 5)

    const handleChange = (e, inputName) => {
        setCharacter((prev) => ({ ...prev, [inputName]: e.value }))
    }

    const handleThrow = () => {
        const number = Math.floor(Math.random() * 100) + 1
        console.log(number);
        if (number <= value && number > half) {
            console.log(number + ' - Normal Success');
        } else if (number <= half && number > fifth) {
            console.log(number + ' - Hard Success');
        } else if (number <= fifth) {
            console.log(number + ' Imposible Success')
        } else {
            console.log(number + ' - Fail')
        }
    }

    return (
        <div className="flex p-inputgroup">
            <span className="p-inputgroup-addon" onClick={handleThrow} style={{ cursor: 'pointer' }}>{name}</span>
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
    )
}

Characteristic.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    edit: PropTypes.bool,
    setCharacter: PropTypes.func
}
