import React from "react";
import { styled } from "styled-components";

export default function About_us() {
  return (
    <Container className="flex md:flex-row lg:flex-row flex-col ">
      <div className="my-auto lg:w-[50%] md:w-[50%] w-full lg:mr-8 md:mr-8 ">
        <img className="w-full"
          src="https://img.freepik.com/free-photo/smiling-business-lady-working-with-colleagues_1262-2153.jpg?w=740&t=st=1693328497~exp=1693329097~hmac=532ad3bad8a334fbc8a4c0273dceab89efdf1f8e23fee033a5cd19acae5341c2"
          alt=""
        />
      </div>
      <div className="lg:w-[50%] md:w-[70%] w-full ">
        <h2 className="md:text-3xl lg:text-6xl text-3xl lg:m-0 md:m-0 mt-10 lg:text-start md:text-start text-center">WHO WE ARE ?</h2>
        <span className="w-16 h-1 bg-blue-600 inline-flex relative lg:left-3 md:left-2 left-[37%]  "></span>
        <p>
          We, Kk Tours and Travels situated at Manachanallur, <b>Trichy, Tamil Nadu</b> having a profound understanding of our consumers travel needs and preferences.We aim to offer individuals as well as corporate a
          wide range of <b>Cars on Hire</b>. We have well maintained & luxurious cars which help to make your travel comfortable and pleasing.KK Tours and Travels enables you to discover a new destination and offer
          unique ideas to your travel. We provide a wide range of <b>Holiday Tour Packages, </b>
          <b>Honeymoon Packages</b> for all the destinations across the India.
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 4rem 2rem;
  img {
    border-radius: 5%;
  }
 
  h1 {
    font-weight: 600;
  }
  p {
    margin: 2rem 0;
  }
`;
