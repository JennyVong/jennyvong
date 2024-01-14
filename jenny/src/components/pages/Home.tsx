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
import Self from "../../assets/seelf.png";

const Home = (): React.ReactElement => {
  return (
    <Flex marginRight="80px">
      <Menu />
      <Flex flexDirection="column">
        <Flex
          marginRight="30px"
          marginLeft="50px"
          marginTop="60px"
          marginBottom="30px"
        >
          <Image
            marginRight="50px"
            height="375px"
            src={Self}
            alt="Jenny Vong"
          />
          <Flex flexDirection="column">
            <Text textStyle="body-regular" marginBottom="30px">
              I'm Jenny, an aspiring Software Developer from Toronto, Canada.
              I'm currently a fourth year student studying Mathematics at the
              University of Waterloo. As an aspiring developer with a
              Mathematical background in Statistics, I've found ways to apply
              development strategies to a variety of problem spaces and take
              ownership in various projects and software development processes.
            </Text>
            <Text textStyle="body-regular" marginBottom="30px">
              Outside of school and work, you can find me doodling in my bullet
              journal, playing open rec volleyball, weightlifting in the gym, or
              attempting to cook new recipes I see on tiktok!
            </Text>
            <Text textStyle="body-regular">
              Feel free to reach out for a chat at jenny.vong@uwaterloo.ca! :)
            </Text>
          </Flex>
        </Flex>
        <Flex
          maxW="2xl"
          marginBottom="40px"
          marginLeft="50px"
          flexDirection="column"
        >
          <Text color="purple.400" textStyle="body-bold">
            I am currently,
          </Text>
          <Image
            alignSelf="center"
            marginTop="20px"
            marginBottom="40px"
            boxSize="80px"
            src={Blueprint}
            alt="logo"
          />
          <Text textStyle="body-regular">
            a full stack developer building software applications for social
            good at UW Blueprint as part of the Children Aid’s of Society (CAS)
            of Algoma Team.
          </Text>
        </Flex>
        <Flex flexDirection="column" paddingRight="80px">
          <Text
            marginBottom="20px"
            marginLeft="50px"
            color="purple.400"
            textStyle="title-medium"
          >
            Professional Experience
          </Text>
          <JobTile
            year="2023"
            company="Amazon Web Services"
            desc="as a Software Development Engineer supporting EC2 systems"
            image={AWS}
            size="100"
          />
          <Spacer />
          <JobTile
            year="2022"
            company="Kaleidescape"
            desc="as a Software Engineer Co-op"
            image={Kaleidescape}
            size="100"
          />
          <Spacer />
          <JobTile
            year="2021"
            company="Cubic Health Inc."
            desc="as a Software Engineer Co-op"
            image={Cubic}
            size="100"
          />
          <Spacer />
          <JobTile
            year="2021"
            company="Hack the 6ix"
            desc="as a Fullstack Developer collaborating on website and system improvements for 1000 + hackers"
            image={Hack}
            size="100"
          />
          <Spacer />
          <JobTile
            year="2021"
            company="Gore Mutual Insurance"
            desc="as a Frontend Developer"
            image={Gore}
            size="100"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
