import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import CardItem from "../../components/CardItem";
import coffeeBreak1 from "../../img/inside/coffee-break1.jpg";
import coffeeBreak2 from "../../img/inside/coffee-break2.jpg";
import coffeeBreak3 from "../../img/inside/coffee-break3.jpg";

const InsideMeeting = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="insideCoffeeBreak1"
            img={coffeeBreak1}
            url={"/summaryPage"}
            body="ประชุมพร้อมคอฟฟี่เบรค {hide 500}"
          />
          <CardItem
            id="insideCoffeeBreak2"
            img={coffeeBreak2}
            url={"/summaryPage"}
            body="ประชุมครึ่งวัน คอฟฟี่เบรค 1 พร้อมอาหารกลางวัน {hide 950}"
          />
          <CardItem
            id="insideCoffeeBreak3"
            img={coffeeBreak3}
            url={"/summaryPage"}
            body="ประชุมเต็มวัน  คอฟฟี่เบรค 2 พร้อมอาหารกลางวัน {hide 1050}"
          />
        </div>
      </div>
    </>
  );
};

export default InsideMeeting;
