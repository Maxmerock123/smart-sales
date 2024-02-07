import React, { useContext } from "react";
import privateParty from "../../img/food/privateParty.jpg";
import FormDataContext from "../../FormDataContext";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/CardItem";
import party1Img from "../../img/outside/party/party1.jpg";
import party2Img from "../../img/outside/party/party2.jpg";

const Party = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกแพ็คเกจ</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-center gap-10">
          <CardItem
            id="outsideMeetingCoffeeBreak"
            body="แพ็คเกจงานเลี้ยงสังสรรค์ + อาหารเมนูค็อกเทล"
            img={party1Img}
            url={"/summaryPage"}
            price={19900}
            isFixedPackage={true}
          />
          <CardItem
            id="outsideMeetingCoffeeBreak"
            body="งานเลี้ยงสังสรรค์ + อาหารเมนูเซ็ตตะวันตก"
            img={party2Img}
            url={"/summaryPage"}
            price={27900}
            isFixedPackage={true}
          />
        </div>
      </div>
    </>
  );
};

export default Party;
