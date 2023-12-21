import React from 'react'

const BhuddistCeremony = () => {

    function onClickHandler() {
        return 0;
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกประเภทอาหาร</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideCoffee' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>6,900</h3>
                    <p> อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ  </p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideThaiBuffet' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>7,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideCocktail' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>11,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ + ไทยบุฟเฟต์สำหรับแขก</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideInternation' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>15,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ + ไทยบุฟเฟต์พรีเมี่ยมสำหรับแขก</p>
                </div>
            </div>

        </>
    )
}

export default BhuddistCeremony