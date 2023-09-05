import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaIndustry } from "react-icons/fa";
import { styled } from "styled-components";

export default function Why_choose_us() {
  return (
    <Container>
      <div className=" flex justify-evenly my-12">
        <div className="w-5/12 flex-col flex justify-center text-center ">
          <span className="flex justify-center">
            <AiFillHeart className="text-7xl text-blue-600" />
          </span>
          <span className="text-2xl font-bold text-red-500 mt-4">150+</span>
          <span className="text-3xl font-bold text-black my-2">Happy Clients</span>
        </div>
        <div className="w-5/12 flex-col flex justify-center text-center">
          <span className="flex justify-center">
            <BiWorld className="text-7xl text-blue-600" />
          </span>
          <span className="text-2xl font-bold text-red-500 mt-4">50+</span>
          <span className="text-3xl font-bold text-black my-2">Cities Covered</span>
        </div>
        <div className="w-5/12 flex-col flex justify-center text-center">
          <span className="flex justify-center">
            <FaIndustry className="text-7xl text-blue-600 " />
          </span>
          <span className="text-2xl font-bold text-red-500 mt-4">6+</span>
          <span className="text-3xl font-bold text-black my-2">Years of Experience</span>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  padding: 2rem 0 1rem 0;
 
`;
