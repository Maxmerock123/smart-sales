import wedding1 from "../../img/outside/wedding/wedding1.jpg";
import wedding2 from "../../img/outside/wedding/wedding2.jpg";
import wedding3 from "../../img/outside/wedding/wedding3.jpg";
import wedding4 from "../../img/outside/wedding/wedding4.jpg";
import wedding5 from "../../img/outside/wedding/wedding5.jpg";
import wedding6 from "../../img/outside/wedding/wedding6.jpg";

import React, { useContext } from "react";
import CardItem from "../../components/CardItem";

const Wedding = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="outsideWedding1"
            img={wedding1}
            body="พิธีหมั้น + ยกน้ำชา + อาหารว่าง"
            url={"/summaryPage"}
            price={29900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding2"
            img={wedding2}
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + ซุ้มอาหาร"
            url={"/summaryPage"}
            price={39900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding3"
            img={wedding5}
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + ไทยบุฟเฟต์"
            url={"/summaryPage"}
            price={49900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideWedding4"
            img={wedding6}
            body="พิธีฉลองมงคลสมรส + อาหารจัดเลี้ยง"
            url={"/summaryPage"}
            price={54500}
            isFixedPackage={true}
          />
        </div>
      </div>
    </>
  );
};

export default Wedding;
