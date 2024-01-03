import wedding1 from "../../img/outside/wedding/wedding1.jpg";
import wedding2 from "../../img/outside/wedding/wedding2.jpg";
import wedding3 from "../../img/outside/wedding/wedding3.jpg";
import wedding4 from "../../img/outside/wedding/wedding4.jpg";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";

const Wedding = () => {
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
      <h3 className="m-8 font-bold text-center">เลือกแพ็คเกจ</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={wedding1}
            id="outsideWedding1"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3 className="">29,900 บาท</h3>
          <p> พิธีหมั้น + ยกน้ำชา</p>
        </div>
        <div className="flex w-[130px] flex-col  items-center">
          <img
            src={wedding2}
            id="outsideWedding2"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>39,900 บาท</h3>
          <p> พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์</p>
        </div>
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={wedding3}
            id="outsideWedding3"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>49,900 บาท</h3>
          <p>พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + ไทยบุฟเฟต์</p>
        </div>
        <div className="flex w-[130px] flex-col items-center">
          <img
            src={wedding4}
            id="outsideWedding4"
            className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
            onClick={onClickHandler}
          />
          <h3>59,900 บาท</h3>
          <p>พิธีฉลองมงคลสมรส + อาหารจัดเลี้ยง</p>
        </div>
      </div>
    </>
  );
};

export default Wedding;
