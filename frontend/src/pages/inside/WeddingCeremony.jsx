import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import CardItem from "../../components/CardItem";
import thaiBuffet from "../../img/inside/thai-chinese-table.jpg";
import internationalBuffet from "../../img/inside/international-buffet.jpg";
import chineseTable from "../../img/inside/chinese-table.png";
import cocktail from "../../img/food/cocktail.jpg";

const WeddingCeremony = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CardItem
          id="insideWeddingThaiChineseTable"
          img={thaiBuffet}
          price={10500}
          isFixedPackage={true}
          url={"/summaryPage"}
          body="โต๊ะไทยจีน {hide 10500}"
        />
        <CardItem
          id="insideWeddingCocktail"
          img={cocktail}
          url={"/summaryPage"}
          price={990}
          isFixedPackage={false}
          body="ค็อกเทล {hide 990}"
        />
        <CardItem
          id="insideWeddingInternationalBuffet"
          img={internationalBuffet}
          url={"/summaryPage"}
          price={990}
          isFixedPackage={false}
          body="บุฟเฟต์อาหารไทยและเวสเทิร์น {hide 990}"
        />
        <CardItem
          id="insideWeddingChineseTable"
          img={chineseTable}
          url={"/summaryPage"}
          price={10900}
          isFixedPackage={true}
          body="โต๊ะจีน (สำหรับ 10 ท่าน) {hide 10900}"
        />
      </div>
    </>
  );
};

export default WeddingCeremony;
