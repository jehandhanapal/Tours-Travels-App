import React from "react";
import { styled } from "styled-components";
import { RxBorderSolid } from "react-icons/rx";
import { BiRadioCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <Container className="flex flex-col">
      <div className="mx-auto mt-8 mb-2">
        <h1 className="text-6xl font-bold">Our Services</h1>
      </div>
      <div className="flex mx-auto ">
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
      <div className="w-7/12 mx-auto text-center my-8">We provide customized and the best suggestion that matches your transportation and travel need. Feel free to talk to us once before you plan your next trip.</div>

      <div className="flex justify-between mx-auto">
        <div className="card travel">
          
            <div className="logo">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/car-rental.png" alt="car-rental" />
            </div>
            <h3>Vehicle Rentals</h3>
            <p>We rent Vehicles from a few hours to a few days depending upon your travel need with expert drivers.</p>
            <Link to="/our_vehicles">Read more</Link>
          
        </div>
        <div className="card hotel">
          <div className="logo">
            <img width="50" height="50" src="https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/64/external-hotel-building-photo3ideastudio-lineal-photo3ideastudio.png" alt="hotel" />
          </div>
          <h3>Hotel Bookings</h3>
          <p>We help you to book Hotels and Villas instantly at your convenient date and prefferd location.</p>
          <Link to="/enquiry">Read more</Link>
        </div>
        <div className="card tour">
          <div className="logo">
            <img width="50" height="50" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-vacation-celebration-holiday-flatart-icons-outline-flatarticons.png" alt="holiday" />
          </div>
          <h3>Tour Packages</h3>
          <p>We provide fully customized, affordable tour packages across India as per your travel needs.</p>
          <Link to="/our_packages">Read more</Link>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* width: 100vw; */
  /* height: 60vh; */
  padding: 2rem 2rem;
  background-color: #fff;
  .card {
    width: 22vw;
    /* height: 45vh; */
    background-color: white;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 1rem;
    text-align: center;
    border-radius: 5%;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
  

    img {
      margin-top: 4rem;
      filter: invert(1);
    }
    h3 {
      margin: 1rem 0;
      font-weight: 600;
      font-size: 1.5rem;
    }
    p {
      font-weight: 600;
      font-size: 0.9rem;
    }
    a {
      margin: 1rem 0;
      font-weight: 600;
      font-size: 1.2rem;
      color: brown;
    }
  }
  .travel {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .8)), url(https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position:center;

  }
  .hotel {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position:  center;
  }
  .tour {
    background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/2422483/pexels-photo-2422483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
    background-position:  center;
  }
`;
