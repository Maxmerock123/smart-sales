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
      <h3 className="m-8 font-bold text-center">เลือกแพ็คเกจ</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <CardItem
          id="insideWeddingThaiChineseTable"
          img={thaiBuffet}
          price={10500}
          isFixedPackage={true}
          url={"/summaryPage"}
          body="โต๊ะไทยจีน"
        />
        <CardItem
          id="insideWeddingCocktail"
          img={cocktail}
          url={"/summaryPage"}
          price={990}
          isFixedPackage={false}
          body="ค็อกเทล"
        />
        <CardItem
          id="insideWeddingInternationalBuffet"
          img={internationalBuffet}
          url={"/summaryPage"}
          price={990}
          isFixedPackage={false}
          body="บุฟเฟต์อาหารไทยและเวสเทิร์น"
        />
        <CardItem
          id="insideWeddingChineseTable"
          img={chineseTable}
          url={"/summaryPage"}
          price={10900}
          isFixedPackage={true}
          body="โต๊ะจีน (สำหรับ 10 ท่าน)"
        />
      </div>
    </>
  );
};

export default WeddingCeremony;
