import React, { useContext } from "react";
import bhuddistCeremony1 from "../../img/outside/bhuddistCeremony/bhuddistCeremony1.jpg";
import bhuddistCeremony2 from "../../img/outside/bhuddistCeremony/bhuddistCeremony2.jpg";
import bhuddistCeremony3 from "../../img/outside/bhuddistCeremony/bhuddistCeremony3.jpg";
import bhuddistCeremony4 from "../../img/outside/bhuddistCeremony/bhuddistCeremony4.jpg";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";

const BhuddistCeremony = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventType: e.target.id,
      },
    });
    navigate("/SummaryPage");
  }

  return (
    <>
      <h3 className="m-8 font-bold text-center">เลือกประเภทอาหาร</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={bhuddistCeremony1}
            id="outsideCoffee"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>6,900</h3>
          <p> อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ </p>
        </div>
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={bhuddistCeremony2}
            id="outsideThaiBuffet"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-right"
            onClick={onClickHandler}
          />
          <h3>7,900</h3>
          <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ</p>
        </div>
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={bhuddistCeremony3}
            id="outsideCocktail"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>11,900</h3>
          <p>อุปกรณ์พิธีสงฆ์ + ขันโตกถวายพระ + ไทยบุฟเฟต์สำหรับแขก</p>
        </div>
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={bhuddistCeremony4}
            id="outsideInternation"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>15,900</h3>
          <p>อุปกรณ์พิธีสงฆ์ + ปิ่นโตถวายพระ + ไทยบุฟเฟต์พรีเมี่ยมสำหรับแขก</p>
        </div>
      </div>
    </>
  );
};

export default BhuddistCeremony;
