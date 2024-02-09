import React, { useContext } from "react";
import meetingImg from "../img/img-btn-meeting.png";
import partyImg from "../img/img-btn-party.png";
import ceremonyImg from "../img/img-btn-bhudda.png";
import weddingImg from "../img/img-btn-wedding.png";
import { useNavigate } from "react-router-dom";
import CardItem from "../components/CardItem";
import logo from "../img/impact-logo-other.png";
import FormDataContext from "../FormDataContext";

const InsideServices = () => {
  const navigate = useNavigate();

  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภทการจัดงาน</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="Meeting"
            img={meetingImg}
            body={"งานประชุม / สัมมนา / อบรม (ราคาประชุมเต็มวัน)"}
            url={"/summaryPage"}
            price={15000}
            isFixedPackage={false}
            isHidePrice={true}
            place={"inside"}
          />
          <CardItem
            id="Party"
            img={partyImg}
            url={"/summaryPage"}
            body={"งานเลี้ยงสังสรรค์ (ราคาอิงตามบุฟเฟต์อาหารไทย)"}
            price={700}
            isFixedPackage={false}
            isHidePrice={true}
          />
          <CardItem
            id="Wedding"
            img={weddingImg}
            url="Wedding"
            body={"งานแต่งงาน "}
            dataType="eventType"
          />
          <CardItem
            id="Concert"
            img={logo}
            url="Concert"
            body={"งานคอนเสิร์ต"}
            dataType="eventType"
          />
          <CardItem id="OtherForm" body="อื่นๆ" img={logo} url="/OtherForm" />
        </div>
      </div>
    </>
  );
};

export default InsideServices;
