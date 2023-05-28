import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Fieldset } from 'primereact/fieldset'

export const Characteristics = () => {

    return (
        <Fieldset legend="Characteristics">

            <div className="flex flex-column justify-content-evenly mt-3 ">
                <div className="flex justify-content-evenly mt-2 flex-row " >
                    <span className='p-float-label'>
                        <InputText id='name' name='name' />
                        <label htmlFor='name' >Name</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText id='birthPlace' name='birthPlace' />
                        <label htmlFor='birthPlace' >Birth Place</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText id='pronouns' name='pronouns' />
                        <label htmlFor='pronouns' >Pronouns</label>
                    </span>
                </div>
            </div>

            <div className="flex flex-column mt-5 ">
                <div className="flex flex-row justify-content-evenly" >
                    <span className='p-float-label'>
                        <InputText id='occupation' name='occupation' />
                        <label htmlFor='occupation' >Occupation</label>
                    </span>
                    <span className='p-float-label'>
                        <InputText id='residence' name='residence' />
                        <label htmlFor='residence' >Residence</label>
                    </span>
                    <span className='p-float-label'>
                        <InputNumber id='age' name='age' min={15} max={99} />
                        <label htmlFor='age' >Age</label>
                    </span>
                </div>
            </div>

        </Fieldset>
    )
}