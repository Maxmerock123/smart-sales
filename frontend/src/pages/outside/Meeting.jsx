import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import chineseTableImg from "../../img/food/chineseTable.jpg";
import cocktailImg from "../../img/food/cocktail.jpg";
import coffeeBreakImg from "../../img/food/coffeeBreak.jpg";
import westernSetImg from "../../img/food/westernSet.jpg";
import thaiBuffetImg from "../../img/food/thaiBuffet.jpg";
import CardItem from "../../components/CardItem";
import thaiWesternBuffetImg from "../../img/food/thaiWesternBuffet.png";

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
      <h3 className="m-8 font-bold text-center">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="outsideMeetingCoffeeBreak"
            body="คอฟฟี่เบรค"
            img={coffeeBreakImg}
            url={"/summaryPage"}
            price={120}
            isFixedPackage={false}
          />
          <CardItem
            id="outsideMeetingThaiBuffet"
            body="บุฟเฟต์อาหารไทย"
            img={thaiBuffetImg}
            url={"/summaryPage"}
            price={380}
            isFixedPackage={false}
          />
          <CardItem
            id="outsideMeetingCocktail"
            img={cocktailImg}
            body="ค็อกเทล"
            url={"/summaryPage"}
            price={480}
            isFixedPackage={false}
          />
          <CardItem
            id="outsideMeetingThaiWesternBuffet"
            img={thaiWesternBuffetImg}
            body="บุฟเฟต์อาหารไทย-ตะวันตก"
            url={"/summaryPage"}
            price={580}
            isFixedPackage={false}
          />
          <CardItem
            id="outsideMeetingWesternSet"
            img={westernSetImg}
            body="อาหารเซ็ตตะวันตก"
            url={"/summaryPage"}
            price={680}
            isFixedPackage={false}
          />
          <CardItem
            id="outsideMeetingChineseTable"
            img={chineseTableImg}
            body="โต๊ะจีน-ไทย"
            url={"/summaryPage"}
            price={490}
            isFixedPackage={false}
          />
        </div>
      </div>
    </>
  );
};

export default Meeting;
