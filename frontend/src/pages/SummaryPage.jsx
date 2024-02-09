import React, { useContext, useRef } from "react";
import FormDataContext from "../FormDataContext";
import html2canvas from "html2canvas";

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

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div
        className="w-[400px] rounded-lg bg-white p-3 shadow"
        ref={imageContainerRef}
      >
        <h2 className="m-3 text-2xl font-bold">ใบสรุปรายการ</h2>
        <table className="table-auto ">
          <tbody className="">
            <tr>
              <td className="px-2 py-2 font-bold">ชื่อ-นามสกุล:</td>
              <td className="px-2 py-2">
                {formData.generalForm.name ? formData.generalForm.name : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">เบอร์โทรศัพท์:</td>
              <td className="px-2 py-2">
                {formData.generalForm.number
                  ? formData.generalForm.number
                  : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">E-mail:</td>
              <td className="px-2 py-2">
                {formData.generalForm.email ? formData.generalForm.email : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">จำนวนแขก:</td>
              <td className="px-2 py-2">
                {formData.generalForm.people
                  ? formData.generalForm.people
                  : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">วันที่จัด:</td>
              <td className="px-2 py-2">
                {formData.generalForm.date ? formData.generalForm.date : "-"}
              </td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">สถานที่จัดงาน:</td>
              <td className="px-2 py-2">
                {formData.generalForm.place ? formData.generalForm.place : "-"}{" "}
                {formData.generalForm.address
                  ? formData.generalForm.address
                  : "-"}
              </td>{" "}
            </tr>
            <tr>
              <td className="px-2 py-2 font-bold">ประเภทของงาน:</td>
              <td className="px-2 py-2">
                {formData.generalForm.eventType}
                {formData.generalForm.eventName}
              </td>
            </tr>
            <br></br>
            <tr>
              <td className="px-2 py-2 font-bold ">ราคาโดยประมาณ:</td>
              <td className="px-2 py-2">
                {!formData.generalForm.price
                  ? "ยังไม่สามารถประเมินราคาได้ โปรดติดต่อฝ่ายขายด้วยข้อมูลนี้แล้วจะทำการประเมินราคาให้ค่ะ"
                  : formData.generalForm.price.toLocaleString() + " บาท"}{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-center">
          <p className="w-[300px] text-center text-xs">
            ( *หมายเหตุ ราคานี้ไม่ได้รวมค่าขนส่ง เป็นราคาเริ่มต้นเท่านั้น
            <br />
            ฝ่ายขายจะติดต่อกลับไปเพื่อแจ้งราคาจริงให้อีกครั้ง )
          </p>
        </div>
      </div>
      <div className="flex w-[350px] justify-end">
        <button
          className="rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
          onClick={generateImage}
        >
          บันทึกใบสรุปรายการ
        </button>
      </div>
    </div>
  );
};

export default SummaryPage;
