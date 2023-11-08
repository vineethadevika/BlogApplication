import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    if (password === confirmPassword) {
      axios
        .post("http://localhost:8000/api/user/reset-password", {
          email,
          newPassword: password
        })
        .then((response) => {
          if (response.data.success) {
            setMessage("Password updated successfully. You can now log in with your new password.");
          } else {
            setMessage("An error occurred. Please try again later.");
          }
        })
        .catch((error) => {
          setMessage("Mail not found");
        });
    } else {
      setMessage("Passwords do not match. Please try again.");
    }
  };

  return (
    <div>
      <Box
        maxWidth={400}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        margin="auto"
        marginTop={5}
        borderRadius={5}
      >
        <Typography variant="h4" padding={3} textAlign="center">
          Reset Password
        </Typography>
        <TextField
          name="email"
          onChange={handleEmailChange}
          value={email}
          type="text"
          placeholder="Enter your email"
          margin="normal"
        />
        <TextField
          name="password"
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="New Password"
          margin="normal"
        />
        <TextField
          name="confirmPassword"
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          margin="normal"
        />
        <Typography variant="body2" color="textSecondary" align="center">
          {message}
        </Typography>
        <Button
          onClick={handleResetPassword}
          variant="contained"
          sx={{ borderRadius: 3, marginTop: 3 }}
          color="warning"
        >
          Reset Password
        </Button>
        <Button
          onClick={() => navigate("/auth")}
          sx={{ borderRadius: 3, marginTop: 3 }}
        >
          Back to Login
        </Button>
      </Box>
    </div>
  );
};

export default ResetPassword;
