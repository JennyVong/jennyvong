import React from "react";
import JobTile from "../common/JobTile";
import AWS from "../../assets/aws.svg";
import Kaleidescape from "../../assets/kaleidescape.svg";
import Cubic from "../../assets/cubic.svg";
import Hack from "../../assets/hack.svg";
import Gore from "../../assets/gore.svg";

const Home = (): React.ReactElement => {
  return (
    <div>
      <JobTile
        year="2023"
        company="Amazon Web Services"
        desc="as a Software Development Engineer supporting EC2 systems"
        image={AWS}
      />
      <JobTile
        year="2022"
        company="Kaleidescape"
        desc="as a Software Engineer Co-op"
        image={Kaleidescape}
      />
      <JobTile
        year="2021"
        company="Cubic Health Inc."
        desc="as a Software Engineer Co-op"
        image={Cubic}
      />
      <JobTile
        year="2021"
        company="Hack the 6ix"
        desc="as a Fullstack Developer collaborating on website and system improvements for 1000 + hackers"
        image={Hack}
      />
      <JobTile
        year="2021"
        company="Gore Mutual Insurance"
        desc="as a Frontend Developer"
        image={Gore}
      />
    </div>
  );
};

export default Home;
