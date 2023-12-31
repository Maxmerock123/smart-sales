import wedding1 from "../../img/outside/wedding/wedding1.jpg";
import wedding2 from "../../img/outside/wedding/wedding2.jpg";
import wedding3 from "../../img/outside/wedding/wedding3.jpg";
import wedding4 from "../../img/outside/wedding/wedding4.jpg";
import React, { useContext } from "react";
import CardItem from "../../components/CardItem";

const Wedding = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between gap-10">
          <CardItem
            id="outsideWedding1"
            img={wedding1}
            body="พิธีหมั้น + ยกน้ำชา"
            url={"/summaryPage"}
            price={29900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding2"
            img={wedding2}
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
            url={"/summaryPage"}
            price={39900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding3"
            img={wedding3}
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + ไทยบุฟเฟต์"
            url={"/summaryPage"}
            price={49900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding4"
            img={wedding4}
            body="พิธีฉลองมงคลสมรส + อาหารจัดเลี้ยง"
            url={"/summaryPage"}
            price={59900}
            isFixedPackage={true}
          />
        </div>
      </div>
    </>
  );
};

export default Wedding;
