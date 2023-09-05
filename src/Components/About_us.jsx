import React from "react";
import { styled } from "styled-components";

export default function About_us() {
  return (
    <Container>
      <div className="my-auto">
        <img
          src="https://img.freepik.com/free-photo/smiling-business-lady-working-with-colleagues_1262-2153.jpg?w=740&t=st=1693328497~exp=1693329097~hmac=532ad3bad8a334fbc8a4c0273dceab89efdf1f8e23fee033a5cd19acae5341c2"
          alt=""
        />
      </div>
      <div>
        <h1>WHO WE ARE ?</h1>
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
  display: flex;
  margin: 4rem 1.5rem;
  img {
    border-radius: 5%;
  }
  div {
    width: 50%;
    margin: auto 1rem;
  }
  h1 {
    margin-bottom: 3rem;
    font-size: 4rem;
    font-weight: 600;
  }
  p {
    margin: 2rem 0;
    /* text-align: center; */
  }
`;
