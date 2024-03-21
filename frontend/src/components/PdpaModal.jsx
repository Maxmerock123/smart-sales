import React from "react";

const PdpaModal = () => {
  const [showPDPA, setShowPDPA] = React.useState(true);

  return (
    <>
      {showPDPA ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              {/*content*/}
              <div className="flex animate-fade-down flex-col rounded-[15px] border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="border-blueGray-200 flex items-start justify-between rounded-t border-b border-solid p-5">
                  <h3 className="text-lg font-semibold">
                    นโยบายการคุ้มครองข้อมูลส่วนบุคคล บริษัท อิมแพ็ค เอ็กซิบิชั่น
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
                  <p className="text-blueGray-500 my-4 text-sm leading-relaxed">
                    บริษัท อิมแพ็ค เอ็กซิบิชั่นแมเนจเม้นท์ จำกัด และ บริษัท
                    อิมแพ็ค เอ็กซิบิชั่น แมเนจเม้นท์ จำกัด
                    <br />
                    <br />
                    ในฐานะผู้บริหารอสังหาริมทรัพย์ของทรัสต์เพื่อการลงทุนในอสังหาริมทรัพย์อิมแพ็คโกรท
                    (“กองทรัสต์ฯ”) มีความประสงค์ที่จะขอความยินยอมจากท่าน
                    ในการเก็บรวบรวม บันทึก ใช้
                    และเปิดเผยข้อมูลส่วนบุคคลของท่านดังต่อไปนี้
                    เพื่อใช้ในการประชาสัมพันธ์ข่าวสารและกิจกรรม
                    รวมไปถึงการปรับปรุงและพัฒนาการให้บริการและการดำเนินงานของบริษัทฯ/กองทรัสต์ฯ
                    เพื่อตอบสนองและอำนวยความสะดวกแก่ท่านต่อไป
                    โดยเอกสารแบบแจ้งการประมวลผลข้อมูล มีดังนี้
                    <br />{" "}
                    <a
                      className="text-blue-800 underline"
                      href="http://www.impact.co.th/userfiles/files/PDPA/2022/05-13-IMPACT-notice2.pdf"
                    >
                      - บริษัท อิมแพ็ค เอ็กซิบิชั่น แมเนจเม้นท์ จำกัด
                    </a>
                    <br />
                    <a
                      className="text-blue-800 underline"
                      href="http://www.impact.co.th/userfiles/files/PDPA/2022/05-19-REIT-notice2-TH.pdf"
                    >
                      - บริษัท อิมแพ็ค เอ็กซิบิชั่น แมเนจเม้นท์ จำกัด
                      ในฐานะผู้บริหารอสังหาริมทรัพย์ของทรัสต์เพื่อการลงทุนในอสังหาริมทรัพย์อิมแพ็คโกรท
                      (“กองทรัสต์ฯ”)
                    </a>
                    <br />
                    <p className="my-5 font-bold">
                      หากรับทราบและยินยอมให้ใช้ข้อมูลตามนโยบายการคุ้มครองส่วนบุคคล
                      ให้ตลิกที่ปุ่ม "รับทราบและยินยอม"
                    </p>
                  </p>
                </div>
                {/*footer*/}
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <button
                    className="mb-1 mr-1 rounded bg-green-600 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setShowPDPA(false)}
                  >
                    รับทราบและยินยอม
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default PdpaModal;
