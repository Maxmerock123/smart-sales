import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem";
import wedding0 from "../../img/inside/wedding0.jpg";
import engage0 from "../../img/inside/engage0.jpg";
import React, { useContext } from "react";
import FormDataContext from "../../FormDataContext";

const InsideWedding = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);


  return (
    <>
      <h3 className="m-8 font-bold text-center">เลือกแพ็คเกจ</h3>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <CardItem
          img={engage0}
          url="EngagementCeremony"
          body="พิธีหมั้น"
          id="EngagementCeremony"

        />
        <CardItem
          img={wedding0}
          body="งานเลี้ยง ฉลองมงคลสมรส"
          url="WeddingCeremony"
          id="WeddingCeremony"

        />
      </div>
    </>
  );
};

export default InsideWedding;
