import React from "react";
import Main from "./Main";
import About_us from "./About_us";
import Services from "./Services";
import Gallery from "./Gallery";
import Why_Choose_us from "./Why_choose_us";
import Testimonals from "./Testimonals";
import Achievements from "./Achievements";
import Contact_us from "./Contact_us";
import Caroulsel from "./Caroulsel";

export default function Home_Page() {
  return (
    <>
      {/* <Caroulsel/> */}
      <Main />
      <About_us />
      <Services />
      <Why_Choose_us />
      <Gallery />
      <Testimonals />
      <Achievements/>
      <Contact_us />
    </>
  );
}
