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
      <div className="flex justify-center">
        <div className="m-5 flex w-[50vh] justify-center rounded-[15px] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-once animate-ease-out">
          <form className="flex w-full flex-col gap-5">
            <div>
              <label className="text-black" htmlFor="name">
                จัดงานประเภทอื่นๆ กรอกที่นี่
              </label>
              <br />
              <input
                className="h-8 min-w-[250px] rounded-[15px]  border-[1px] border-stone-300 shadow-2xl"
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
      </div>
    </>
  );
};

export default OtherForm;
