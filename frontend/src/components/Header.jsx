import React from "react";
import style from "./Header.module.css";
import logo from "../public/impact-logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };
  const onHomepage = () => {
    navigate("/");
  };

  const onCall = () => {
    window.open("tel:0886123858");
  };

  return (
    <>
      <div className="flex h-28 items-center justify-center gap-2 bg-gradient-to-b from-custom-yellow to-transparent ">
        <div className="mb-8 mt-24 flex items-center justify-center gap-[50px]">
          <p className="" onClick={onBackHandler}>
            ย้อนกลับ
          </p>
          <img className="w-[150px] " src={logo} onClick={onHomepage}></img>
          <p className="text-transparent" onClick={onBackHandler}>
            ย้อนกลับ
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
