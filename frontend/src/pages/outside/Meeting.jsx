import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import chineseTableImg from "../../img/food/chineseTable.jpg";
import cocktailImg from "../../img/food/cocktail.jpg";
import coffeeBreakImg from "../../img/food/coffeeBreak.jpg";
import westernSetImg from "../../img/food/westernSet.jpg";
import thaiBuffetImg from "../../img/food/thaiBuffet.jpg";

const Meeting = () => {
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
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between gap-10">
          <CardItem
            id="insideEngage1"
            body="พิธีหมั้น + ยกน้ำชา"
            url={"/summaryPage"}
          />
          <CardItem
            id="insideEngage1"
            body="พิธีหมั้น + ยกน้ำชา"
            url={"/summaryPage"}
          />
          <CardItem
            id="insideEngage2"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
            url={"/summaryPage"}
          />
          <CardItem
            id="insideEngage3"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + พิธีสงฆ์"
            url={"/summaryPage"}
          />
        </div>
      </div>
    </>
  );
};

export default Meeting;
