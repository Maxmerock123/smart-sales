import React from "react";
import meetingImg from "../img/img-btn-meeting.png";
import partyImg from "../img/img-btn-party.png";
import ceremonyImg from "../img/img-btn-bhudda.png";
import weddingImg from "../img/img-btn-wedding.png";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";
import logo from "../img/impact-logo-other.png";
import productLaunchImg from "../img/outside/productLaunch/productLaunch1.jpg";
import equipmentRental from "../img/outside/equipmentRental/equipmentRental1.jpg";

const OutsideServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภทการจัดงาน</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="Meeting"
            img={meetingImg}
            body={"งานประชุม/สัมมนา/อบรม"}
            url="Meeting"
            dataType="eventType"
          />
          <CardItem
            id="Party"
            img={partyImg}
            url="Party"
            body={"งานเลี้ยงสังสรรค์"}
            dataType="eventType"
          />
          <CardItem
            id="Wedding"
            img={weddingImg}
            url="Wedding"
            body={"งานแต่งงาน "}
            dataType="eventType"
          />
          <CardItem
            id="BhuddistCeremony"
            img={ceremonyImg}
            body={"งานทำบุญบ้าน / ออฟฟิศ / พิธีสงฆ์ "}
            url="BhuddistCeremony"
            dataType="eventType"
          />
          <CardItem
            id="ProductLaunching"
            img={productLaunchImg}
            body={"งานเปิดตัวสินค้า / เปิดกิจการ"}
            url="ProductLaunching"
            dataType="eventType"
          />
          <CardItem
            id="EquipmentRental"
            img={equipmentRental}
            body={"เช่าอุปกรณ์จัดเลี้ยง"}
            directUrl="https://impact-catering.com/service/equipment-rental/"
            dataType="eventType"
          />
          <CardItem id="OtherForm" body="อื่นๆ" img={logo} url={"/OtherForm"} />
        </div>
      </div>
    </>
  );
};

export default OutsideServices;
