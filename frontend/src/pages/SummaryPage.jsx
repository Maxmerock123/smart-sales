import React, { useContext, useState, useRef } from "react";
import FormDataContext from "../FormDataContext";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import axios from "axios";

const SummaryPage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const { formData } = useContext(FormDataContext);
  const navigate = useNavigate();

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

  const onLinkTree = () => {
    window.open("https://linktr.ee/salesatimpact");
  };

  function onSendData(data) {
    axios
      .post("http://localhost:3000/summaryData", {
        name: formData.generalForm.name,
        number: formData.generalForm.number,
        email: formData.generalForm.email,
        place: formData.generalForm.place,
        eventType: formData.generalForm.eventType,
        eventName: formData.generalForm.eventName,
        people: formData.generalForm.people,
        date: formData.generalForm.date,
        address: formData.generalForm.address,
        price: formData.generalForm.price,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onClickHandler() {
    alert("clicked sent to sales");
  }

  const onCall = () => {
    window.open("tel:028335252");
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full animate-fade-down flex-col rounded-[15px] border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-3xl font-semibold">
                    ส่งข้อมูลสำเร็จ (ทดลองเท่านั้น)
                  </h3>
                  <button
                    className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-black opacity-5 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block h-6 w-6 bg-transparent text-2xl text-black opacity-5 outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <p className="text-blueGray-500 my-4 text-lg leading-relaxed">
                    ส่งข้อมูลไปยังฝ่ายขายเรียบร้อยแล้ว
                    หรือลูกค้าสามารถแคปภาพหน้าจอแล้วส่งมาโดยตรงที่ LINE IMPACT
                    Catering ได้เลยค่ะ
                  </p>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-custom-brown px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    รับทราบ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}

      {/* Page Content */}
      <div className="flex animate-fade-down flex-col items-center justify-center gap-5 animate-once lg:flex-row">
        <div
          className="sm:w-[400px]lg:w-[600px] rounded-[15px]  bg-white p-3 shadow-lg"
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
                  {formData.generalForm.email
                    ? formData.generalForm.email
                    : "-"}
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
                  {formData.generalForm.place
                    ? formData.generalForm.place
                    : "-"}{" "}
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
                <td className="border bg-stone-300 px-2 font-bold ">
                  ราคาเริ่มต้น:
                </td>
                <td className="border bg-stone-300 px-2">
                  {!formData.generalForm.price
                    ? "(ฝ่ายขายจะทำการติดต่อกลับเพื่อแจ้งราคาโดยเร็วที่สุด)"
                    : formData.generalForm.price.toLocaleString() + " บาท"}{" "}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-center">
            <div className="my-5 w-[400px] text-center text-sm">
              <br />
              <p className="m-3 underline ">หมายเหตุ</p>
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
                <br />
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
            onClick={() => setShowModal(true)}
            className=" flex h-[50px] w-[350px] items-center justify-center gap-5 rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
          >
            <MdAttachEmail size={30} />
            ส่งข้อมูลไปยังฝ่ายขาย
          </button>
          <p className="text-center">
            * หรือ capture ภาพ แล้วส่งให้ฝ่ายขายได้เลยค่ะ *
          </p>

          <button
            className="flex h-[50px] w-[350px] animate-pulse items-center justify-center gap-5 rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
            onClick={onCall}
          >
            <BiSolidPhoneCall size={30} />
            โทรหาฝ่ายขาย
          </button>
          <button
            className=" mt-5 flex h-[50px] w-[350px] items-center justify-center gap-5  rounded-[15px] bg-custom-brown px-5 text-white shadow-2xl"
            onClick={onLinkTree}
          >
            <IoIosContacts size={30} />
            ช่องทางการติดต่อทั้งหมด
          </button>
        </div>
      </div>
    </>
  );
};

export default SummaryPage;
