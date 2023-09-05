import React from "react";
import { styled } from "styled-components";
import { FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BiSolidCustomize } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Package_Card(props) {
  let { tour } = props;

  return (
    <>
      <Container className="card flex w-[17vw] p-2 border-2 flex-col rounded-lg">
        <div className="title flex flex-col ">
          <div className="flex items-center gap-1">
            <span className=" text-xs font-bold  ">
              <BiSolidCustomize />
            </span>
            <span className="  text-xs font-bold  ">Customizable</span>
          </div>
          <span className="text-lg font-semibold py-1 text-blue-700 h-8 truncate ">{tour.heading}</span>
        </div>
        <div className="img">
          <img src={tour.url} alt="Image not found" />
          <span className="days bg-black inline-flex text-white py-1 px-3 relative -top-3 right-2 float-right rounded-full font-semibold text-sm  ">{tour.days}</span>
        </div>
        <div className="details flex flex-col px-4  pb-1">
          <div className="includes flex justify-between pb-2">
            <span className="text-xl  ">
              <AiFillCar />
            </span>
            <span className=" text-lg">
              <FaHotel />
            </span>
            <span className="text-lg ">
              <FaMapMarkedAlt />
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-blue-700 text-center mb-1">Places Covered</span>
            <span className="text-sm font-semibold border-2 bg-black px-2 py-1 h-8 truncate text-white text-center rounded-lg">{tour.places}</span>
          </div>
        </div>
        <div className="price flex justify-center items-center mt-3">
          <button className="w-full bg-green-600 rounded-full font-semibold py-1 text-lg text-white">
            <NavLink to="/enquiry" className="font-bold">Get Best Quote</NavLink>
          </button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  .img {
    img {
      width: 100%;
      height: 22vh;
      border-radius: 0.5rem;
      object-fit: cover;
      /* object-position: center; */
    }
  }
  .includes {
    span {
      background-color: black;
      color: white;
      border-radius: 50%;
      padding: 0.5rem;
    }
  }
`;
