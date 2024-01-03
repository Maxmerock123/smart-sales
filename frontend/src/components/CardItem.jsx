import React from "react";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, url, body, price }) => {
  const navigate = useNavigate();
  function onClickHandler(e) {
    if (e.target.id == "OtherForm") {
      navigate("/OtherForm");
    } else if (e.target.id) {
      navigate(e.target.id);
    } else {
      console.log("element id not assigned");
    }
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
