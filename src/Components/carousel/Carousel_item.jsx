import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Carousel_item({ item }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 7, 7, 0.1)) ,url(${item.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  
  };

  return (
    <>
      <Container className="carousel-item min-w-full ">
        <div className="image lg:h-[80vh] h-[50vh]" style={styles}></div>
        <div className="desc absolute top-[15%] lg:top-[25%] md:w-[80%]  lg:w-[60%] w-[90%] text-white ml-8 ">
          <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">{item.title}</h1>
          <p className="my-4 lg:text-lg md:text-base text-xs font-medium">{item.content}</p>
          <button className="my-6">
            <Link className="lg:text-xl md:text-base text-sm  font-semibold px-4 pb-2 pt-2 bg-blue-600 rounded-lg" to={item.path}>
              Read More
            </Link>
          </button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  button {
    border: none;
    :hover {
      background-color:transparent ;
      border: 2px solid blue;
      transition: 0.75s ease ;
      cursor: pointer;
      ;    }
  }
`;
