import React, { useContext } from "react"; // Add useContext
import style from "./GeneralForm.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import FormDataContext from "../FormDataContext";

const GeneralForm = () => {
  const { formData, setFormData } = useContext(FormDataContext); // Use context
  const [showModal, setShowModal] = React.useState(false);

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

  function isValidInput() {
    const { name, email, number, people, address } = formData.generalForm;
    if (name && number && people) {
      setFormData({
        ...formData,
        generalForm: {
          ...formData.generalForm,
          isInput: true,
        },
      });
      navigate("PlacePage");
    } else {
      setShowModal(true);
    }
  }

  const navigate = useNavigate();

  const onSumbitHandler = (e) => {
    e.preventDefault();
    console.log("set formData isSkip = false");
    isValidInput();
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        isSkip: false,
      },
    });
  };

  const onSkipHandler = () => {
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        isSkip: true,
      },
    });

    navigate("PlacePage");
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full animate-fade-down flex-col rounded-[15px] border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">โปรดกรอกข้อมูล</h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                    โปรดกรอกชื่อ ,เบอร์โทร, จำนวนแขก แล้วเลือกถัดไปค่ะ
                  </p>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-custom-brown px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    รับทราบ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}

      {/* Content */}
      <div className="m-5 flex w-[350px] animate-fade-down justify-center rounded-[15px] bg-white p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-once animate-ease-out">
        <form className="flex w-full animate-fade-down flex-col gap-5 animate-delay-300 animate-once animate-ease-out">
          <div>
            <label className="text-black" htmlFor="name">
              ชื่อ-นามสกุล / ชื่อบริษัท
            </label>
            <label className="text-red-500"> *</label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px]  border-[1px] border-stone-300 shadow-2xl"
              type="text"
              id="name"
              name="name"
              value={formData.generalForm.name}
              onChange={handleChange}
            />
            <br />
          </div>
          <div>
            <label className="text-black" htmlFor="name">
              เบอร์โทรศัพท์
            </label>
            <label className="text-red-500"> *</label>

            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px] border-[1px] border-stone-300 shadow-2xl"
              type="text"
              id="number"
              name="number"
              value={formData.generalForm.number}
              onChange={handleChange}
            />
            <br />
          </div>
          <div>
            <label className="text-black" htmlFor="name">
              อีเมล
            </label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px]  border-[1px] border-stone-300 shadow-2xl"
              type="text"
              id="email"
              name="email"
              value={formData.generalForm.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-black" htmlFor="name">
              หมู่บ้าน / ชื่ออาคาร
            </label>
            <input
              className="h-8 min-w-[250px] rounded-[15px]  border-[1px] border-stone-300 shadow-2xl"
              type="text"
              id="address"
              name="address"
              value={formData.generalForm.address}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between gap-5">
            <div>
              <label className="text-black" htmlFor="name">
                จำนวนแขก
              </label>
              <label className="text-red-500"> *</label>
              <br />
              <input
                className="h-8 w-24 rounded-[15px] border-[1px] border-stone-300 shadow-2xl"
                type="number"
                id="people"
                name="people"
                value={formData.generalForm.people}
                onChange={handleChange}
              />
              <br />{" "}
            </div>
            <div>
              <label className="text-black" htmlFor="name">
                วันที่จัดงาน
              </label>
              <br />
              <input
                className="h-8 w-[150px] rounded-[15px] border-[1px] border-stone-300 shadow-2xl"
                type="date"
                id="date"
                name="date"
                value={formData.generalForm.date}
                onChange={handleChange}
              />
              <br />
            </div>
          </div>
          <div>
            <div className="m-5 flex justify-end gap-10">
              <button
                className="h-[50px] w-[100px] rounded-[15px] bg-custom-brown text-white shadow-2xl"
                onClick={onSkipHandler}
              >
                ข้าม
              </button>
              <button
                className="w-[100px] rounded-[15px] bg-custom-brown px-5  text-white shadow-2xl"
                onClick={onSumbitHandler}
              >
                ถัดไป
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GeneralForm;
