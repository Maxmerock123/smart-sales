import React, { useContext, useEffect } from "react"; // Add useContext
import style from "./GeneralForm.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import FormDataContext from "../FormDataContext";
import PdpaModal from "./PdpaModal";

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
    //console.log(formData.generalForm);
  };

  function isValidInput() {
    const { name, email, number, people, address } = formData.generalForm;
    if (name && number && people) {
      if (number.length == 10) {
        setFormData({
          ...formData,
          generalForm: {
            ...formData.generalForm,
            isInput: true,
          },
        });
      } else {
        alert("กรุณาใส่เลขเบอร์โทร ให้ครบ 10 หลักค่ะ");
        return false;
      }

      return true;
    } else {
      return false;
    }
  }

  const navigate = useNavigate();

  const onSumbitHandler = (e) => {
    e.preventDefault();
    if (isValidInput() == true) {
      navigate("PlacePage");
    } else {
      setShowModal(true);
    }
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
      <PdpaModal />

      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex w-full animate-fade-down flex-col rounded-[15px] border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-3xl font-semibold">โปรดกรอกข้อมูล</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="my-4 text-lg leading-relaxed text-blueGray-500">
                    โปรดกรอกชื่อ ,เบอร์โทร (เลข 10 หลัก), จำนวนแขก
                    ให้ครบถ้วนและถูกต้อง แล้วเลือกถัดไปค่ะ
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-custom-brown hover:shadow-lg focus:outline-none active:bg-emerald-600"
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
        <form className="flex flex-col w-full gap-5 animate-fade-down animate-delay-300 animate-once animate-ease-out">
          <div>
            <label className="text-black" htmlFor="name">
              ชื่อ-นามสกุล / ชื่อบริษัท
            </label>
            <label className="text-red-500"> *</label>
            <br />
            <input
              className="h-8 min-w-[250px] rounded-[15px]  border-[1px] border-stone-300 shadow-2xl"
              type="text"
              placeholder="ชื่อ-นามสกุล / ชื่อบริษัท"
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
              className="h-8 min-w-[250px] rounded-[15px] border-[1px] border-stone-300 shadow-2xl [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              id="number"
              name="number"
              placeholder="ตัวเลข 10 หลัก"
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
              type="email"
              placeholder="ex. name@mymail.com"
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
          <div className="flex items-end justify-between gap-5">
            <div>
              <label className="text-black" htmlFor="name">
                จำนวนผู้เข้าร่วมงาน
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
            <div className="flex justify-end gap-10 m-5">
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
