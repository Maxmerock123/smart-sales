import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem";
import wedding0 from "../../img/inside/wedding0.jpg";
import engage0 from "../../img/inside/engage0.jpg";
import React, { useContext } from "react";
import FormDataContext from "../../FormDataContext";
import engagementImg from "../../img/inside/new-icon/inside-engagement.jpg";
import weddingImg from "../../img/inside/new-icon/inside-ceremony.jpg";

const InsideWedding = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-center gap-5">
          <CardItem
            img={engagementImg}
            url="EngagementCeremony"
            body="พิธีหมั้น"
            id="EngagementCeremony"
          />
          <CardItem
            img={weddingImg}
            body="งานเลี้ยง ฉลองมงคลสมรส"
            url="WeddingCeremony"
            id="WeddingCeremony"
          />
        </div>
      </div>
    </>
  );
};

export default InsideWedding;
