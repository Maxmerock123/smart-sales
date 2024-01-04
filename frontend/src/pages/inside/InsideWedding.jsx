import { useNavigate } from "react-router-dom";

import CardItem from "../../components/CardItem";
import wedding0 from "../../img/inside/wedding0.jpg";
import engage0 from "../../img/inside/engage0.jpg";
import React, { useContext } from "react";
import FormDataContext from "../../FormDataContext";

const InsideWedding = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventType: e.target.id,
      },
    });
    navigate("/SummaryPage");
  }

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <CardItem
          img={engage0}
          url="EngagementCeremony"
          body="พิธีหมั้น"
          id="EngagementCeremony"
          onClick={onClickHandler}
        />
        <CardItem
          img={wedding0}
          body="งานเลี้ยง ฉลองมงคลสมรส"
          url="WeddingCeremony"
          id="WeddingCeremony"
          onClick={onClickHandler}
        />
      </div>
    </>
  );
};

export default InsideWedding;
