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
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <div className="flex flex-col items-center">
            <img
              src={coffeeBreakImg}
              id="outsideCoffee"
              className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-top"
              onClick={onClickHandler}
            />
            <p>คอฟฟี่เบรค</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={thaiBuffetImg}
              id="outsideThaiBuffet"
              className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover"
              onClick={onClickHandler}
            />
            <p>ไทยบุฟเฟ่ต์</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={cocktailImg}
              id="outsideCocktail"
              className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover"
              onClick={onClickHandler}
            />
            <p>ค็อกเทล</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={westernSetImg}
              id="outsideWesternSet"
              className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover"
              onClick={onClickHandler}
            />
            <p>อาหารนานาชาติ</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={chineseTableImg}
              id="outsideChineseTable"
              className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover"
            />
            <p>โต๊ะจีน (10 ท่าน)</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meeting;
