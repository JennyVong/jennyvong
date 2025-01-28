import React, { useRef } from "react";
import { Flex, Text, Image, Grid, GridItem, Link } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import JobTile from "../common/JobTile";
import ProjectTile from "../common/ProjectTile";
import Line from "../common/Line";
import NavBar from "../menu/NavBar";
import MenuBar from "../menu/MenuBar";

import Self from "../../assets/portrait-round.png";
import Spacestagram from "../../assets/space.png";
import Mario from "../../assets/mario.png";
import Sketchy from "../../assets/sketchy.svg";
import Footer from "../common/Footer";
import Bujo from "../../assets/bujo.png";
import Udon from "../../assets/udon.png";
import Friends from "../../assets/friends.png";
import Mom from "../../assets/mom.png";
import Pottery from "../../assets/pottery.png";
import Sister from "../../assets/sister.png";
import AWS from "../../assets/aws.svg";
import Blueprint from "../../assets/blueprint.svg";
import Kaleidescape from "../../assets/kaleidescape.png";
import Cubic from "../../assets/cubic.png";
import Hack from "../../assets/hack.svg";
import Gore from "../../assets/gore.svg";

const Home = (): React.ReactElement => {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const experienceRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);

  const aboutScroll = () => {
    if (aboutRef?.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const experienceScroll = () => {
    if (experienceRef?.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const projectScroll = () => {
    if (projectRef?.current) {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const contactScroll = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Flex flexDirection="column">
      <Flex top="2" right="2" position="fixed">
        <MenuBar
          aboutScrollCallback={aboutScroll}
          experienceScrollCallback={experienceScroll}
          projectScrollCallback={projectScroll}
          contactScrollCallback={contactScroll}
        />
      </Flex>
      <NavBar
        aboutScrollCallback={aboutScroll}
        experienceScrollCallback={experienceScroll}
        projectScrollCallback={projectScroll}
        contactScrollCallback={contactScroll}
      />
      <Flex margin={{ base: "50px", lg: "125px" }} flexDirection="column">
        <Flex
          paddingRight={{ base: "0", md: "80px", lg: "150px" }}
          paddingLeft={{ base: "0", md: "80px", lg: "150px" }}
          marginBottom="100px"
          justifyContent="flex-end"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Image
            marginRight={{ base: "0px", lg: "80px" }}
            marginBottom={{ base: "50px", lg: "0" }}
            style={{ borderColor: "purple.400" }}
            borderRadius="full"
            boxSize={{ base: "180px", lg: "300px" }}
            alignSelf={{ base: "center" }}
            src={Self}
            alt="Jenny Vong"
          />
          <Flex alignSelf="center" flexDirection="column">
            <Text textStyle="title-large">Hi, I'm Jenny!</Text>
            <Text marginBottom="15px" textStyle="title-small">
              ...student @ University of Waterloo, prev @ AWS
            </Text>
            <Text
              display="inline-block"
              paddingRight={{ base: "0px", md: "0", lg: "210px" }}
              textStyle="body-regular"
            >
              I’m a software engineer passionate about breaking down boundaries
              and making technology more accessible. Currently streamlining
              clinical trial operations @{" "}
              <Link
                cursor="pointer"
                display="inline-block"
                textStyle="body-bold"
                color="purple.400"
                href="https://vial.com"
                isExternal
              >
                Vial
              </Link>
            </Text>
          </Flex>
        </Flex>

        <div id="about">
          <Line refs={aboutRef} />
        </div>
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          marginTop="100px"
          marginBottom="100px"
          alignItems="center"
          paddingRight={{ base: "10px", md: "50px", lg: "50px" }}
          paddingLeft={{ base: "10px", md: "50px", lg: "50px" }}
        >
          <Flex
            marginRight={{ base: "0px", lg: "150px" }}
            marginBottom={{ base: "100px", lg: "0px" }}
            flexDirection="column"
            alignSelf={{ base: "center" }}
          >
            <Text textStyle="body-regular" marginBottom="30px">
              I'm Jenny, an aspiring Software Developer from Toronto, Canada.
              I'm currently a fourth year student studying Statistics & Computer
              Science at the University of Waterloo. As an aspiring developer
              with a Mathematical background in Statistics, I've found ways to
              apply development strategies to a variety of problem spaces and
              take ownership in various projects and software development
              processes.
            </Text>
            <Text textStyle="body-regular" marginBottom="30px">
              Outside of school and work, you can find me doodling in my bullet
              journal, playing open rec volleyball, weightlifting in the gym, or
              attempting to cook new recipes I see on tiktok!
            </Text>
            <Text textStyle="body-regular">
              Feel free to reach out for a chat at{" "}
              <Link
                cursor="pointer"
                textStyle="body-regular"
                color="purple.400"
                display="inline-block"
                href="mailto:jenny.vong@uwaterloo.ca"
                isExternal
              >
                jenny.vong@uwaterloo.ca
              </Link>{" "}
              :)
            </Text>
          </Flex>
          <Carousel
            width="280px"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
          >
            <div>
              <Image src={Sister} />
            </div>
            <div>
              <Image src={Udon} />
            </div>
            <div>
              <Image src={Friends} />
            </div>
            <div>
              <Image src={Bujo} />
            </div>
            <div>
              <Image src={Mom} />
            </div>
            <div>
              <Image src={Pottery} />
            </div>
          </Carousel>
        </Flex>

        <div id="experience">
          <Line refs={experienceRef} />
        </div>

        <Flex
          alignSelf="center"
          display={{ lg: "none" }}
          flexDirection="column"
        >
          <Text marginTop="100px" marginBottom="50px" textStyle="title-medium">
            Professional Experience
          </Text>
          <JobTile
            year="Feb 2024 - Apr 2024"
            company="Amazon Web Services"
            position="Software Development Engineer"
            desc="Managed data packet processing for internal AWS services as a
            member of EC2 Networking Hyperplane team"
            link="https://aws.amazon.com/ec2/"
            img={AWS}
          />
          <JobTile
            year="May 2023 - Apr 2024"
            company="UW Blueprint"
            position="Fullstack Developer"
            desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
            link="https://uwblueprint.org/"
            img={Blueprint}
          />
          <JobTile
            year="Jan 2023 - Apr 2023"
            company="Amazon Web Services"
            position="Software Development Engineer"
            desc="Managed data packet processing for internal AWS services as a
            member of EC2 Networking Hyperplane team"
            link="https://aws.amazon.com/ec2/"
            img={AWS}
          />
          <JobTile
            year="May 2022 - Aug 2022"
            company="Kaleidescape"
            position="Software Engineer"
            desc="Launched CRUD movie collection management functionality for web store using Java, PostgreSQL, and PHP"
            link="https://www.kaleidescape.com/"
            img={Kaleidescape}
          />
          <JobTile
            year="Sep 2021 - Dec 2021"
            company="Cubic Health"
            position="Software Engineer"
            desc="Collaborated with 2 Full-Stack Developers to develop an application to view and edit 100 000+ drug product information using Angular"
            link="https://cubic.ca/"
            img={Cubic}
          />
          <JobTile
            year="Jan 2021 - Aug 2021"
            company="Hack the 6ix"
            position="Fullstack Developer"
            desc="Collaborated with 3 Developer Executives to develop an informative
            and user-friendly website for 1000+ hackers using Vue.js"
            link="https://hackthe6ix.com/"
            img={Hack}
          />
          <JobTile
            year="Jan 2021 - Apr 2021"
            company="Gore Mutual"
            position="Frontend Developer"
            desc="Collaborated with 3 developers to rebuild frontend components of newly main insurance broker web application using Angular"
            link="https://www.goremutual.ca/"
            img={Gore}
          />
        </Flex>

        <Grid
          display={{ base: "none", lg: "grid" }}
          marginTop="100px"
          templateColumns={{ md: "repeat(4, 1fr)" }}
          gap={6}
        >
          <GridItem
            area={"Text"}
            colSpan={1}
            maxW="180px"
            textStyle="title-medium"
            display="flex"
            justifySelf="center"
          >
            Professional Experience
          </GridItem>
          <GridItem area={"Flex"} colSpan={3} flexDirection="column">
            <JobTile
              year="Feb 2024 - Apr 2024"
              company="Amazon Web Services"
              position="Software Engineer"
              desc="Managed data packet processing for internal AWS services as a
            member of EC2 Networking Hyperplane team"
              link="https://aws.amazon.com/ec2/"
              img={AWS}
            />
            <JobTile
              year="May 2023 - Apr 2024"
              company="UW Blueprint"
              position="Fullstack Developer"
              desc="Collaborated with 8 developers to build an optimized case man-
              agement application for Children’s Aid Society using React and Flask"
              link="https://uwblueprint.org/"
              img={Blueprint}
            />
            <JobTile
              year="Jan 2023 - Apr 2023"
              company="Amazon Web Services"
              position="Software Engineer"
              desc="Managed data packet processing for internal AWS services as a
            member of EC2 Networking Hyperplane team"
              link="https://aws.amazon.com/ec2/"
              img={AWS}
            />
            <JobTile
              year="May 2022 - Aug 2022"
              company="Kaleidescape"
              position="Software Engineer"
              desc="Launched CRUD movie collection management functionality for web store using Java, PostgreSQL, and PHP"
              link="https://www.kaleidescape.com/"
              img={Kaleidescape}
            />
            <JobTile
              year="Sep 2021 - Dec 2021"
              company="Cubic Health"
              position="Software Engineer"
              desc="Collaborated with 2 Full-Stack Developers to develop an application to view and edit 100 000+ drug product information using Angular"
              link="https://cubic.ca/"
              img={Cubic}
            />
            <JobTile
              year="Jan 2021 - Aug 2021"
              company="Hack the 6ix"
              position="Fullstack Developer"
              desc="Collaborated with 3 Developer Executives to develop an informative
            and user-friendly website for 1000+ hackers using Vue.js"
              link="https://hackthe6ix.com/"
              img={Hack}
            />
            <JobTile
              year="Jan 2021 - Apr 2021"
              company="Gore Mutual"
              position="Frontend Developer"
              desc="Collaborated with 3 developers to rebuild frontend components of newly main insurance broker web application using Angular"
              link="https://www.goremutual.ca/"
              img={Gore}
            />
          </GridItem>
        </Grid>

        <div id="works">
          <Line refs={projectRef} />
        </div>

        <Flex
          marginBottom="80px"
          alignSelf="center"
          display={{ lg: "none" }}
          flexDirection="column"
        >
          <Text marginTop="100px" marginBottom="50px" textStyle="title-medium">
            More Works
          </Text>
          <ProjectTile
            title="Spacestagram"
            type="Personal Project"
            desc="Fusion of Instagram and Pinterest web app to display NASA Rover photos through NASA API"
            techs="Angular (Typescript)"
            link="https://jennyvong.github.io/spacestagram/"
            glink="https://github.com/JennyVong/spacestagram"
            img={Spacestagram}
            altText="spacestagram"
          />
          <ProjectTile
            title="MarioPlan"
            type="Personal Project"
            desc="Blog web application to post and view blog posts with user auth system"
            techs="React (JavaScript), Redux, Firebase"
            link="https://jv-marioplan.web.app/signup"
            glink="https://github.com/JennyVong/React-Redux-Firebase-App"
            img={Mario}
            altText="marioplan"
          />
          <ProjectTile
            title="Sketchy"
            type="Hack the North, 2021"
            desc="Google Chrome Extension to write notes on notepad while browsing the web to study"
            techs="Javascript, HTML, CSS"
            glink="https://github.com/terryluan12/Sketchy"
            img={Sketchy}
            altText="sketchy"
          />
        </Flex>

        <Grid
          display={{ base: "none", lg: "grid" }}
          marginTop="100px"
          templateColumns={{ md: "repeat(3, 1fr)" }}
          gap={6}
        >
          <GridItem
            area={"Text"}
            maxW="180px"
            colSpan={1}
            textStyle="title-medium"
            display="flex"
            justifySelf="center"
          >
            MORE PROJECTS
          </GridItem>
          <GridItem area={"Flex"} colSpan={2} flexDirection="column">
            <ProjectTile
              title="Spacestagram"
              type="Personal Project"
              desc="Fusion of Instagram and Pinterest web app to display NASA Rover photos through NASA API"
              techs="Angular (Typescript)"
              link="https://jennyvong.github.io/spacestagram/"
              glink="https://github.com/JennyVong/spacestagram"
              img={Spacestagram}
              altText="spacestagram"
            />
            <ProjectTile
              title="MarioPlan"
              type="Personal Project"
              desc="Blog web application to post and view blog posts with user auth system"
              techs="React (JavaScript), Redux, Firebase"
              link="https://jv-marioplan.web.app/signup"
              glink="https://github.com/JennyVong/React-Redux-Firebase-App"
              img={Mario}
              altText="marioplan"
            />
            <ProjectTile
              title="Sketchy"
              type="Hack the North, 2021"
              desc="Google Chrome Extension to write notes on notepad while browsing the web to study"
              techs="Javascript, HTML, CSS"
              glink="https://github.com/terryluan12/Sketchy"
              img={Sketchy}
              altText="sketchy"
            />
          </GridItem>
        </Grid>

        <div id="contact">
          <Line refs={contactRef} />
        </div>

        <Footer />
      </Flex>
    </Flex>
  );
};

export default Home;
