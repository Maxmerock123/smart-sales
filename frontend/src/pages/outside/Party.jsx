import React, { useContext } from "react";
import privateParty from "../../img/food/privateParty.jpg";
import FormDataContext from "../../FormDataContext";
import { useNavigate } from "react-router-dom";
import CardItem from "../../components/CardItem";

const Party = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือก Package</h3>
      <div className="flex justify-center">
        <div className="mt-10 flex w-[80%] flex-wrap justify-center gap-10">
          <CardItem
            id="outsideMeetingCoffeeBreak"
            body="งานเลี้ยงสังสรรค์ + ค็อกเทลสำหรับแขก"
            img={privateParty}
            url={"/summaryPage"}
            price="19900"
          />
        </div>
      </div>
    </>
  );
};

export default Party;
