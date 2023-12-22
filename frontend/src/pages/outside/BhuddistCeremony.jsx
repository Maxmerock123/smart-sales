import React from 'react'
import bhuddistCeremony1 from '../../img/outside/bhuddistCeremony/bhuddistCeremony1.jpg'
import bhuddistCeremony2 from '../../img/outside/bhuddistCeremony/bhuddistCeremony2.jpg'
import bhuddistCeremony3 from '../../img/outside/bhuddistCeremony/bhuddistCeremony3.jpg'
import bhuddistCeremony4 from '../../img/outside/bhuddistCeremony/bhuddistCeremony4.jpg'

const BhuddistCeremony = () => {

    function onClickHandler() {
        return 0;
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกประเภทอาหาร</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center w-[130px]'>
                    <img src={bhuddistCeremony1} id='outsideCoffee' className='object-cover object-left w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>6,900</h3>
                    <p> อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ  </p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <img src={bhuddistCeremony2} id='outsideThaiBuffet' className='object-cover object-right w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>7,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <img src={bhuddistCeremony3} id='outsideCocktail' className='object-cover object-left w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>11,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ + ไทยบุฟเฟต์สำหรับแขก</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <img src={bhuddistCeremony4} id='outsideInternation' className='object-cover object-left w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>15,900</h3>
                    <p>อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ + ไทยบุฟเฟต์พรีเมี่ยมสำหรับแขก</p>
                </div>
            </div>

        </>
    )
}

export default BhuddistCeremony