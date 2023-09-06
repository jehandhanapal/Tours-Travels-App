import React from "react";
import { styled } from "styled-components";
import Vehicle_Card from "./Vehicle_Card";

export default function Our_Vehicles() {
  return (
    <Container>
      <div className="bg"></div>
      <div className="my-16">
        <h4 className="text-center  py-2 font-semibold text-sm ">HELPS YOU TO FIND YOUR BEST VEHICLE</h4>
        <h1 className=" text-center text-6xl font-bold  py-2 my-1">
          Our Vehicle <span className="text-red-600">Listing</span>
        </h1>
      </div>
      <div className="cards grid grid-cols-3 px-8 gap-6">
        <Vehicle_Card
          vehicle={{
            name: "Toyoto Etios",
            make: "2021",
            rentperkm: "13/km",
            rentperday: "3000/day",
            geartype: "Manual",
            seating: "4",
            fuel: "Diesel",
            rating: "4.8",
            url: "https://image1.jdomni.in/banner/20072023/D2/91/12/E33F6A1E0F7AA0A161979DDE6E_1689809860561.jpeg?output-format=webp",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Hyundai i20",
            make: "2018",
            rentperkm: "14/km",
            rentperday: "3200/day",
            geartype: "Manual",
            seating: "4",
            fuel: "Petrol",
            rating: "4.4",
            url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/i20_1_1200x768.png?size=690:388",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Swift Dzire",
            make: "2019",
            rentperkm: "12/km",
            rentperday: "2900/day",
            geartype: "Manual",
            seating: "4",
            fuel: "Diesel",
            rating: "4.5",
            url: "https://imgd.aeplcdn.com/642x361/n/cw/ec/145893/left-front-three-quarter0.jpeg?isig=0&q=80",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Marazzo",
            make: "2013",
            rentperkm: "17/km",
            rentperday: "4000/day",
            geartype: "Manual",
            seating: "7",
            fuel: "Diesel",
            rating: "4.6",
            url: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2018-mahindra-marazzo-06_4.jpg",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Toyoto Innova",
            make: "2014",
            rentperkm: "18/km",
            rentperday: "4100/day",
            geartype: "Manual",
            seating: "7",
            fuel: "Diesel",
            rating: "4.8",
            url: "https://image3.jdomni.in/banner/20072023/BE/87/04/78A3B25BFA3AF0F4E0A8703C56_1689809856579.jpeg?output-format=webp",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Suziki Ertiga",
            make: "2018",
            rentperkm: "16/km",
            rentperday: "3900/day",
            geartype: "Manual",
            seating: "7",
            fuel: "Diesel",
            rating: "4.3",
            url: "https://d2m3nfprmhqjvd.cloudfront.net/blog/20221116125104/Spinny-Assured-Maruti-Ertiga-side-jpg-1012x675.webp",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Tempo Traveller",
            make: "2012",
            rentperkm: "21/km",
            rentperday: "5000/day",
            geartype: "Manual",
            seating: "12",
            fuel: "Diesel",
            rating: "4.5",
            url: "https://image3.jdomni.in/banner/20072023/00/7A/9F/E61654BD2AE6BF8DFB3B84063A_1689809853741.jpeg?output-format=webp",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Tempo Traveller",
            make: "2016",
            rentperkm: "22/km",
            rentperday: "5250/day",
            geartype: "Manual",
            seating: "14",
            fuel: "Diesel",
            rating: "4.9",
            url: "https://image2.jdomni.in/banner/20072023/5B/50/D6/D022ED48F5614040A9FD906AEB_1689809853337.jpeg?output-format=webp",
          }}
        />
        <Vehicle_Card
          vehicle={{
            name: "Eicher Coach",
            make: "2014",
            rentperkm: "24/km",
            rentperday: "6000/day",
            geartype: "Manual",
            seating: "21",
            fuel: "Diesel",
            rating: "4.6",
            url: "https://image1.jdomni.in/banner/20072023/31/67/A0/7264718AAC79CB36FF1A90338A_1689809854977.jpeg?output-format=webp",
          }}
        />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  .bg {
    background-image: url(https://images.unsplash.com/photo-1587580945215-5d4aabb2c8ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1414&q=80);
    height: 40vh;
    background-position: center;
    background-size: cover;
  }
`;
