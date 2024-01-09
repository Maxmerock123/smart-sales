import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, url, img, body, price, isFixedPackage }) => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  let people = formData.generalForm.people;
  function findPrice(price, people) {
    if (isFixedPackage == false) {
      let result = price * people;
      return result;
    } else {
      return price;
    }
  }

  function onClickHandler(e) {
    console.log(`clicked on ${e.target.id}`);
    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventType: e.target.id,
        eventName: body,
        price: findPrice(price, people),
      },
    });
    navigate(url);
  }

  return (
    <>
      <div className="flex max-w-[130px] flex-col items-center">
        <img
          src={img}
          id={id}
          className="aspect-square min-w-[130px] rounded-[15px] bg-gray-300 object-cover object-left shadow-lg"
          onClick={onClickHandler}
        />
        <h3>
          {price} {price && <>บาท</>}
        </h3>
        <p>{body}</p>
      </div>
    </>
  );
};

export default CardItem;
