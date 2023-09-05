import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";


export default function HeadNav() {
  return (
    <div>
      <header className="text-black body-font bg-transperent ">
        <div className="container ml-5 mr-5 flex flex-wrap p-4 flex-col md:flex-row items-center">
          <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" width={"40px"} />
            <span className="ml-3 text-xl font-bold">KK Tours and Travels</span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer" to="/">Home</NavLink>
            <a className="mr-5 hover:text-blue-500 cursor-pointer">Company</a>
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer" to="/our_vehicles">Our Vehicles</NavLink>
            <NavLink className="mr-5 hover:text-blue-500 cursor-pointer" to="/our_packages">Our Packages</NavLink>
            <a className="mr-5 hover:text-blue-500 cursor-pointer">Gallery</a>
            <a className="mr-5 hover:text-blue-500 cursor-pointer">Contact us</a>
          </nav>
          <button>
           <NavLink className="flex items-center font-semibold text-xl bg-blue-600 justify-center px-4  pb-1 rounded-full" to="/enquiry">Enquiry</NavLink>
          </button>
        </div>
      </header>
    </div>
  );
}
