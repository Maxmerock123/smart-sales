import React from 'react'
import style from './Header.module.css'
import logo from '../../public/impact-logo.png'
import { IoIosArrowBack } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

const Header = () => {
    return (
        <>
            <div className='flex items-center justify-center gap-2 h-28 bg-gradient-to-b from-custom-yellow to-transparent' >
                <div className='m-8 flex justify-center items-center gap-[50px]'>

                    <IoIosArrowBack size={"40px"} />
                    <img className='w-[150px] ' src={logo}></img>
                    <PiPhoneCallFill size={"40px"} />
                </div>
            </div>
        </>
    )
}

export default Header