import React from 'react'
import style from './Header.module.css'
import logo from '../../public/impact-logo.png'
import { IoIosArrowBack } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const onBackHandler = () => {
        navigate(-1)
    }
    const onHomepage = () => {
        navigate("/")
    }

    const onCall = ()=>{
        window.open("tel:0886123858");
    }

    return (
        <>
            <div className='flex items-center justify-center gap-2 h-28 bg-gradient-to-b from-custom-yellow to-transparent' >
                <div className='mt-24 mb-8 flex justify-center items-center gap-[50px]'>

                    <IoIosArrowBack size={"40px"} onClick={onBackHandler} />
                    <img className='w-[150px] ' src={logo} onClick={onHomepage}></img>
                    <PiPhoneCallFill size={"40px"} onClick={onCall} />
                </div>
            </div>
        </>
    )
}

export default Header