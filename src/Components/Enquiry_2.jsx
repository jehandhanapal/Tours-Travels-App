import React from "react";
import { styled } from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";


export default function Enquiry_2() {
  return (
    <Container className="lg:w-1/2 relative flex  lg:mx-auto md:mx-8 mx-2  my-12 ">
      <span className="absolute right-2 top-2 font-semibold text-3xl">
        <Link to="/our_vehicles">
          <AiFillCloseCircle />
        </Link>
      </span>

      <div className="w-full px-4 mx-auto ">
        <div className="max-w-full mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500 mt-6">Contact us</h3>
            <p className="mt-4 text-white ">We'd love to talk about how we can help you.</p>
          </div>
        </div>

        <div className="mt-3 max-w-2xl mx-auto">
          <div className="flex flex-col border-none rounded-xl p-2 sm:p-6 lg:p-4 ">
            <h2 className="mb-6 text-xl font-semibold text-black ">Enter your details in the form</h2>

            <form>
              <div className="grid lg:grid-cols-2 gap-3 ">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="hs-firstname-contacts-1" className="block  text-sm text-black font-semibold mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      placeholder="Enter your full name"
                      id="hs-firstname-contacts-1"
                      className="py-2 px-3 block w-full border-2 border-gray-200 rounded-md text-xs outline-none "
                    />
                  </div>

                  <div>
                    <label for="hs-lastname-contacts-1" className="block text-sm text-black font-semibold mb-1 ">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Phone number"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-2 px-3 block w-full border-gray-200 border-2 rounded-md text-xs outline-none "
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label for="hs-email-contacts-1" className="block text-sm text-black font-semibold mb-1 ">
                      Pick up Date
                    </label>
                    <input
                      type="date"
                      placeholder="Enter your email "
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autocomplete="email"
                      className="py-2 px-3 block w-full  text-gray-400 border-gray-200 border-2 rounded-md text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label for="hs-phone-number-1" className="block text-sm text-black font-semibold mb-1">
                      Rental Type
                    </label>
                    <select name="hs-phone-number-1" id="hs-phone-number-1" className="py-2 px-3 block w-full border-gray-200 border-2 rounded-md text-xs outline-none bg-white text-gray-500">
                      <option disabled value="Select your Rental type">
                        Select your Rental type
                      </option>
                      <option value="Family Trip">Airport Drop</option>
                      <option value="Friends Trip">Airport Pickup</option>
                      <option value="Honeymoon Trip">Shopping </option>
                      <option value="Corparate Trip">Outstation Trip</option>
                      <option value="Educational Tour">Local Transfer</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label for="hs-email-contacts-1" className="block text-sm text-black font-semibold mb-1 ">
                      Pick up location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your pickup location "
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      autocomplete="email"
                      className="py-2 px-3 block w-full border-gray-200 text-gray-400 border-2 rounded-md text-xs outline-none"
                    />
                  </div>

                  <div>
                    <label for="hs-phone-number-1" className="block text-sm text-black font-semibold mb-1 ">
                      Drop location
                    </label>
                    <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" placeholder="Enter your drop location" className="py-2 px-3 block w-full border-gray-200 border-2 rounded-md text-xs outline-none" />
                  </div>
                </div>

                <div>
                  <label for="hs-about-contacts-1" className="block text-sm text-black font-semibold mb-1 ">
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    placeholder="Describe your plan"
                    rows="2"
                    className="py-2 px-3 block w-full border-2 border-gray-200 rounded-md text-xs  outline-none "
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 flex justify-center ">
                <button type="submit" className="inline-flex justify-center items-center font-bold  text-center bg-blue-600  border-none text-lg  text-white  rounded-md py-2 px-4 ">
                  Send Enquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm font-bold text-white">We'll get back to you in few hours.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  )
};
const Container = styled.div`
  background-color: lightgrey;
  z-index: 10;
`;
