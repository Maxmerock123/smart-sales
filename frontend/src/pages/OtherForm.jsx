import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { Navigate, useNavigate } from "react-router-dom";

const OtherForm = () => {
  const { formData, setFormData } = useContext(FormDataContext); // Use context

  function handleChange(e) {
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventType: e.target.value,
      },
    });
  }

  const navigate = useNavigate();

  function onClickHandler() {
    if (formData.generalForm.eventType) {
      navigate("/SummaryPage");
    }
  }

  return (
    <>
      <div className="m-5 flex min-w-[80%] justify-center rounded-[15px] bg-custom-orange p-10 shadow-2xl">
        <form className="flex w-full flex-col gap-5">
          <div>
            <label className="text-white" htmlFor="name">
              อื่นๆ กรอกที่นี่
            </label>
            <br />
            <input
              className="h-8 rounded-[15px] shadow-2xl"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="flex justify-end">
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

export default OtherForm;
