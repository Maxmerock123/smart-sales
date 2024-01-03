import React from "react";
import meetingImg from "../img/img-btn-meeting.png";
import partyImg from "../img/img-btn-party.png";
import ceremonyImg from "../img/img-btn-bhudda.png";
import weddingImg from "../img/img-btn-wedding.png";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";

const OutsideServices = () => {
  const navigate = useNavigate();

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    if (e.target.id == "OtherForm") {
      navigate("/OtherForm");
    } else {
      navigate(e.target.id);
    }
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="Meeting"
            url={meetingImg}
            body={"ประชุม / สัมมนา / อบรม"}
          />
          <CardItem id="Party" url={partyImg} body={"งานเลี้ยงสังสรรค์"} />
          <CardItem id="Wedding" url={weddingImg} body={"งานแต่งงาน "} />
          <CardItem
            id="BhuddistCeremony"
            url={ceremonyImg}
            body={"งานทำบุญ / พิธีสงฆ์ "}
          />
          <CardItem id="OtherForm" body="อื่นๆ" />
        </div>
      </div>
    </>
  );
};

export default OutsideServices;
