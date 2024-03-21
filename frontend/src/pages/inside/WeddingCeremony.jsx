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
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5 lg:w-[50%] lg:justify-center">
          <CardItem
            id="insideWeddingThaiChineseTable"
            img={thaiBuffet}
            price={1050}
            customPrice={"10,500 บาท/โต๊ะ"}
            isFixedPackage={false}
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
            price={1090} // this is price per person
            customPrice={"10,900 บาท/โต๊ะ"} // this is price per table
            isFixedPackage={false}
            body="โต๊ะจีน (สำหรับ 10 ท่าน)"
          />
        </div>
      </div>
    </>
  );
};

export default WeddingCeremony;
