import React from "react";
import { Flex, Spacer, Text, Image } from "@chakra-ui/react";

import JobTile from "../common/JobTile";
import Menu from "../common/menu";

import AWS from "../../assets/aws.svg";
import Kaleidescape from "../../assets/kaleidescape.svg";
import Cubic from "../../assets/cubic.svg";
import Hack from "../../assets/hack.svg";
import Gore from "../../assets/gore.svg";
import Blueprint from "../../assets/blueprint.svg";

const Home = (): React.ReactElement => {
  return (
    <Flex minWidth="max-content" gap="1">
      <Menu />
      <Spacer />
      <Flex flexDirection="column">
        <Flex flexDirection="column">
          <Text color="purple.400" textStyle="body-bold">
            I am currently,
          </Text>
          <Image paddingTop="15px" boxSize="80px" src={Blueprint} alt="logo" />
          <Text textStyle="body-regular">
            a full stack developer building software applications for social
            good at UW Blueprint as part of the Children Aid’s of Society (CAS)
            of Algoma Team.
          </Text>
        </Flex>
        <Flex flexDirection="column" paddingRight="80px">
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
