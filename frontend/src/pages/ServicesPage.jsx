import React from 'react'
import Header from '../components/Header'
import style from './ServicesPage.module.css'

const ServicesPage = () => {


  return (
    <>
      <Header />
      <div>
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