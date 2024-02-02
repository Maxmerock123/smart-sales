import React from "react";
import meetingImg from "../img/img-btn-meeting.png";
import partyImg from "../img/img-btn-party.png";
import ceremonyImg from "../img/img-btn-bhudda.png";
import weddingImg from "../img/img-btn-wedding.png";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";
import logo from "../img/impact-logo-other.png";

const OutsideServices = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="m-8 font-bold text-center">เลือกประเภทงาน</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="Meeting"
            img={meetingImg}
            body={"ประชุม / สัมมนา / อบรม"}
            url="Meeting"
          />
          <CardItem
            id="Party"
            img={partyImg}
            url="Party"
            body={"งานเลี้ยงสังสรรค์"}
          />
          <CardItem
            id="Wedding"
            img={weddingImg}
            url="Wedding"
            body={"งานแต่งงาน "}
          />
          <CardItem
            id="BhuddistCeremony"
            img={ceremonyImg}
            body={"งานทำบุญ / พิธีสงฆ์ "}
            url="BhuddistCeremony"
          />
          <CardItem
            id="ProductLaunching"
            img=""
            body={"งานเปิดตัวสินค้า / เปิดกิจการ"}
            url="ProductLaunching"
          />
          <CardItem
            id="EquipmentRental"
            img=""
            body={"เช่าอุปกรณ์จัดเลี้ยง"}
            url="EquipmentRental"
          />
          <CardItem id="OtherForm" body="อื่นๆ" img={logo} url={"/OtherForm"} />
        </div>
      </div>
    </>
  );
};

export default OutsideServices;
