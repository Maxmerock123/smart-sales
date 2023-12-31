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
      eventForm: {
        ...formData.eventForm,
        place: "inside",
      },
    });

    navigate("InsideServices");
  }

  function onOutside() {
    console.log("clicked outside");
    setFormData({
      ...formData,
      eventForm: {
        ...formData.eventForm,
        place: "outside",
      },
    });
    navigate("OutsideServices");
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold ">เลือกสถานที่จัดงาน</h3>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
        <div className="flex flex-col justify-center" onClick={onInside}>
          <img
            src={insideImg}
            className="aspect-video w-[300px] rounded-[15px] bg-gray-300 shadow-lg"
          />
          <p className="text-center">จัดงานในสถานที่ อิมแพ็คฯ</p>
        </div>

        <div className="flex flex-col justify-center" onClick={onOutside}>
          <img
            src={outsideImg}
            className="aspect-video w-[300px] rounded-[15px] bg-gray-300 shadow-lg"
          />
          <p className="text-center">จัดงานนอกสถานที่</p>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
