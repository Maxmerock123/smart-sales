import React from "react";
import meetingImg from "../img/img-btn-meeting.png";
import partyImg from "../img/img-btn-party.png";
import ceremonyImg from "../img/img-btn-bhudda.png";
import weddingImg from "../img/img-btn-wedding.png";
import { useNavigate } from "react-router-dom";

const InsideServices = () => {
  const navigate = useNavigate();

  function onClickHandler(e) {
    if (e.target.id == "OtherForm") {
      navigate("/OtherForm");
    } else {
      navigate(e.target.id);
    }
  }

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <img
            id="Meeting"
            src={meetingImg}
            className="w-[160px]"
            onClick={onClickHandler}
          />
          <p>งานประชุม / สัมมนา / อบรม</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            id="Party"
            src={partyImg}
            className="w-[160px]"
            onClick={onClickHandler}
          />
          <p>งานเลี้ยงสังสรรค์</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            id="Wedding"
            src={weddingImg}
            className="w-[160px]"
            onClick={onClickHandler}
          />
          <p>งานแต่งงาน</p>
        </div>
        <div className="flex flex-col items-center">
          <div
            id="OtherForm"
            className="aspect-square w-[150px] rounded-[15px] bg-gray-300"
            onClick={onClickHandler}
          ></div>
          <p>อื่นๆ</p>
        </div>
      </div>
    </>
  );
};

export default InsideServices;
