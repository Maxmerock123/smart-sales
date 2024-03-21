import React, { useContext } from "react";
import FormDataContext from "../FormDataContext";
import { useNavigate } from "react-router-dom";
import { checkPeople } from "../script/checkPeople";

const CardItem = ({
  id,
  url,
  directUrl,
  img,
  body,
  price,
  customPrice,
  isFixedPackage,
  dataType,
  isHidePrice,
  place,
  checkIsSkip,
  leastPeopleSize,
}) => {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormDataContext);

  // Price Calculator
  let people = formData.generalForm.people;
  function findPrice(price, people) {
    if (isFixedPackage == false) {
      let result = 0;
      //console.log(`people: ${people}`);
      if (people == 0) {
        //console.log("case 0");
        return 0;
      } else if (people <= 30 && place != "inside") {
        //console.log("case1");
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
    if (leastPeopleSize) {
      if (formData.generalForm.people < leastPeopleSize) {
        navigate("/");
        alert(`บริการนี้ กำหนดขั้นต่า ${leastPeopleSize} ไว้ที่คนค่ะ`);
        console.log("navigating to /");
        return 0;
      }
    }

    setFormData({
      ...formData,
      generalForm: {
        ...formData.generalForm,
        eventName: body,
        price: findPrice(price, people),
        id: id,
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
      //console.log("have directURL");
      window.location.replace(directUrl);
    } else {
      //console.log("don't have directURL, navigate to url");
      navigate(url);
    }
  }

  return (
    <>
      <div className="flex w-[40%] animate-fade-down flex-col items-center duration-300 ease-in animate-once  lg:w-[300px]">
        <img
          src={img}
          id={id}
          className="aspect-square w-[100%] rounded-[15px] bg-white object-scale-down object-left shadow-2xl lg:w-[200px]  "
          onClick={onClickHandler}
        />
        <p className="text-center">{body}</p>

        <h3>
          {isHidePrice
            ? " "
            : price && (
                <h3 className="font-bold">
                  {customPrice ? customPrice : price.toLocaleString() + "บาท"}
                </h3>
              )}
        </h3>
      </div>
    </>
  );
};

export default CardItem;
