import React, { useContext } from 'react';
import FormDataContext from '../FormDataContext';

const SummaryPage = () => {
  const { formData } = useContext(FormDataContext);
  console.log(formData)

  return (
    <div>
      <h2>Summary</h2>
      <h3>General Form</h3>
      <p>Name: {formData.generalForm.name}</p>
      <p>Number: {formData.generalForm.number}</p>
      <p>Email: {formData.generalForm.email}</p>
      <h3>Event Form</h3>
      <p>Place: {formData.eventForm.place}</p>
      <p>People: {formData.eventForm.people}</p>
      <p>Date: {formData.eventForm.date}</p>
    </div>
  );
}

export default SummaryPage;