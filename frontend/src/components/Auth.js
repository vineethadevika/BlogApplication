import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link as MUILink } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "login") => {
    try {
      const res = await axios.post(`http://localhost:8000/api/user/${type}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });

      console.log(res.data);
      return res.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          if (type === "login") {
            setErrorMessage("Password is wrong. Please try again.");
          } else if (type === "signup") {
            setErrorMessage("Email already exists. Please use a different email.");
          }
          return { error: errorMessage };
        }
      } else {
        console.log("Error:", error.message);
        throw error;
      }
    }
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    setErrorMessage(null);

    sendRequest(isSignup ? "signup" : "login")
      .then((data) => {
        if (!data.error) {
          localStorage.setItem("userId", data.user._id);
          dispatch(authActions.login());
          navigate("/blogs");
        }
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              name="name"
              onChange={handleChange}
              value={inputs.name}
              placeholder="Name"
              margin="normal"
            />
          )}
          <TextField
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type={"email"}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          {errorMessage && (
            <Typography variant="body2" color="error" align="center">
              {errorMessage}
            </Typography>
          )}
          <Button
  onClick={handleForgotPasswordClick}
  sx={{
    
    color: "red",
    "&:hover": {
      color: "darkred", // Change the text color to dark red on hover
    },
  }}
>
  Forgot Password
</Button>

          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
         


          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Change To {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;










// import React, { useState } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store";
// import { useNavigate } from "react-router-dom";

// const Auth = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isSignup, setIsSignup] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendRequest = async (type = "login") => {
//     try {
//       const res = await axios.post(`http://localhost:8000/api/user/${type}`, {
//         name: inputs.name,
//         email: inputs.email,
//         password: inputs.password,
//       });

//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         if (error.response.status === 400) {
//           if (type === "login") {
//             // Set error message for incorrect password during login
//             setErrorMessage("Password is wrong. Please try again.");
//           } else if (type === "signup") {
//             // Set error message for email already exists during signup
//             setErrorMessage("Email already exists. Please use a different email.");
//           }
//           return { error: errorMessage };
//         }
//       } else {
//         console.log("Error:", error.message);
//         throw error;
//       }
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     setErrorMessage(null); // Reset error message on each submission

//     sendRequest(isSignup ? "signup" : "login")
//       .then((data) => {
//         if (!data.error) {
//           localStorage.setItem("userId", data.user._id);
//           dispatch(authActions.login());
//           navigate("/blogs");
//         }
//       })
//       .catch((error) => {
//         console.log("Error:", error.message);
//       });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           maxWidth={400}
//           display="flex"
//           flexDirection={"column"}
//           alignItems="center"
//           justifyContent={"center"}
//           boxShadow="10px 10px 20px #ccc"
//           padding={3}
//           margin="auto"
//           marginTop={5}
//           borderRadius={5}
//         >
//           <Typography variant="h2" padding={3} textAlign="center">
//             {isSignup ? "Signup" : "Login"}
//           </Typography>
//           {isSignup && (
//             <TextField
//               name="name"
//               onChange={handleChange}
//               value={inputs.name}
//               placeholder="Name"
//               margin="normal"
//             />
//           )}
//           <TextField
//             name="email"
//             onChange={handleChange}
//             value={inputs.email}
//             type={"email"}
//             placeholder="Email"
//             margin="normal"
//           />
//           <TextField
//             name="password"
//             onChange={handleChange}
//             value={inputs.password}
//             type={"password"}
//             placeholder="Password"
//             margin="normal"
//           />
//           {errorMessage && (
//             <Typography variant="body2" color="error" align="center">
//               {errorMessage}
//             </Typography>
//           )}
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ borderRadius: 3, marginTop: 3 }}
//             color="warning"
//           >
//             Submit
//           </Button>
//           <Button
//             onClick={() => setIsSignup(!isSignup)}
//             sx={{ borderRadius: 3, marginTop: 3 }}
//           >
//             Change To {isSignup ? "Login" : "Signup"}
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Auth;

