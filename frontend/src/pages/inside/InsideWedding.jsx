import React from 'react'
import { useNavigate } from 'react-router-dom'
import wedding1 from '../../img/outside/wedding/wedding1.jpg'
import wedding2 from '../../img/outside/wedding/wedding2.jpg'
import wedding3 from '../../img/outside/wedding/wedding3.jpg'
import wedding4 from '../../img/outside/wedding/wedding4.jpg'
import CardItem from '../../components/CardItem'

const InsideWedding = () => {
    const navigate = useNavigate() 
    
    function onClickHandler(e) {
        navigate(e.target.id)
        
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกแพ็คเกจ</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <CardItem url='#' body='พิธีหมั้น' id='EngagementCeremony' onClick={onClickHandler}/>
                <CardItem url='#' body='งานเลี้ยง ฉลองมงคลสมรส' id='WeddingCeremony' onClick={onClickHandler}/>
            </div>
        </>
    )
}

export default InsideWedding