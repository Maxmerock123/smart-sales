import React, { useState, setState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import FormDataContext from "../FormDataContext";
import insideImg from "../img/place-inside.jpg";
import outsideImg from "../img/place-outside.jpg";

const PlacePage = () => {
  const { formData, setFormData } = useContext(FormDataContext);

  const navigate = useNavigate();

  function onInside() {
    console.log("clicked inside");
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        place: "จัดงานในอิมแพ็ค เมืองทองธานี",
      },
    });

    navigate("InsideServices");
  }

  function onOutside() {
    console.log("clicked outside");
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        place: "จัดงานนอกสถานที่",
      },
    });
    navigate("OutsideServices");
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold ">เลือกสถานที่จัดงาน</h3>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
        <div
          className="flex animate-fade-right flex-col justify-center animate-once"
          onClick={onInside}
        >
          <img
            src={insideImg}
            className="aspect-video w-[300px] rounded-[15px] bg-gray-300 shadow-lg lg:w-[550px]"
          />
          <p className="text-center">อิมแพ็ค เมืองทองธานี</p>
        </div>

        <div
          className="flex animate-fade-left flex-col justify-center animate-once"
          onClick={onOutside}
        >
          <img
            src={outsideImg}
            className="aspect-video w-[300px] rounded-[15px] bg-gray-300 shadow-lg lg:w-[550px]"
          />
          <p className="text-center">นอกสถานที่</p>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
