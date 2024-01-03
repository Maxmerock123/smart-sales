import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, url, body, price }) => {
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
      <div className="flex w-[130px] flex-col items-center">
        <img
          src={url}
          id={id}
          className="aspect-square w-[130px] rounded-[15px] bg-gray-300 object-cover object-left"
          onClick={onClickHandler}
        />
        <h3>{price}</h3>
        <p>{body}</p>
      </div>
    </>
  );
};

export default CardItem;
