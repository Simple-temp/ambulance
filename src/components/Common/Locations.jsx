import React from 'react';
import location1 from "../../assets/l1.jpg";
import location2 from "../../assets/l2.jpeg";
import location3 from "../../assets/l3.webp";


const data = [
  {
    id: 1,
    title: "Training Program 1",
    img: location1
  },
  {
    id: 2,
    title: "Training Program 2",
    img: location2
  },
  {
    id: 3,
    title: "Training Program 3",
    img: location3
  }
];

const Locations = () => {
  return (
    <div className="location-container">
      <div className="location-inner">
        <h1>Our Locations Programs</h1>
        <div className="location-box-wrapper">
          {data.map((item) => (
            <div className="location-inner-box" key={item.id}>
              <h4>{item.title}</h4>
              <img src={item.img} alt={item.title} />
              <p>Learn More</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
