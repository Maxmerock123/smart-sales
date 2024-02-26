import React, { useContext, useRef } from "react";
import FormDataContext from "../FormDataContext";
import html2canvas from "html2canvas";
import { BiSolidPhoneCall } from "react-icons/bi";

const SummaryPage = () => {
  const { formData } = useContext(FormDataContext);

  const imageContainerRef = useRef(null);

  const generateImage = () => {
    html2canvas(imageContainerRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "summary_page_impact_catering.png";
      link.click();
    });
  };

  function onClickHandler() {
    alert("clicked sent to sales");
  }

  const onCall = () => {
    window.open("tel:0886123858");
  };

  return (
    <div className="animate-fade-down animate-once flex flex-col items-center justify-center gap-5">
      <div
        className="w-[400px] rounded-lg bg-white p-3 shadow"
        ref={imageContainerRef}
      >
        <h2 className="m-3 text-2xl font-bold">ใบสรุปรายการ</h2>
        <table className="table-auto border-collapse border-2 ">
          <tbody className="">
            <tr>
              <td className="border px-2 font-bold ">ชื่อ-นามสกุล:</td>
              <td className="border px-2 ">
                {formData.generalForm.name ? formData.generalForm.name : "-"}
              </td>
            </tr>
            <tr>
              <td className="border px-2 font-bold">เบอร์โทรศัพท์:</td>
              <td className="border px-2 ">
                {formData.generalForm.number
                  ? formData.generalForm.number
                  : "-"}
              </td>
            </tr>
            <tr>
              <td className="border px-2 font-bold">E-mail:</td>
              <td className="border px-2">
                {formData.generalForm.email ? formData.generalForm.email : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 font-bold">จำนวนแขก:</td>
              <td className="px-2 ">
                {formData.generalForm.people
                  ? formData.generalForm.people
                  : "-"}
              </td>
            </tr>
            <tr>
              <td className="border px-2 font-bold">วันที่จัด:</td>
              <td className="border px-2">
                {formData.generalForm.date ? formData.generalForm.date : "-"}
              </td>
            </tr>
            <tr>
              <td className="border px-2 font-bold">สถานที่จัดงาน:</td>
              <td className="border px-2 ">
                {formData.generalForm.place ? formData.generalForm.place : "-"}{" "}
                {formData.generalForm.address
                  ? formData.generalForm.address
                  : "-"}
              </td>{" "}
            </tr>
            <tr>
              <td className="border px-2 font-bold">ประเภทของงาน:</td>
              <td className="border px-2">
                {formData.generalForm.eventType}{" "}
                {formData.generalForm.eventName}
              </td>
            </tr>
            <tr>
              <td className="border px-2 font-bold ">ราคาโดยประมาณ:</td>
              <td className="border px-2">
                {!formData.generalForm.price
                  ? "ฝ่ายขายจะทำการติดต่อกลับเพื่อแจ้งราคาโดยเร็วที่สุด"
                  : formData.generalForm.price.toLocaleString() + " บาท"}{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-center">
          <div className="my-5 w-[400px] text-center text-xs">
            <p>* ฝ่ายขายจะติดต่อกลับโดยเร็วที่สุด *</p>
            <br />
            <p className="m-3">หมายเหตุ</p>
            <div>
              <p className="underline">กรณีจัดงานในอิมแพ็ค เมืองทองธานี</p>
              <div className="flex-start flex flex-wrap">
                <p>
                  • สำหรับงานประชุม ราคาโดยประมาณที่คำนวณจากราคาประชุมเต็มวัน
                </p>
                <p>
                  • สำหรับงานเลี้ยงสังสรรค์
                  ราคาโดยประมานคำนวณจากราคาบุฟเฟต์อาหารไทย{" "}
                </p>
              </div>
            </div>
            <div className="flex-center flex flex-col items-center">
              <p className="underline">กรณีจัดงานนอกสถานที่</p>
              <div className="flex-start flex w-[300px] flex-wrap">
                <p>• ราคาดังกล่าวเป็นราคาเริ่มต้น และยังไม่รวมค่าขนส่ง</p>
                <p>• เงื่อนไขเป็นไปตามที่บริษัทกำหนด</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[350px] flex-col justify-end">
        <button
          className=" h-[50px] w-[350px]  rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
          onClick={generateImage}
        >
          บันทึกใบสรุปรายการ
        </button>
        <p className="text-center">
          * หรือ capture แล้วส่งให้ฝ่ายขายได้เลยค่ะ *
        </p>
        <button
          className="flex h-[50px] w-[350px] animate-pulse items-center justify-center gap-5 rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
          onClick={onCall}
        >
          โทรหาฝ่ายขาย <BiSolidPhoneCall size={30} />
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
