import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Directly navigate to the reset-password page when the component mounts
    navigate("/reset-password");
  }, []);

  return null;
};

export default ForgotPassword;
