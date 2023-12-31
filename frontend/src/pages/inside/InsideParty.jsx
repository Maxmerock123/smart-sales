import CardItem from "../../components/CardItem";
import thaiBuffet from "../../img/inside/thai-chinese-table.jpg";
import internationalBuffet from "../../img/inside/international-buffet.jpg";
import chineseTable from "../../img/inside/chinese-table.png";
import cocktail from "../../img/food/cocktail.jpg";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";

const InsideParty = () => {
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
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CardItem
          id="insideThaiBuffet"
          img={thaiBuffet}
          url={"/summaryPage"}
          price={700}
          body="ไทยบุฟเฟต์ {hide 700}"
          isFixedPackage={false}
        />
        <CardItem
          id="insideCocktail"
          img={cocktail}
          url={"/summaryPage"}
          price={720}
          body="ค็อกเทล {hide 720}"
          isFixedPackage={false}
        />
        <CardItem
          id="insideInternationalBuffet"
          img={internationalBuffet}
          url={"/summaryPage"}
          price={770}
          body="บุฟเฟต์อาหารไทยและเวสเทิร์น {hide 770}"
          isFixedPackage={false}
        />
        <CardItem
          id="insideChineseTable"
          img={chineseTable}
          url={"/summaryPage"}
          price={8900}
          body="โต๊ะจีน (สำหรับ 10 ท่าน) {hide 8900}"
          isFixedPackage={false}
        />
      </div>
    </>
  );
};

export default InsideParty;
