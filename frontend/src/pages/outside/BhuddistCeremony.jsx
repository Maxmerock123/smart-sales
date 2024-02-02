import React, { useContext } from "react";
import bhuddistCeremony1 from "../../img/outside/bhuddistCeremony/bhuddistCeremony1.jpg";
import bhuddistCeremony2 from "../../img/outside/bhuddistCeremony/bhuddistCeremony2.jpg";
import bhuddistCeremony3 from "../../img/outside/bhuddistCeremony/bhuddistCeremony3.jpg";
import bhuddistCeremony4 from "../../img/outside/bhuddistCeremony/bhuddistCeremony4.jpg";
import { useNavigate, Navigate } from "react-router-dom";
import FormDataContext from "../../FormDataContext";
import CardItem from "../../components/CardItem";

const BhuddistCeremony = () => {
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
      <h3 className="m-8 text-center font-bold">เลือกประเภทอาหาร</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-between  gap-10">
          <CardItem
            id="outsideBhuddistCeremony1"
            img={bhuddistCeremony1}
            url={"/summaryPage"}
            price={6900}
            isFixedPackage={true}
            body="อุปกรณ์พิธีสงฆ์ + ชุดอาหารถวายพระสงฆ์ "
          />
          <CardItem
            id="outsideBhuddistCeremony2"
            img={bhuddistCeremony2}
            url={"/summaryPage"}
            price={7900}
            isFixedPackage={true}
            body="อุปกรณ์พิธีสงฆ์ + อาหารถวายพระสงฆ์แบบขันโตก  "
          />
          <CardItem
            id="outsideBhuddistCeremony3"
            img={bhuddistCeremony3}
            url={"/summaryPage"}
            price={11900}
            isFixedPackage={true}
            body="อุปกรณ์พิธีสงฆ์ + อาหารถวายพระสงฆ์แบบขันโตก  + ไทยบุฟเฟต์"
          />
          <CardItem
            id="outsideBhuddistCeremony4"
            img={bhuddistCeremony4}
            url={"/summaryPage"}
            price={15900}
            isFixedPackage={true}
            body="อุปกรณ์พิธีสงฆ์ + อาหารถวายพระสงฆ์แบบขันโตก  + ไทยบุฟเฟต์พรีเมี่ยม "
          />
        </div>
      </div>
    </>
  );
};

export default BhuddistCeremony;
