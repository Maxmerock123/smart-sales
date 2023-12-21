import React from 'react'

const Wedding = () => {
    function onClickHandler() {
        return 0;
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกแพ็คเกจ</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideCoffee' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3 className=''>29,900 บาท</h3>
                    <p> พิธีหมั้น + ยกน้ำชา</p>
                </div>
                <div className='flex flex-col items-center  w-[130px]'>
                    <div id='outsideThaiBuffet' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>39,900 บาท</h3>
                    <p> พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideCocktail' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>49,900 บาท</h3>
                    <p>พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + ไทยบุฟเฟต์</p>
                </div>
                <div className='flex flex-col items-center w-[130px]'>
                    <div id='outsideInternation' className='w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <h3>59,900 บาท</h3>
                    <p>พิธีฉลองมงคลสมรส + อาหารจัดเลี้ยง</p>
                </div>
            </div>
        </>
    )
}

export default Wedding