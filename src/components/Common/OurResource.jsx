import React from 'react';
import r1 from "../../assets/r1.jpg";
import r2 from "../../assets/r2.webp";
import r3 from "../../assets/r3.webp";


const data = [
  {
    id: 1,
    img: r1,
    title: "Continuing Education",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel earum sit. Ad, neque dignissimos."
  },
  {
    id: 2,
    img: r2,
    title: "Online Certification",
    desc: "Accusamus, distinctio aliquid. Ducimus, quae! Quasi iusto tenetur obcaecati sit labore, reprehenderit voluptas!"
  },
  {
    id: 3,
    img: r3,
    title: "Paramedic Training",
    desc: "Cumque officiis error eos? Corrupti modi illo iusto natus? Enim ad quo alias?"
  }
];

const OurResource = () => {
  return (
    <div className="resource-container">
      <h2 className="resource-title">Our Resources</h2>
      <div className="resource-grid">
        {data.map((item) => (
          <div className="inner-resource-container" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="resources-info">
              <div className="resources-info-inner">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="resources-btn">Learn More</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurResource;
