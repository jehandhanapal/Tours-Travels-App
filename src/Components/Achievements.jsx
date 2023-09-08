import React from "react";
import {  AiOutlineHeart } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { styled } from "styled-components";

export default function Why_choose_us() {
  return (
    <Container>
      <div className=" flex justify-evenly my-12 flex-wrap gap-8">
        <div className="lg:w-3/12 flex-col flex justify-center text-center ">
          <span className="flex justify-center">
            <AiOutlineHeart className="text-7xl text-white" />
          </span>
          <span className="text-2xl font-bold text-blue-500 mt-4">150+</span>
          <span className="text-3xl font-bold text-black my-2">Happy Clients</span>
        </div>
        <div className="lg:w-3/12 flex-col flex justify-center text-center">
          <span className="flex justify-center">
            <BsPinMap className="text-7xl text-white" />
          </span>
          <span className="text-2xl font-bold text-blue-600 mt-4">50+</span>
          <span className="text-3xl font-bold text-black my-2">Cities Covered</span>
        </div>
        <div className="lg:w-3/12 flex-col flex justify-center text-center">
          <span className="flex justify-center">
            <TiTick className="text-7xl text-white " />
          </span>
          <span className="text-2xl font-bold text-blue-600 mt-4">6+</span>
          <span className="text-3xl font-bold text-black my-2">Years of Experience</span>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
 background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 1%, rgba(224,241,231,1) 75%);  

  padding: 2rem 0 1rem 0;
 
`;
