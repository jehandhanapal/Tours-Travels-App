import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export default function Carousel_item({ item }) {
  const styles = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 7, 7, 0.1)) ,url(${item.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "80vh",
  };

  return (
    <>
      <Container className="carousel-item min-w-full ">
        <div className="image" style={styles}></div>
        <div className="desc absolute top-[20%] w-[60%] text-white ml-8 ">
          <h1 className="text-6xl font-bold">{item.title}</h1>
          <p className="my-4 text-lg font-semibold">{item.content}</p>
          <button className="my-6">
            <Link className="text-xl  font-semibold px-4 pb-2 pt-1 bg-blue-600 rounded-lg" to={item.path}>
              Read More
            </Link>
          </button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 80vh;
`;
