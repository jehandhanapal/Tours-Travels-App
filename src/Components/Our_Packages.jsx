import React from "react";
import { styled } from "styled-components";
import Package_Card from "./Package_Card";

export default function Our_Packages() {
  return (
    <Container>
      <div className="bg"></div>
      <div className="mt-16">
        <h4 className="text-center  py-2 font-semibold text-sm ">HELPS YOU TO FIND YOUR BEST TOUR PACKAGES</h4>
        <h2 className=" text-center text-6xl font-bold  py-2 my-1">
          Our Tour <span className="text-red-600">Packages</span>
        </h2>
      </div>
      <div className="boxes mx-8">
        <div className="boxkerala flex flex-col border-b-2  p-8 my-8">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-8 ">Kerala Tour Packages</h2>
          </div>
          <div className="cardbox   flex justify-between ">
            <Package_Card
              tour={{
                heading: "Premium Kerala Trip",
                days: "6N|7D",
                places: "Cochin-Varkala-Allepey-Munnar-Trivandram-Wayanad-Vagamon",
                url: "https://images.unsplash.com/photo-1530280759083-88ad120b0f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=500&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Exolore Mountains",
                days: "2N|3D",
                places: "Munnar - Thekkady - Vagamon",
                url: "https://images.unsplash.com/photo-1635845604348-893db8ebc170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Exciting Boat Stay",
                days: "1N|2D",
                places: "Kochi - Allepey",
                url: "https://images.unsplash.com/photo-1646487448562-9c98c2651549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Beautiful Beach Vacay",
                days: "2N|3D",
                places: "Varkala - Kovalam - Alappuzha",
                url: "https://images.unsplash.com/photo-1674037229438-a2de94064d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Glorious Kerala",
                days: "2N|3D",
                places: "Wayanad - Athirapally - Iduki",
                url: "https://images.unsplash.com/photo-1630938819413-31072a41572b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
              }}
            />
          </div>
        </div>
        <div className="boxtamilnadu flex flex-col border-b-2 p-8 ">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-8">Tamilnadu Tour Packages</h2>
          </div>
          <div className="cardbox   flex justify-between ">
            <Package_Card
              tour={{
                heading: "Exoloring Southern Tamilnadu",
                days: "2N|3D",
                places: "Kanyakumari - Rameshwaram - Madurai - Velankanni",
                url: "https://images.unsplash.com/photo-1573043712293-2eb70e9e36ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Angel Of Mountains",
                days: "4N|5D",
                places: "Kodaikanal - Ooty - Coonor - Valparai",
                url: "https://images.unsplash.com/photo-1664810029274-dbe57d2e38ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Explore Northern Tamilnadu",
                days: "2N|3D",
                places: "Chennai - Pondicherry - Vellore",
                url: "https://images.unsplash.com/photo-1621831714462-bec8edc4d0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Spritual Tour ",
                days: "3N|4D",
                places: "Madurai - Thanjavur - Trichy - Chidambaram",
                url: "https://images.unsplash.com/photo-1655104089111-f5d4c2a85960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Beauty of Tamilnadu",
                days: "2N|3D",
                places: "Coimbatore - Theni - Pollachi",
                url: "https://images.unsplash.com/photo-1655705683516-4910a6b45d45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
          </div>
        </div>
        <div className="boxkarnataka flex flex-col border-b-2  p-8 ">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-8">Karnataka Tour Packages</h2>
          </div>
          <div className="cardbox   flex justify-between ">
            <Package_Card
              tour={{
                heading: "Exolore Karnataka",
                days: "2N|3D",
                places: "Banglore - Manglore - Mysore",
                url: "https://images.unsplash.com/photo-1587670901371-17326c72ea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Exolore Chikmagalur",
                days: "1N|2D",
                places: "Chikkamagaluru",
                url: "https://images.unsplash.com/photo-1622725859789-8e9ccf920693?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Spritiual Karnataka",
                days: "2N|3D",
                places: "Hampi - Udupi - Murudeshwar",
                url: "https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Beauty of Karnataka",
                days: "2N|3D",
                places: "Coorg - Nandi hills - BR hills",
                url: "https://images.unsplash.com/photo-1678810165067-096b798565a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              }}
            />
          </div>
        </div>
        <div className="boxhoneymoon flex flex-col border-b-2  p-8 ">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-8">Honeymoon Packages</h2>
          </div>
          <div className="cardbox   flex justify-between ">
            <Package_Card
              tour={{
                heading: "Romantic Kerala",
                days: "2N|3D",
                places: "Kochi - Varkala - Allepey",
                url: "https://www.unclesamholidays.com/gallery/Honeymoon0-kerala0.jpg",
              }}
            />
            <Package_Card
              tour={{
                heading: "Love from Mountains",
                days: "3N|4D",
                places: "Munnar - Wayanad - Ooty - Kodaikanal",
                url: "https://www.valparaitourpackages.com/wp-content/uploads/2018/12/keralahoneymoontour-8-350x200.jpg",
              }}
            />
            <Package_Card
              tour={{
                heading: "Party In Goa",
                days: "2N|3D",
                places: "Goa",
                url: "https://images.unsplash.com/photo-1567888818950-737cde12f04c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Romatic Karnataka",
                days: "3N|4D",
                places: "Chikmagalur - Coorg - Mysore",
                url: "https://images.unsplash.com/photo-1621519994490-b87b9401599e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
          </div>
        </div>
        <div className="boxspecial flex flex-col border-b-2  p-8 ">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-8">Special Tour Packages</h2>
          </div>
          <div className="cardbox   flex justify-between ">
            <Package_Card
              tour={{
                heading: "Devotional Tirupathi",
                days: "1N|2D",
                places: "Tirupathi",
                url: "https://images.unsplash.com/photo-1681381570799-90b8f6669863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
            <Package_Card
              tour={{
                heading: "Six Abodes of Murugan",
                days: "4N|5D",
                places: "Palani - Thiruchenur - etc..",
                url: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/arulmigu-dhandayuthapani-swamy-temple-palani-1657867829_3fda42dd1b3ef365f142.webp",
              }}
            />
            <Package_Card tour={{ heading: "Spritual Sabarimala", days: "1N|2D", places: "Sabarimala", url: "https://w0.peakpx.com/wallpaper/293/1000/HD-wallpaper-ayyappa-ayyappan-god.jpg" }} />
            <Package_Card
              tour={{
                heading: "Lets Party - Goa",
                days: "2N|3D",
                places: "Goa",
                url: "https://images.unsplash.com/photo-1525162618450-db04e92d63d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
              }}
            />
          </div>
        </div>
      </div>

    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  .bg {
    background-image: url(https://images.unsplash.com/photo-1589983846997-04788035bc83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);
    height: 80vh;
    background-position: bottom;
    background-size: cover;
  }
`;
