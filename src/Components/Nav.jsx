import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const [showNav, setshowNav] = useState(false);
  const displayref = useRef(null);

  const handleClick = () => {
    setshowNav(!showNav);
    if (showNav === false) {
      displayref.current.classList.remove("hidden");
    } else displayref.current.classList.add("hidden");
  };
  return (
    <Container className=" relative  ">
      <nav className="flex  relative  items-center lg:justify-start flex-wrap bg-transperent py-6  px-8">
        <div className="block lg:hidden">
          <button className="flex items-center px-2 py-2 transition-all ">
            <span className={`block ${showNav === false ? "block" : "hidden"} text-2xl`} onClick={() => handleClick()}>
              <GiHamburgerMenu />
            </span>
            <span className={`block ${showNav === true ? "block" : "hidden"} text-2xl`} onClick={() => handleClick()}>
              <IoClose />
            </span>
          </button>
        </div>
        <div className="lg:flex items-center lg:relative md:flex text-black absolute md:left-[30%] left-[38%] lg:left-2 mr-6 top-5 lg:top-0">
          <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" className="lg:w-[60px] md:w-[50px] w-[80px] lg:h-[60px] md:h-[50px] h-12 " />

          <span className="font-semibold text-2xl ml-3 lg:inline-block md:inline-block hidden  ">KK Tours and Travels</span>
        </div>

        <div className="w-full block lg:justify-center lg:ml-12  lg:flex lg:items-center lg:w-auto">
          <div ref={displayref} className="text-base hidden font-medium lg:flex-grow lg:flex lg:justify-center">
            <NavLink to="/" className="block mt-4 lg:inline-block lg:focus:border-b-2 lg:focus:border-blue-500 lg:mt-0 text-black hover:text-blue-600 mr-2 p-2 transition-all">
              Home
            </NavLink>
            <Link to="about" className="block mt-4 lg:inline-block lg:focus:border-b-2 lg:focus:border-blue-500 lg:mt-0 text-black hover:text-blue-600 mr-2 p-2 transition-all  cursor-pointer" spy={true} smooth={true} offset={-50} duration={500}>
              About Us
            </Link>
            <NavLink to="/our_vehicles" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Vehicles
            </NavLink>
            <NavLink to="/our_packages" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Packages
            </NavLink>
            <Link to="testimonials" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all cursor-pointer" spy={true} smooth={true} offset={0} duration={500}>
              Testimonials
            </Link>
            <Link to="contact" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all  cursor-pointer" spy={true} smooth={true} offset={0} duration={500}>
              Contact Us
            </Link>
          </div>
          <div className="inline-block absolute lg:right-8 md:right-2 right-0 top-8 lg:top-10 ">
            <NavLink to="/enquiry" className=" lg:text-xl px-4 py-2 bg-blue-600 border transition-all font-bold hover:bg-white hover:border-blue-500 hover:border-2 rounded-lg text-black btn mt-4 mr-5 lg:mt-0 ">
              Enquiry
            </NavLink>
          </div>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div``;
