import React from 'react'
import GeneralForm from '../components/GeneralForm'
import Header from '../components/Header'
import style from './FormPage.module.css'


const FormPage = () => {
  return (
    <>
        <Header />
      <h3 className='m-8 font-bold text-center'>ข้อมูลทั่วไป</h3>
      <div className={style.formContainer}>
        <GeneralForm />
      </div>
    </>
  )
}

export default FormPage