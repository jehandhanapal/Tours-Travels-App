import React from "react";
import { styled } from "styled-components";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Testimonals() {
  return (
    <Container id="testimonials">
      <div>
        <div>
          <h4 className="text-center text-white py-2 font-semibold text-sm ">WHAT PEOPLE SAY ABOUT US</h4>
          <h1 className="text-center text-white md:text-5xl text-4xl lg:text-6xl font-bold py-2 my-1">
            Customer <span className="text-red-500">Reviews</span>
          </h1>
        </div>
        <div className="flex justify-center items-center my-8">
          <span className="w-8 bg-gray-900 h-[2px] "></span>
          <span className="text-2xl text-blue-600 mx-2">
            <BiSolidQuoteAltLeft />
          </span>
          <span className="w-8 bg-gray-900 h-[2px] "></span>
        </div>
      </div>
      <div className="flex justify-evenly items-start p-8 flex-wrap">
        <div className="flex lg:w-3/12 items-center  flex-col">
          <div className=" bg-gray-600 text-white opacity-75 top px-6 py-10 rounded-md">
            <p>Excellent! Very good service from beginning to end.They was extremely helpful ! Any questions we had were answered very quickly via phone call.The best trip ever for me...</p>
          </div>
          <div className="indicator"></div>
          <div className="bottom flex py-6 w-4/12 justify-center  ">
            <div className=" text-end">
              <h3>Veronica Jerlin</h3>
              <p>CUSTOMER</p>
            </div>
            <div>
              <img className=" object-top" src="https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
        </div>
        <div className="flex lg:w-3/12  items-center flex-col">
          <div className="bg-gray-600 opacity-75 text-white top px-6 py-10 rounded-md">
            <p>Good experience . With ecofriendly services. I enjoyed their service . They are with good punctuality and they provide with safety and secure driving</p>
          </div>
          <div className="indicator"></div>
          <div className="bottom flex py-6 w-4/12 justify-center  ">
            <div className=" text-end">
              <h3>Sathish Kumar</h3>
              <p>CUSTOMER</p>
            </div>
            <div>
              <img className=" object-center" src="https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
        </div>
        <div className="flex lg:w-3/12  items-center flex-col">
          <div className=" bg-gray-600 opacity-75 text-white top px-6 py-10 rounded-md">
            <p>Truly satisfying experience with kk team created lots of wonderful memories they really arranged well planned trip thanks for making my day more memorable and packages are so affordable.</p>
          </div>
          <div className="indicator"></div>
          <div className="bottom flex py-6 w-4/12 justify-center  ">
            <div className=" text-end">
              <h3>Akshaya Shetty</h3>
              <p>CUSTOMER</p>
            </div>
            <div>
              <img className=" object-top" src="https://images.pexels.com/photos/2055033/pexels-photo-2055033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/1046227/pexels-photo-1046227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 3rem 0;

  .indicator {
    content: "";
    width: 0;
    height: 0;
    border-top: 28px solid #4B5563;
    border-left: 32px solid transparent;
    position: relative;
    transform: rotate(270deg);
    /* top: 50px; */
    left: 110px;
    opacity: 0.75;
  }
  .bottom {
    width: 100%;
    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      margin-left: 1.5rem;
      object-fit: cover;
      /* object-position: top; */
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
    }
    p {
      font-size: 0.8rem;
      color: white;
      margin-top: 0.3rem;
    }
  }
`;
