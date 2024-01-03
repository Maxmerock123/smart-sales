import React from "react";
import CardItem from "../../components/CardItem";

const EngagementCeremony = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between gap-10">
          <CardItem id="engage1" body="พิธีหมั้น + ยกน้ำชา" />
          <CardItem
            id="engage2"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์"
          />
          <CardItem
            id="engage3"
            body="พิธีหมั้น + ยกน้ำชา + หลั่งน้ำพระพุทธมนต์ + พิธีสงฆ์"
          />
        </div>
      </div>
    </>
  );
};

export default EngagementCeremony;
