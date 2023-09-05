import React from "react";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function Vehicle_Card(props) {
  let { vehicle } = props;
  

  return (
    <Container className="card relative flex w-[30vw] p-2 border-2 flex-col rounded-lg">
      <div className="img">
        <img src={vehicle.url} alt="etios" />
        <div className="rating inline-flex items-center bg-black text-white py-1 px-3 gap-1 rounded-full font-semibold text-sm right-2  absolute top-2 m-2 ">
          <span className="text-yellow-400 text-lg">
            <AiFillStar />
          </span>
          <span>{vehicle.rating}</span>
        </div>
      </div>
      <div className="details flex flex-col px-4 pt-2 pb-1">
        <div className="brand flex justify-between items-center">
          <span className="text-3xl font-bold">{vehicle.name}</span>
          <span className="text-lg font-semibold  border-2 border-blue-500 rounded-full px-5">{vehicle.make}</span>
        </div>
        <div className="spec flex justify-between  py-4 border-b-2">
          <div className="flex items-center gap-1 font-semibold text-base ">
            <span className="text-lg">
              <MdAirlineSeatReclineNormal />
            </span>
            <span>{vehicle.seating} Seater</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-base">
            <span className="text-sm">
              <BsFuelPumpFill />
            </span>
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex items-center gap-1 font-semibold text-base">
            <span className="text-sm ">
              <GiGearStickPattern />
            </span>
            <span>{vehicle.geartype}</span>
          </div>
        </div>
        <div className="info flex justify-between  border-b-2 py-2">
          <div>
            <ul>
              <li>
                <span>
                  <TiTick />
                </span>
                Pay at drop
              </li>
              <li>
                <span>
                  <TiTick />
                </span>
                Skilled Driver
              </li>
              <li>
                <span>
                  <TiTick />
                </span>
                Travel Insurance
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <span>
                  <TiTick />
                </span>
                Air Conditioning
              </li>
              <li>
                <span>
                  <TiTick />
                </span>
                5.1 Audio System
              </li>
              <li>
                <span>
                  <TiTick />
                </span>
                Storage Space
              </li>
            </ul>
          </div>
        </div>

        <div className="price flex mt-4 justify-between items-center">
          <div className="flex flex-col gap-2 font-semibold text-base text-blue-600">
            <span>Starts from : &#8377; {vehicle.rentperkm} </span>
            <span>Starts from : &#8377; {vehicle.rentperday} </span>
          </div>
          <div>
            <button className="px-6 bg-black rounded-full  font-semibold  text-white" >
              <Link to="/enquiry_2">Rent now</Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .img {
    img {
      width: 100%;
      height: 30vh;
      border-radius: 0.5rem;
    }
  }
  li {
    display: flex;
    margin: 0.5rem 0;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    span {
      margin-right: 0.25rem;
    }
  }
`;
