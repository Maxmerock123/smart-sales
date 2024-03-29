import CardItem from "../../components/CardItem";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import engage1 from "../../img/inside/engage1.jpg";
import engage3 from "../../img/inside/engage2.jpg";
import engage2 from "../../img/inside/engage3.jpg";

const EngagementCeremony = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5 lg:justify-center">
          <CardItem
            id="insideEngage1"
            body="พิธีหมั้น + ยกน้ำชา"
            url={"/summaryPage"}
            price={34900}
            img={engage1}
            isFixedPackage={true}
          />
          <CardItem
            id="insideEngage2"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
            url={"/summaryPage"}
            price={44900}
            img={engage2}
            isFixedPackage={true}
          />
          <CardItem
            id="insideEngage3"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + พิธีสงฆ์"
            url={"/summaryPage"}
            price={54900}
            img={engage3}
            isFixedPackage={true}
          />
        </div>
      </div>
    </>
  );
};

export default EngagementCeremony;
