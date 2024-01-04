import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import chineseTableImg from "../../img/food/chineseTable.jpg";
import cocktailImg from "../../img/food/cocktail.jpg";
import coffeeBreakImg from "../../img/food/coffeeBreak.jpg";
import westernSetImg from "../../img/food/westernSet.jpg";
import thaiBuffetImg from "../../img/food/thaiBuffet.jpg";
import CardItem from "../../components/CardItem";

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
            id="outsideMeetingCoffeeBreak"
            body="คอฟฟี่เบรค"
            img={coffeeBreakImg}
            url={"/summaryPage"}
          />
          <CardItem
            id="outsideMeetingThaiBuffet"
            body="ไทยบุฟเฟต์"
            img={thaiBuffetImg}
            url={"/summaryPage"}
          />
          <CardItem
            id="outsideMeetingCocktail"
            img={cocktailImg}
            body="ค็อกเทล"
            url={"/summaryPage"}
          />
          <CardItem
            id="outsideMeetingWesternSet"
            img={westernSetImg}
            body="อาหารนานาชาติ"
            url={"/summaryPage"}
          />
          <CardItem
            id="outsideMeetingChineseTable"
            img={chineseTableImg}
            body="โต๊ะจีน"
            url={"/summaryPage"}
          />
        </div>
      </div>
    </>
  );
};

export default Meeting;
