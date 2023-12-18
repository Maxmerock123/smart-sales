import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";

const PlacePage = () => {
    const navigate = useNavigate()
    function onInside() {
        console.log("clicked inside")
        navigate('InsideServices')
    }

    function onOutside (){
        console.log("clicked outside")
        navigate('OutsideServices')
    }


    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกสถานที่จัดงาน</h3>
            <div className='flex flex-wrap items-center justify-center gap-10 mt-10'>

                <div className='flex flex-col justify-center' onClick={onInside}>
                    <div className='w-[300px] aspect-video bg-gray-300 rounded-[15px]'>
                        image
                    </div>
                    <p className='text-center'>จัดงานในสถานที่ อิมแพ็คฯ</p>
                </div>
                
                <div className='flex flex-col justify-center' onClick={onOutside}>
                    <div className='w-[300px] aspect-video bg-gray-300 rounded-[15px]'>
                        image
                    </div>
                    <p className='text-center'>จัดงานนอกสถานที่</p>
                </div>
            </div>

        </>
    )
}

export default PlacePage