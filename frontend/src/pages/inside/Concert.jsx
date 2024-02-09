import React, { useContext } from "react";
import CardItem from "../../components/CardItem";
import logo from "../../public/impact-logo.png";

const Concert = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="Concert1"
            img={logo}
            url={"/summaryPage"}
            body="คอนเสิร์ต ต่ำกว่า 2,500 คน"
            dataType={"concert"}
          />
          <CardItem
            id="Concert2"
            img={logo}
            url={"/summaryPage"}
            body="คอนเสิร์ต 2,500 - 4,000 คน"
            dataType={"concert"}
          />
          <CardItem
            id="Concert3"
            img={logo}
            url={"/summaryPage"}
            body="คอนเสิร์ต 4,000 - 6,000 คน"
            dataType={"concert"}
          />
          <CardItem
            id="Concert4"
            img={logo}
            url={"/summaryPage"}
            body="คอนเสิร์ต 6,000 คนขึ้นไป"
            dataType={"concert"}
          />
        </div>
      </div>
    </>
  );
};

export default Concert;
