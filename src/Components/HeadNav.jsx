import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function HeadNav() {
  return (
    <Container>
      <header className="text-black  bg-transperent  ">
        <div className=" ml-5 mr-5 justify-between flex flex-wrap p-4 flex-col md:flex-row items-center">
          <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" width={"60px"} />
            <span className="ml-3 text-2xl font-extrabold ">KK Tours and Travels</span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-medium justify-center">
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer btn" to="/">
              Home
            </NavLink>
            <a className="mr-5 p-2 hover:text-blue-500 cursor-pointer btn">Company</a>
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer btn" to="/our_vehicles">
              Our Vehicles
            </NavLink>
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer btn" to="/our_packages">
              Our Packages
            </NavLink>
            <a className="mr-5 hover:text-blue-500 cursor-pointer btn">Gallery</a>
            <a className="mr-5 hover:text-blue-500 cursor-pointer btn">Contact us</a>
          </nav>
          <button className="pr-4">
            <NavLink className="flex items-center font-semibold text-xl bg-blue-600 justify-center px-4 pt-1  pb-1 rounded-lg" to="/enquiry">
              Enquiry
            </NavLink>
          </button>
        </div>
      </header>
    </Container>
  );
}

const Container = styled.div`
 

  
  
`;
