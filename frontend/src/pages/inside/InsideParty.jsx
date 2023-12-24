import React from 'react'
import privateParty from '../../img/food/privateParty.jpg'
import CardItem from '../../components/CardItem'

const InsideParty = () => {
    function onClickHandler() {
        return 0
    }

    return (
        <>
            <h3 className='m-8 font-bold text-center'>เลือกแพ็คเกจ</h3>
            <div className='flex flex-wrap justify-center gap-10 mt-10'>
                <CardItem id='outsideCoffee' url='#' price='#' body='ไทยบุฟเฟต์ {hide 700}' onClick={onClickHandler} />
                <CardItem id='outsideCoffee' url='#' price='#' body='ค็อกเทล {hide 720}' onClick={onClickHandler} />
                <CardItem id='outsideCoffee' url='#' price='#' body='บุฟเฟต์อาหารไทยและเวสเทิร์น {hide 770}' onClick={onClickHandler} />
                <CardItem id='outsideCoffee' url='#' price='#' body='โต๊ะจีน (สำหรับ 10 ท่าน) {hide 8900}' onClick={onClickHandler} />
            </div>
        </>)
}

export default InsideParty