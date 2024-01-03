import React from 'react'
import { useNavigate } from 'react-router-dom'

import CardItem from '../../components/CardItem'
import wedding0 from '../../img/inside/wedding0.jpg'
import engage0 from '../../img/inside/engage0.jpg'

const InsideWedding = () => {
    const navigate = useNavigate() 
    
    function onClickHandler(e) {
        navigate(e.target.id)
        
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกแพ็คเกจ</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <CardItem url={engage0} body='พิธีหมั้น' id='EngagementCeremony' onClick={onClickHandler}/>
                <CardItem url={wedding0} body='งานเลี้ยง ฉลองมงคลสมรส' id='WeddingCeremony' onClick={onClickHandler}/>
            </div>
        </>
    )
}

export default InsideWedding