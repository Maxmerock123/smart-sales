import React from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

const Meeting = () => {
    const navigate = useNavigate()
    
    function onClickHandler(e) {
        console.log(`clicked on ${e.target.id}`)
        navigate('SummaryPage')
        
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกประเภทอาหาร</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center'>
                    <div id='Meeting' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>คอฟฟี่เบรค</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='Party' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ไทยบุฟเฟ่ต์</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='Wedding' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ค็อกเทล</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='Ceremony' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>อาหารนานาชาติ</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-[130px] aspect-square bg-gray-300 rounded-[15px]'></div>
                    <p>โต๊ะจีน (10 ท่าน)</p>
                </div>
            </div>
        </>
    )
}

export default Meeting