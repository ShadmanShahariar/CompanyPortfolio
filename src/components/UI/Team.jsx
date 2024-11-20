import React from "react";
import "../../styles/team.css";
import team1 from "../../images/team-01.png";
import team2 from "../../images/team-02.png";
import team3 from "../../images/team-03.png";
import team4 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team1,
    name: "Shadman Shahariar",
    position: "Software Engineer",
  },
  {
    imgUrl: team2,
    name: "Mahadi Hasan",
    position: "DevOps Engineer",
  },
  // {
  //   imgUrl: team3,
  //   name: "Imran Chowdhury",
  //   position: "Software Engineer",
  // },
  {
    imgUrl: team4,
    name: "Shourob Ahommod",
    position: "Degital Marketing Officer",
  },
  {
    imgUrl: team2,
    name: "Iftekar Hossain",
    position: "Project Manager",
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <i class="ri-linkedin-box-fill"></i>
                  </span>
                  <span>
                    <i class="ri-earth-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
