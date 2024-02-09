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
      <h3 className="m-8 font-bold text-center">เลือกแพ็คเกจ</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="insideThaiBuffet"
            img={thaiBuffet}
            url={"/summaryPage"}
            price={700}
            body="ไทยบุฟเฟต์"
            isFixedPackage={false}
          />
          <CardItem
            id="insideCocktail"
            img={cocktail}
            url={"/summaryPage"}
            price={720}
            body="ค็อกเทล"
            isFixedPackage={false}
          />
          <CardItem
            id="insideInternationalBuffet"
            img={internationalBuffet}
            url={"/summaryPage"}
            price={770}
            body="บุฟเฟต์อาหารไทยและเวสเทิร์น"
            isFixedPackage={false}
          />
          <CardItem
            id="insideChineseTable"
            img={chineseTable}
            url={"/summaryPage"}
            price={8900}
            body="โต๊ะจีน (สำหรับ 10 ท่าน)"
            isFixedPackage={false}
            
          />
        </div>
      </div>
    </>
  );
};

export default InsideParty;
