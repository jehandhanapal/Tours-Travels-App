import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import {IoClose} from "react-icons/io5"
import {GiHamburgerMenu} from "react-icons/gi"

export default function Nav() {
  return (
    <Container>
      <nav className="flex items-center lg:justify-between flex-wrap bg-transperent py-6 px-8">
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black ">
            <span><GiHamburgerMenu/></span>
            <span className="hidden"><IoClose/></span>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <img src="https://drive.google.com/uc?export=view&id=19Gccd91OzpDVitf18mbgc6h9Itg2lA60" alt="kk" width={"60px"} />

          <span className="font-semibold text-2xl ml-3">KK Tours and Travels</span>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-base hidden font-medium lg:flex-grow lg:flex lg:justify-center">
            <Link to="/" className="block mt-4 lg:inline-block lg:focus:border-b-2 lg:focus:border-blue-500 lg:mt-0 text-black hover:text-blue-600 mr-2 p-2 transition-all">
              Home
            </Link>
            <Link  to="" className="block mt-4 lg:inline-block lg:focus:border-b-2 lg:focus:border-blue-500 lg:mt-0 text-black hover:text-blue-600 mr-2 p-2 transition-all">
              About Us
            </Link>
            <Link  to="/our_vehicles" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Vehicles
            </Link>
            <Link  to="/our_packages" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Packages
            </Link>
            <Link  to="" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Testimonials
            </Link>
            <Link  to="" className="block mt-4 lg:focus:border-b-2 lg:focus:border-blue-500 lg:inline-block lg:mt-0 lg:mr-2 text-black hover:text-blue-600 p-2 transition-all">
              Contact Us
            </Link>
          </div>
          <div>
            <Link to="/enquiry" className="inline-block text-xl px-4 py-2 bg-blue-600 border transition-all font-bold hover:bg-white hover:border-blue-500 hover:border-2 rounded-lg text-black btn mt-4 mr-5 lg:mt-0">
              Enquiry
            </Link>
          </div>
        </div>
      </nav>
    </Container>
  )
}
const Container = styled.div`
 
`
 
