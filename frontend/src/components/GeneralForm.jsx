import React, { useContext } from 'react'; // Add useContext
import style from './GeneralForm.module.css'
import { Navigate, useNavigate } from "react-router-dom";
import FormDataContext from '../FormDataContext';

const GeneralForm = () => {
    const { formData, setFormData } = useContext(FormDataContext); // Use context

    const handleChange = (e) => {
        setFormData({
            ...formData,
            generalForm: {
                ...formData.generalForm,
                [e.target.name]: e.target.value
            }
        });
        console.log(formData.generalForm)
    };


    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('PlacePage')
    }



    return (
        <>
            <div className='bg-custom-orange rounded-[15px] min-w-[80%] flex justify-center m-5 p-10 shadow-2xl'>
                <form className='flex flex-col w-full gap-5'>
                    <div>
                        <label className='text-white' htmlFor='name'>ชื่อ-นามสกุล *</label><br />
                        <input className='rounded-[15px] h-8 shadow-2xl' type='text' id='name' name='name' onChange={handleChange} /><br />
                    </div>
                    <div>
                        <label className='text-white' htmlFor='name'>เบอร์โทรศัพท์ *</label><br />
                        <input className='rounded-[15px] h-8 shadow-2xl' type='number' id='number' name='number' onChange={handleChange} /><br />
                    </div>
                    <div>
                        <label className='text-white' htmlFor='name'>E-mail</label><br />
                        <input className='rounded-[15px] h-8 shadow-2xl' type='text' id='email' name='email' onChange={handleChange} /><br />
                    </div>
                    <div className='flex justify-between gap-5'>
                        <div>
                            <label className='text-white' htmlFor='name'>จำนวนแขก</label><br />
                            <input className='rounded-[15px] w-24 h-8 shadow-2xl' type='number' id='people' name='people' onChange={handleChange} /><br />
                        </div>
                        <div>
                            <label className='text-white' htmlFor='name'>วันที่จัดงาน</label><br />
                            <input className='rounded-[15px] h-8 w-[150px] shadow-2xl' type='date' id='date' name='date' onChange={handleChange} /><br />
                        </div>
                    </div>
                    <div className='flex justify-end gap-5 mt-5'>
                        <button className='bg-custom-brown px-5 text-white rounded-[15px] shadow-2xl' onClick={onClickHandler}>ข้าม</button>
                        <button className='bg-custom-brown px-5 text-white rounded-[15px] shadow-2xl' onClick={onClickHandler}>ถัดไป</button>
                    </div>
                </form>
            </div>
        </>

    )
}


export default GeneralForm