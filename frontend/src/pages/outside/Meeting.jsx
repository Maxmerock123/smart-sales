import React, { useContext } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import FormDataContext from '../../FormDataContext';

const Meeting = () => {
    const navigate = useNavigate()
    const { formData, setFormData } = useContext(FormDataContext);
    
    
    
    function onClickHandler(e) {
        console.log(`clicked on ${e.target.id}`)
        setFormData({
            ...formData,eventForm: {
                ...formData.eventForm,
                eventType: e.target.id
            }
        })    
        navigate('/SummaryPage')
        
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกประเภทอาหาร</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center'>
                    <div id='outsideCoffee' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>คอฟฟี่เบรค</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='outsideThaiBuffet' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ไทยบุฟเฟ่ต์</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='outsideCocktail' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ค็อกเทล</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='outsideInternation' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>อาหารนานาชาติ</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='outsideChinese' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]'></div>
                    <p>โต๊ะจีน (10 ท่าน)</p>
                </div>
            </div>
        </>
    )
}

export default Meeting