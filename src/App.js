import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MiniDrawer from "./Layout/Layout";
import AnimatedRoutes from "./AnimatedRoutes";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <MiniDrawer>
        <AnimatedRoutes />
      </MiniDrawer>
    </Router>
    </ThemeProvider>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MiniDrawer from "./Layout/Layout";
// import Home from "./pages/Home";
// import WhatSwerri from "./pages/Swerri/What";
// import SwerriCircle from "./pages/Swerri/Circles";
// import SwerriMaster from "./pages/Swerri/Master";
// import SwerriToken from "./pages/SwerriToken/SwerriToken";
// import About from "./pages/About/About";

// const App = () => {
//   return (
//     <Router>
//       <MiniDrawer>
//       <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/" element={<Home />} />

//   <Route path="/swerri/what" element={<WhatSwerri />} />
//   <Route path="/swerri/circles" element={<SwerriCircle />} />
//   <Route path="/swerri/master" element={<SwerriMaster />} />
//   <Route path="/swet-token" element={<SwerriToken />} />
//   <Route path="/about-us" element={<About />} />
// </Routes>

//       </MiniDrawer>
//     </Router>
//   );
// };

// export default App;
