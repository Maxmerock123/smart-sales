import React, { useContext } from "react";
import privateParty from "../../img/food/privateParty.jpg";
import FormDataContext from "../../FormDataContext";
import { useNavigate } from "react-router-dom";

const Party = () => {
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
        <div className="flex w-[300px] flex-col items-center ">
          <img
            src={privateParty}
            id="outsideParty"
            className="h-[150px] rounded-[15px] bg-gray-300 object-cover"
            onClick={onClickHandler}
          />
          <p>19,900 บาท</p>
          <p>งานเลี้ยงสังสรรค์ + ค็อกเทลสำหรับแขก</p>
        </div>
      </div>
    </>
  );
};

export default Party;
