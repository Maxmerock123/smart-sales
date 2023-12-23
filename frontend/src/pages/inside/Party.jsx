import React from 'react'
import privateParty from '../../img/food/privateParty.jpg'

const Party = () => {
    function onClickHandler() {
        return 0
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกแพ็คเกจ</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center w-[300px] '>
                    <img src={privateParty} id='outsideCoffee' className='object-cover h-[150px] bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>19,900 บาท</p>
                    <p>งานเลี้ยงสังสรรค์ + ค็อกเทลสำหรับแขก</p>
                </div>
            </div>
        </>
    )
}

export default Party