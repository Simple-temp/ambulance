
import parademic from "../../assets/p.jpg";

const Paramedic = () => {
  return (
    <div className="parademic-container">
      <div className="inner-parademic-container">
        <div className="prademic-left">
          <h2>Paramedic Programs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum ratione tenetur nulla delectus esse fugiat repellat facere, neque nobis?</p>
          <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aliquid eius! Nobis sit, impedit veniam assumenda quos quia fuga harum at, odio tempora deleniti rem consequuntur cumque. Ipsum, similique distinctio!</i>
          <span>Pass Rate and Retention</span>
        </div>
        <div className="parademic-right">
          <img src={parademic} alt="Paramedic" />
        </div>
      </div>
    </div>
  );
};

export default Paramedic;
