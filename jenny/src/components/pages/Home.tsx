import React from "react";
import { Flex, Text, Image, Grid, GridItem } from "@chakra-ui/react";

import JobTile from "../common/JobTile";
import Line from "../common/Line";

import Self from "../../assets/self1.png";
import Self1 from "../../assets/seelf.png";

const Home = (): React.ReactElement => {
  return (
    <Flex margin="125px">
      <Flex flexDirection="column">
        <Flex
          paddingRight="150px"
          paddingLeft="150px"
          marginTop="60px"
          marginBottom="100px"
          justifyContent="flex-end"
        >
          <Image
            marginRight="80px"
            borderRadius="full"
            height="300px"
            src={Self}
            alt="Jenny Vong"
          />
          <Flex alignSelf="center" flexDirection="column">
            <Text textStyle="title-large">Hi, I'm Jenny!</Text>
            <Text marginBottom="15px" textStyle="title-small">
              ...student @ University of Waterloo, SDE @ AWS, FullStack @ UW
              Blueprint
            </Text>
            <Text
              display="inline-block"
              paddingRight="210px"
              textStyle="body-regular"
            >
              I’m a software engineer passionate about breaking down boundaries
              and making technology more accessible. Currently supporting EC2
              systems @{" "}
              <Text
                display="inline-block"
                textDecoration="underline"
                textStyle="body-bold"
                color="purple.400"
              >
                AWS
              </Text>
            </Text>
          </Flex>
        </Flex>

        <Line />

        <Flex
          marginTop="100px"
          marginBottom="100px"
          alignItems="center"
          paddingRight="50px"
          paddingLeft="50px"
        >
          <Flex marginRight="150px" flexDirection="column">
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
          <Image
            marginLeft="50px"
            boxSize="350px"
            src={Self1}
            alt="Jenny Vong"
          />
        </Flex>

        <Line />

        <Grid
          marginTop="100px"
          templateColumns={{ base: "1", lg: "repeat(3, 1fr)" }}
          gap={6}
        >
          <GridItem
            area={"Text"}
            colSpan={1}
            maxW="150px"
            textStyle="title-medium"
            display="flex"
            justifySelf="center"
          >
            Professional Experience
          </GridItem>
          <GridItem area={"Flex"} colSpan={2} flexDirection="column">
            <JobTile
              year="May 2023 - Present"
              company="UW Blueprint"
              position="Fullstack Developer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
            <JobTile
              year="Jan 2023 - Apr 2023"
              company="Amazon Web Services"
              position="Software Development Engineer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
            <JobTile
              year="May 2022 - Aug 2022"
              company="Kaleidescape"
              position="Software Engineer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
            <JobTile
              year="Sep 2021 - Dec 2021"
              company="Cubic Health"
              position="Software Engineer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
            <JobTile
              year="Jan 2021 - Aug 2021"
              company="Hack the 6ix"
              position="Fullstack Developer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
            <JobTile
              year="Jan 2021 - Apr 2021"
              company="Gore Mutual Insurance"
              position="Frontend Developer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            />
          </GridItem>
        </Grid>

        <Line />

        <Grid
          marginTop="100px"
          templateColumns={{ base: "1", lg: "repeat(3, 1fr)" }}
          gap={6}
        ></Grid>
      </Flex>
    </Flex>
  );
};

export default Home;
