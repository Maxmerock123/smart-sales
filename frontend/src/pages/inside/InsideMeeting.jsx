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
      <h3 className="m-8 font-bold text-center">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="insideCoffeeBreak1"
            img={coffeeBreak1}
            url={"/summaryPage"}
            price={500}
            body="ประชุมพร้อมคอฟฟี่เบรค"
            isFixedPackage={false}
          />
          <CardItem
            id="insideCoffeeBreak2"
            img={coffeeBreak2}
            url={"/summaryPage"}
            price={950}
            body="ประชุมครึ่งวัน คอฟฟี่เบรค 1 พร้อมอาหารกลางวัน"
            isFixedPackage={false}
          />
          <CardItem
            id="insideCoffeeBreak3"
            img={coffeeBreak3}
            url={"/summaryPage"}
            price={1050}
            isFixedPackage={false}
            body="ประชุมเต็มวัน  คอฟฟี่เบรค 2 พร้อมอาหารกลางวัน"
          />
        </div>
      </div>
    </>
  );
};

export default InsideMeeting;
