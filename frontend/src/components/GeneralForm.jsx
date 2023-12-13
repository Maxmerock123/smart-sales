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
            <div className='bg-custom-yellow rounded-[15px] min-w-[80%] flex justify-center m-5 p-10'>
                <form className='flex flex-col w-full'>
                    <label className='mb-5' htmlFor='name'>ชื่อ-นามสกุล *</label><br />
                    <input className='rounded-[15px] h-8 ' type='text' id='name' name='name' onChange={handleChange} /><br />
                    <label className='mb-5' htmlFor='name'>เบอร์โทรศัพท์ *</label><br />
                    <input className='rounded-[15px] h-8' type='number' id='number' name='number' onChange={handleChange} /><br />
                    <label className='mb-5' htmlFor='name'>LINE ID (ไม่จำเป็นต้องกรอก)</label><br />
                    <input className='rounded-[15px] h-8' type='text' id='lineId' name='lineId' onChange={handleChange} /><br />

                    <div className='flex justify-end'>
                        <button className='bg-custom-brown px-5 text-white rounded-[15px]'>ถัดไป</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default GeneralForm