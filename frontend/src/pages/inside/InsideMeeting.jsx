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

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      eventForm: {
        ...formData.eventForm,
        eventType: e.target.id,
      },
    });
    navigate("/SummaryPage");
  }

  return (
    <>
      <h3 className="m-8 font-bold text-center">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-between gap-10 mt-10  w-[80%]">
          <CardItem
            id="insideCoffeeBreak1"
            url={coffeeBreak1}
            body="ประชุมพร้อมคอฟฟี่เบรค {hide 500}"
            onClick={onClickHandler}
          />
          <CardItem
            id="insideCoffeeBreak2"
            url={coffeeBreak2}
            body="ประชุมครึ่งวัน คอฟฟี่เบรค 1 พร้อมอาหารกลางวัน {hide 950}"
            onClick={onClickHandler}
          />
          <CardItem
            id="insideCoffeeBreak3"
            url={coffeeBreak3}
            body="ประชุมเต็มวัน  คอฟฟี่เบรค 2 พร้อมอาหารกลางวัน {hide 1050}"
            onClick={onClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default InsideMeeting;
