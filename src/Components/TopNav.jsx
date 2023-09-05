import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { styled } from "styled-components";

export default function TopNav() {
  return (
    <Container className="flex items-center justify-between">
      <div>
        <span>Your Trusted Service Provider</span>
      </div>
      <div className="flex items-center">
        <span className="location ">
          <a href="https://goo.gl/maps/hbRE3KVkzWeYSydC9" target="_blank" className="  flex items-center">
            <span className=" loc ">
              <FaLocationDot />
            </span>
            <span>Trichy</span>
          </a>
        </span>
        <span className="i fb">
          <a href="https://www.facebook.com/kktravels.kktravels?" target="_blank">
            <FaFacebookF />
          </a>
        </span>
        <span className="i" >
          <a href="https://www.youtube.com/@kktoursandtravels8117" target="_blank">
            <FaYoutube />
          </a>
        </span>
        <span className="i">
          <a href="https://www.instagram.com/kk_toursandtravels/" target="_blank">
            <AiFillInstagram />
          </a>
        </span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 8vh;
  background-color: transparent;
  padding: 0 2.3rem;
  .location {
    padding-right: 0.75rem;
    
    border-right: 2px solid black;
  }
  .loc{
    margin: 0 0.3rem;
    font-size: 1.5rem;
  }
  .i {
    margin: 0 1rem;
    font-size: 1.5rem;
  }
  .fb{
    margin-left: 1.5rem;
  }
  
`;
