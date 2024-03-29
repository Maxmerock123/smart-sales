import React from "react";
import style from "./Header.module.css";
import logo from "../public/impact-logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  const navigate = useNavigate();
  const onBackHandler = () => {
    navigate(-1);
  };
  const onHomepage = () => {
    navigate("/");
  };

  const onCall = () => {
    window.open("tel:028335252");
  };

  return (
    <>
      <div className="sticky top-0 flex items-center justify-around gap-2 bg-gradient-to-b from-custom-yellow to-transparent px-10 py-10 lg:justify-center">
        <div className="flex w-[100px] justify-center">
          <p className="text-4xl" onClick={onBackHandler}>
            &#x2190;
          </p>
        </div>
        <div className="flex w-[100px] items-center justify-center ">
          {" "}
          {/* Added a container div */}
          <img
            className="w-[100px]"
            src={logo}
            onClick={onHomepage}
            alt="Logo"
          ></img>
        </div>
        <div className="flex w-[100px] justify-center ">
          <BiSolidPhoneCall onClick={onCall} size={30} />
        </div>
      </div>
    </>
  );
};

export default Header;
