import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { useNavigate } from "react-router-dom";

const CardItem = ({
  id,
  url,
  directUrl,
  img,
  body,
  price,
  isFixedPackage,
  dataType,
}) => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  // Price Finding
  let people = formData.generalForm.people;
  function findPrice(price, people) {
    if (isFixedPackage == false) {
      let result = 0;
      if (people <= 30) {
        result = price * 30;
      } else {
        result = price * people;
      }
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
        eventName: body,
        price: findPrice(price, people),
      },
    });

    if (dataType == "eventType") {
      setFormData({
        ...formData,
        generalForm: {
          ...formData.generalForm,
          eventType: body,
        },
      });
    }
    if (directUrl) {
      window.location.replace(directUrl);
    } else {
      navigate(url);
    }
  }

  return (
    <>
      <div className="flex max-w-[120px] flex-col items-center">
        <img
          src={img}
          id={id}
          className="aspect-square max-w-[120px] rounded-[15px] bg-white object-scale-down object-left shadow-lg"
          onClick={onClickHandler}
        />
        <p className="text-center">{body}</p>
        <h3>{price && <h3>{price.toLocaleString()} บาท</h3>}</h3>
      </div>
    </>
  );
};

export default CardItem;
