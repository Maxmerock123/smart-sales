import React, { useContext } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
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
            ...formData, eventForm: {
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
                <CardItem id='outsideCoffee' url={coffeeBreakImg} body='คอฟฟี่เบรค' onClick={onClickHandler} />
                <CardItem id='outsideThaiBuffet' url={thaiBuffetImg} body='ไทยบุฟเฟ่ต์' onClick={onClickHandler} />
                <CardItem id='outsideCocktail' url={cocktailImg} body='ค็อกเทล' onClick={onClickHandler} />
                <CardItem id='outsideWesternSet' url={westernSetImg} body='อาหารนานาชาติ' onClick={onClickHandler} />
                <CardItem id='outsideChineseTable' url={chineseTableImg} body='โต๊ะจีน (10 ท่าน)' onClick={onClickHandler} />
            </div>
            <CardItem url="#" price='12dollar' body='lorem ipsum' />
        </>
    )
}

export default InsideMeeting