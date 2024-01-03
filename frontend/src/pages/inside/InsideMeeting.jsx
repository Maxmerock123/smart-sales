import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import CardItem from "../../components/CardItem";
import coffeeBreak1 from "../../img/inside/coffee-break1.jpg";
import coffeeBreak2 from "../../img/inside/coffee-break2.jpg";
import coffeeBreak3 from "../../img/inside/coffee-break3.jpg";

const InsideMeeting = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  function onClickHandlerTest(e) {
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
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="insideCoffeeBreak1"
            url={coffeeBreak1}
            body="ประชุมพร้อมคอฟฟี่เบรค {hide 500}"
            onClick={onClickHandlerTest}
          />
          <CardItem
            id="insideCoffeeBreak2"
            url={coffeeBreak2}
            body="ประชุมครึ่งวัน คอฟฟี่เบรค 1 พร้อมอาหารกลางวัน {hide 950}"
            onClick={onClickHandlerTest}
          />
          <CardItem
            id="insideCoffeeBreak3"
            url={coffeeBreak3}
            body="ประชุมเต็มวัน  คอฟฟี่เบรค 2 พร้อมอาหารกลางวัน {hide 1050}"
            onClick={onClickHandlerTest}
          />
        </div>
      </div>
    </>
  );
};

export default InsideMeeting;
