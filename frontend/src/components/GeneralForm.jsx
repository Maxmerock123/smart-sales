import React from 'react'
import { useState, setState } from 'react'
import style from './GeneralForm.module.css'

const GeneralForm = () => {

    const [fullName, setFullName] = useState('')
    const [number, setNumber] = useState('')
    const [lineId, setLineId] = useState('')

    const handleChange = (e) => {
        if (e.target.id == "name") {
            setFullName(e.target.value)
        } else if (e.target.id == "number") {
            setNumber(e.target.value)
        } else if (e.target.id == "lineId") {
            setLineId(e.target.value)
        }
    }

    return (
        <>
            <div className={style.formContainer}>
                <form>
                    <label htmlFor='name'>ชื่อ-นามสกุล *</label><br />
                    <input type='text' id='name' name='name' onChange={handleChange} /><br />
                    <label htmlFor='name'>เบอร์โทรศัพท์ *</label><br />
                    <input type='number' id='number' name='number' onChange={handleChange} /><br />
                    <label htmlFor='name'>LINE ID (ไม่จำเป็นต้องกรอก)</label><br />
                    <input type='text' id='lineId' name='lineId' onChange={handleChange}/><br />


                    <button>submit</button>
                </form>
            </div>
        </>

    )
}

export default GeneralForm