import React, { useContext } from 'react';
import FormDataContext from '../FormDataContext';

const SummaryPage = () => {
  const { formData } = useContext(FormDataContext);

  return (
    <div className="flex items-center justify-center ">
      <div className=" p-3 bg-white rounded-lg shadow w-[300px]">
        <h2 className="m-3 text-2xl font-bold">ใบสรุปรายการ</h2>
        <div className="">
          <h3 className="font-semibold">General Form</h3>
          <p>Name: {formData.generalForm.name}</p>
          <p>Number: {formData.generalForm.number}</p>
          <p>Email: {formData.generalForm.email}</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Event Form</h3>
          <p>Place: {formData.eventForm.place}</p>
          <p>People: {formData.eventForm.people}</p>
          <p>Date: {formData.eventForm.date}</p>
          <p>EventType: { formData.eventForm.eventType }</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;