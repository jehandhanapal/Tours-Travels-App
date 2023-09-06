import React, { useEffect, useState } from "react";
import Carousel_item from "./Carousel_item";
import { styled } from "styled-components";

export default function Caroulsel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timer = useEffect(() => {
    setTimeout(() => {
      if (activeIndex === 0) {
        setActiveIndex(1);
      } else if (activeIndex === 1) {
        setActiveIndex(2);
      } else if (activeIndex === 2) {
        setActiveIndex(0);
      }
    }, 5000);
    return clearTimeout(timer);
  }, [activeIndex]);

  const items = [
    {
      title: "Budget to Premium Vehicle Rental Services",
      path: "/our_vehicles",
      content: "We offer vehicle rentals for your local anf outstation trips",
      url: "https://images.unsplash.com/photo-1630356221426-3ec140638b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Lokking for Affordable to Premium Tour Packages",
      path: "/our_packages",
      content: "We offer customizable tour packages based on your preffernce",
      url: "https://images.unsplash.com/photo-1605531321045-59731b348442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Need Premium Rooms For Stay",
      path: "/enquiry",
      content: "We offer premium accomodation services for your vaccation",
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <Container className="carousel relative   overflow-hidden ">
      <div  className="inner   " style={{ transform: `translate(-${activeIndex * 100}%) ` }}>
        {items.map((item) => {
          return <Carousel_item item={item} />;
        })}
      </div>
      <div className="indicators relative  bottom-8 justify-center flex gap-3">
        <li key="slide-1" className={`indicator ${activeIndex === 0 ? "active" : "indicator"}`} onClick={() => setActiveIndex(0)}></li>
        <li key="slide-2" className={`indicator ${activeIndex === 1 ? "active" : "indicator"}`} onClick={() => setActiveIndex(1)}></li>
        <li key="slide-3" className={`indicator ${activeIndex === 2 ? "active" : "indicator"}`} onClick={() => setActiveIndex(2)}></li>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .inner {
    width: 100%;
    display: inline-flex;
    transition: transform 0.3s;
  }
  .indicators {
    .indicator {
      list-style: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: white;
    }
    .active {
      background-color: #3498db;
    }
  }
`;
