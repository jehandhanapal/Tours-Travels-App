import React from "react";
import { BiRadioCircle } from "react-icons/bi";
import { RxBorderSolid } from "react-icons/rx";
import { styled } from "styled-components";

export default function Why_choose_us() {
  return (
    <Container>
      <div>
        <h1 className="text-center text-5xl font-bold">Why Choose Us?</h1>
      </div>
      <div className="flex mx-auto justify-center mt-4 ">
        <span>
          <RxBorderSolid className=" relative left-1" />
        </span>
        <span>
          <BiRadioCircle />
        </span>
        <span>
          <RxBorderSolid className=" relative right-1" />
        </span>
      </div>
      <div className=" flex justify-evenly my-12">
        <div className="w-5/12 ">
          <div>
            <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-booking-hotel-service-becris-lineal-becris.png" alt="booking" />
          </div>
          <h3>Easy and Fast Bookings</h3>
        </div>
        <div className="w-5/12">
          <div>
            <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/fluency-systems-regular/48/24-7-open-sign-.png" alt="24-7-open-sign-" />
          </div>
          <h3>24/7 Customer Support</h3>
        </div>
        <div className="w-5/12">
          <div>
            <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/wired/64/driver.png" alt="driver" />
          </div>
          <h3>Skilled Drivers</h3>
        </div>
        <div className="w-5/12">
          <div>
            <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/ios/50/combi-ticket.png" alt="combi-ticket" />
          </div>
          <h3>Affordable Tour Packages</h3>
        </div>
        <div className="w-5/12">
          <div>
            <img className="mx-auto" width="64" height="64" src="https://img.icons8.com/ios/50/car-service.png" alt="car-service" />
          </div>
          <h3>Well Maintained Vehicles</h3>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: lightyellow;
  padding: 2rem 0 1rem 0;
  h3 {
    font-size: 1rem;
    font-weight: 600;
    margin: 1.5rem 0;
    text-align: center;
  }
`;
