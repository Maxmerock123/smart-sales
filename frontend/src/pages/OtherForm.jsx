import React from "react";

const OtherForm = () => {
  function handleChange() {
    return 0;
  }
  function onClickHandler() {
    return 0;
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
              ข้าม
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtherForm;
