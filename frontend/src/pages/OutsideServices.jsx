import React from 'react'
import meetingImg from '../img/img-btn-meeting.png'
import partyImg from '../img/img-btn-party.png'
import ceremonyImg from '../img/img-btn-bhudda.png'
import weddingImg from '../img/img-btn-wedding.png'
import { useNavigate } from 'react-router-dom'



const OutsideServices = () => {
    const navigate = useNavigate()

    function onClickHandler(e) {
        console.log(`clicked on ${e.target.id}`)
        if (e.target.id == "OtherForm") {
            navigate("/OtherForm");
        } else {
            navigate(e.target.id)
        }
    }

    return (
        <>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center'>
                    <img id='Meeting' src={meetingImg} className='w-[160px]' onClick={onClickHandler} />
                    <p>งานประชุม / สัมมนา / อบรม</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img id='Party' src={partyImg} className='w-[160px]' onClick={onClickHandler} />
                    <p>งานเลี้ยงสังสรรค์</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img id='Wedding' src={weddingImg} className='w-[160px]' onClick={onClickHandler} />
                    <p>งานแต่งงาน</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img id='BhuddistCeremony' src={ceremonyImg} className='w-[160px]' onClick={onClickHandler} />
                    <p>งานทำบุญบ้าน / บริษัท</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div id='OtherForm' className='w-[150px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler}></div>
                    <p>อื่นๆ</p>
                </div>
            </div>

        </>
    )
}

export default OutsideServices