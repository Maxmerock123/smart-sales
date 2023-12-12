import React from 'react';
import Header from '../components/Header';
import style from './ServicesPage.module.css';
import '../index.css';

const ServicesPage = () => {


  return (
    <>
      <Header />
      <div>
        <h3 className='text-3xl font-bold underline'>เลือกประเภทงาน</h3>
        <div className={style.cardContainer}>
          <div className={style.card}>
            <div className={style.mockImg}>image</div>
            <p>lorem ipsum, nason major</p>
          </div>
          <div className={style.card}>
            <div className={style.mockImg}>image</div>
            <p>lorem ipsum, nason major</p>
          </div>
          <div className={style.card}>
            <div className={style.mockImg}>image</div>
            <p>lorem ipsum, nason major</p>
          </div>
          <div className={style.card}>
            <div className={style.mockImg}>image</div>
            <p>lorem ipsum, nason major</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesPage