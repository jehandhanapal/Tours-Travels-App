import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function HeadNav() {
  return (
    <Container>
      <header className="text-black  bg-transperent md:flex md:justify-between md:items-center lg:flex lg:justify-between ">
        
        <div className=" lg:ml-5 mr-5 lg:justify-between w-full flex flex-wrap p-4 flex-col md:flex-row md:justify-center items-center">
          <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" width={"60px"} />
            <span className="ml-3 text-2xl font-extrabold ">KK Tours and Travels</span>
          </NavLink>

          <nav className="   items-center text-base font-medium justify-center lg:block hidden">
            <NavLink className="mr-3 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer " to="/">
              Home
            </NavLink>
            <a className="mr-3 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer btn">About Us</a>

            <NavLink className="mr-5 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer btn" to="/our_vehicles">
              Vehicles
            </NavLink>
            <NavLink className="mr-3 p-1 focus:border-b-2 border-blue-600  hover:text-blue-600 cursor-pointer btn" to="/our_packages">
              Packages
            </NavLink>
            <a className="mr-3 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer btn">Gallery</a>
            <a className="mr-3 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer btn">Testimonials</a>
            <a className="mr-3 p-1 focus:border-b-2 border-blue-600 hover:text-blue-600 cursor-pointer btn">Contact Us</a>
          </nav>
          <button className="pr-4 btn relative md:absolute right-10">
            <NavLink className="flex items-center font-semibold text-xl bg-blue-600 justify-center px-4 py-1 rounded-lg" to="/enquiry">
              Enquiry
            </NavLink>
          </button>
        </div>
      </header>
    </Container>
  );
}

const Container = styled.div`
  .button {
    border: none;
    :hover {
      background-color: transparent;
      border: 2px solid blue;
      transition: 0.75s ease;
      cursor: pointer;
    }
  }
`;
