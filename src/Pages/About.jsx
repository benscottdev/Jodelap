import NavBar from "../Components/NavBar";

function About() {
  return (
    <div className="aboutContainer">
      <NavBar />
      <div className="about">
        {/* REPLACE WITH RIDING IMAGE vvvv */}
        <span id="IMAGEPLACEHOLDER"></span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          quibusdam autem, aperiam rem a quisquam, quos est maxime, corrupti
          cumque ex itaque provident. Iusto laudantium voluptatum ipsum,
          voluptate quis tempora.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          et esse reiciendis tempore non quibusdam odit veniam fugiat ipsum,
          quia placeat quae corrupti nostrum expedita nihil! Odit aut nam eos.
        </p>
      </div>
    </div>
  );
}
export default About;
