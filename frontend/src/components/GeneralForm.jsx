import React, { useContext } from "react"; // Add useContext
import style from "./GeneralForm.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import FormDataContext from "../FormDataContext";

const GeneralForm = () => {
  const { formData, setFormData } = useContext(FormDataContext); // Use context

  const handleChange = (e) => {
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        [e.target.name]: e.target.value,
      },
    });
    console.log(formData.generalForm);
  };

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("PlacePage");
  };

  return (
    <>
      <div className="m-5 flex w-[350px] justify-center rounded-[15px] bg-custom-orange p-10 shadow-2xl">
        <form className="flex flex-col w-full gap-5">
          <div>
            <label className="text-white" htmlFor="name">
              ชื่อ-นามสกุล / ชื่อบริษัท *
            </label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px] shadow-2xl"
              type="text"
              id="name"
              name="name"
              value={formData.generalForm.name}
              onChange={handleChange}
            />
            <br />
          </div>
          <div>
            <label className="text-white" htmlFor="name">
              เบอร์โทรศัพท์ *
            </label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px] shadow-2xl"
              type="text"
              id="number"
              name="number"
              value={formData.generalForm.number}
              onChange={handleChange}
            />
            <br />
          </div>
          <div>
            <label className="text-white" htmlFor="name">
              อีเมล
            </label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px] shadow-2xl"
              type="text"
              id="email"
              name="email"
              value={formData.generalForm.email}
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="flex justify-between gap-5">
            <div>
              <label className="text-white" htmlFor="name">
                จำนวนแขก
              </label>
              <br />
              <input
                className="h-8 w-24 rounded-[15px] shadow-2xl"
                type="number"
                id="people"
                name="people"
                value={formData.generalForm.people}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label className="text-white" htmlFor="name">
                วันที่จัดงาน
              </label>
              <br />
              <input
                className="h-8 w-[150px] rounded-[15px] shadow-2xl"
                type="date"
                id="date"
                name="date"
                value={formData.generalForm.date}
                onChange={handleChange}
              />
              <br />
            </div>
          </div>
          <div className="flex justify-end gap-5 mt-5">
            <button
              className="rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
              onClick={onClickHandler}
            >
              ข้าม
            </button>
            <button
              className="rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
              onClick={onClickHandler}
            >
              ถัดไป
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneralForm;
