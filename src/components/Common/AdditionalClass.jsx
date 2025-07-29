
import c1 from "../../assets/c1.avif";
import c2 from "../../assets/c2.webp";
import c3 from "../../assets/c3.webp";


const AdditionalClass = () => {
  return (
    <div className="additional-container" style={{marginTop:"50px"}}>
      <h1 className="additional-heading">This is Additional Class</h1>
      <div className="image-row">
        <img src={c1} alt="Class 1" />
        <img src={c2} alt="Class 2" />
        <img src={c3} alt="Class 3" />
      </div>
    </div>
  );
};

export default AdditionalClass;
