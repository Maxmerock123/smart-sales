import React, { useEffect } from "react";
import { Navigate, useNavigate, redirect } from "react-router-dom";

const Redirect = () => {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/"), [];
  });

  return <div>Redirect</div>;
};

export default Redirect;
