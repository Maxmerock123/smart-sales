import React, { useContext } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'
import FormDataContext from '../../FormDataContext';
import chineseTableImg from '../../img/food/chineseTable.jpg'
import cocktailImg from '../../img/food/cocktail.jpg'
import coffeeBreakImg from '../../img/food/coffeeBreak.jpg'
import westernSetImg from '../../img/food/westernSet.jpg'
import thaiBuffetImg from '../../img/food/thaiBuffet.jpg'
import CardItem from '../../components/CardItem';

const InsideMeeting = () => {
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
                    <img src={coffeeBreakImg} id='outsideCoffee' className='w-[130px] aspect-square object-cover object-top bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>คอฟฟี่เบรค</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={thaiBuffetImg} id='outsideThaiBuffet' className='object-cover w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ไทยบุฟเฟ่ต์</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={cocktailImg} id='outsideCocktail' className='object-cover w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>ค็อกเทล</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={westernSetImg} id='outsideWesternSet' className='object-cover w-[130px] aspect-square bg-gray-300 rounded-[15px]' onClick={onClickHandler} />
                    <p>อาหารนานาชาติ</p>
                </div>
                <div className='flex flex-col items-center'>
                    <img src={chineseTableImg} id='outsideChineseTable' className='object-cover w-[130px] aspect-square bg-gray-300 rounded-[15px]'/>
                    <p>โต๊ะจีน (10 ท่าน)</p>
                </div>
                <CardItem url="#" price='12dollar' body='lorem ipsum'/>
            </div>
        </>
    )
}

export default InsideMeeting