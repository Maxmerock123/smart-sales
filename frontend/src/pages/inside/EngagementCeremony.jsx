import CardItem from "../../components/CardItem";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";

const EngagementCeremony = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between gap-10">
          <CardItem
            id="insideEngage1"
            body="พิธีหมั้น + ยกน้ำชา"
            url={"/summaryPage"}
          />
          <CardItem
            id="insideEngage2"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
            url={"/summaryPage"}
          />
          <CardItem
            id="insideEngage3"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + พิธีสงฆ์"
            url={"/summaryPage"}
          />
        </div>
      </div>
    </>
  );
};

export default EngagementCeremony;
