// import React, { useState } from "react";
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Box,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
// import { useStyles } from "./utils";
// import BlogCarousel from './BlogCarousel';

// const Header = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   const [value, setValue] = useState();
//   const [carouselVisible, setCarouselVisible] = useState(!isLoggedIn);

//   const handleLoginButtonClick = () => {
//     setCarouselVisible(false);
//   };

//   return (
//     <div>
//       <AppBar
//         position="sticky"
//         sx={{
//           background:
//             "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
//         }}
//       >
//         <Toolbar>
//           <Typography className={classes.font} variant="h4">
//             BlogsApp
//           </Typography>
//           {isLoggedIn && (
//             <Box display="flex" marginLeft={"auto"} marginRight="auto">
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab
//                   className={classes.font}
//                   LinkComponent={Link}
//                   to="/blogs"
//                   label="All Blogs"
//                 />
//                 <Tab
//                   className={classes.font}
//                   LinkComponent={Link}
//                   to="/myBlogs"
//                   label="My Blogs"
//                 />
//                 <Tab
//                   className={classes.font}
//                   LinkComponent={Link}
//                   to="/blogs/add"
//                   label="Add Blog"
//                 />
//               </Tabs>
//             </Box>
//           )}
//           <Box display="flex" marginLeft="auto">
//             {!isLoggedIn && (
//               <>
//                 <Button
//                   component={Link}
//                   to="/auth"
//                   variant="contained"
//                   sx={{ margin: 1, borderRadius: 10 }}
//                   color="warning"
//                   onClick={handleLoginButtonClick}
//                 >
//                   Login
//                 </Button>
//               </>
//             )}
//             {isLoggedIn && (
//               <Button
//                 onClick={() => dispatch(authActions.logout())}
//                 component={Link}
//                 to="/auth"
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Logout
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {carouselVisible && <BlogCarousel />}
//     </div>
//   );
// };

// export default Header;





// import React, { useState } from "react";
// import {
//   AppBar,
//   Typography,
//   Toolbar,
//   Box,
//   Button,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
// import { useDispatch, useSelector } from "react-redux";
// import { authActions } from "../store";
// import { useStyles } from "./utils";
// import BlogCarousel from "./BlogCarousel";

// const Header = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector((state) => state.isLoggedIn);
//   const [value, setValue] = useState();
//   const [carouselVisible, setCarouselVisible] = useState(!isLoggedIn);
//   const navigate = useNavigate();  // Initialize navigate from useNavigate

//   const handleLoginButtonClick = () => {
//     setCarouselVisible(false);
//     navigate("/auth");  // Navigate to the login page ("/auth")
//   };

//   return (
//     <div>
//       <AppBar
//         position="sticky"
//         sx={{
//           background:
//             "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
//         }}
//       >
//         <Toolbar>
//           <Typography className={classes.font} variant="h4">
//             BlogsApp
//           </Typography>
//           {isLoggedIn && (
//             <Box display="flex" marginLeft={"auto"} marginRight="auto">
//               <Tabs
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, val) => setValue(val)}
//               >
//                 <Tab
//                   className={classes.font}
//                   component={Link}
//                   to="/blogs"
//                   label="All Blogs"
//                 />
//                 <Tab
//                   className={classes.font}
//                   component={Link}
//                   to="/myBlogs"
//                   label="My Blogs"
//                 />
//                 <Tab
//                   className={classes.font}
//                   component={Link}
//                   to="/blogs/add"
//                   label="Add Blog"
//                 />
//               </Tabs>
//             </Box>
//           )}
//           <Box display="flex" marginLeft="auto">
//             {!isLoggedIn && (
//               <>
//                 <Button
//                   variant="contained"
//                   sx={{ margin: 1, borderRadius: 10 }}
//                   color="warning"
//                   onClick={handleLoginButtonClick}
//                 >
//                   Login
//                 </Button>
//               </>
//             )}
//             {isLoggedIn && (
//               <Button
//                 onClick={() => dispatch(authActions.logout())}
//                 variant="contained"
//                 sx={{ margin: 1, borderRadius: 10 }}
//                 color="warning"
//               >
//                 Logout
//               </Button>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {carouselVisible && <BlogCarousel />}
//     </div>
//   );
// };

// export default Header;




import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utils";
import BlogCarousel from "./BlogCarousel";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  const [carouselVisible, setCarouselVisible] = useState(!isLoggedIn);
  const navigate = useNavigate();  // Initialize navigate from useNavigate

  const handleLoginButtonClick = () => {
    setCarouselVisible(false);
    navigate("/auth");  // Navigate to the login page ("/auth")
  };

  const handleLogoutButtonClick = () => {
    setCarouselVisible(true); // Set carouselVisible to true when logging out
    dispatch(authActions.logout());
  };

  return (
    <div>
      <AppBar
        position="sticky"
        sx={{
          background:
            "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
        }}
      >
        <Toolbar>
          <Typography className={classes.font} variant="h4">
            BlogsApp
          </Typography>
          {isLoggedIn && (
            <Box display="flex" marginLeft={"auto"} marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab
                  className={classes.font}
                  component={Link}
                  to="/blogs"
                  label="All Blogs"
                />
                <Tab
                  className={classes.font}
                  component={Link}
                  to="/myBlogs"
                  label="My Blogs"
                />
                <Tab
                  className={classes.font}
                  component={Link}
                  to="/blogs/add"
                  label="Add Blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                  color="warning"
                  onClick={handleLoginButtonClick}
                >
                  Login
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                onClick={handleLogoutButtonClick}
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {carouselVisible && <BlogCarousel />}
    </div>
  );
};

export default Header;
