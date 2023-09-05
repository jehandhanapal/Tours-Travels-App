import React from "react";
import Home_Page from "./Components/Home_Page";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Our_Vehicles from "./Components/Our_Vehicles";
import Our_Packages from "./Components/Our_Packages";
import Enquiry from "./Components/Enquiry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Enquiry_2 from "./Components/Enquiry_2";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home_Page />}></Route>
          <Route exact path="/our_vehicles" element={<Our_Vehicles />}></Route>
          <Route exact path="/our_packages" element={<Our_Packages />}></Route>
          <Route exact path="/enquiry" element={<Enquiry />}></Route>
          <Route exact path="/enquiry_2" element={<Enquiry_2 />}></Route>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
