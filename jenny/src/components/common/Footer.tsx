import React from "react";

import { Flex, Text, Link } from "@chakra-ui/react";

const Footer = (): React.ReactElement => {
  return (
    <Flex
      marginLeft={{ base: "0px", md: "20px", lg: "100px" }}
      marginBottom={{ base: "20px", lg: "20px" }}
      marginTop={{ base: "50px", lg: "100px" }}
      flexDirection="column"
    >
      <Text textStyle="title-medium">Thanks for Visiting!</Text>
      <Text marginTop={{ base: "10px", lg: "30px" }} textStyle="body-regular">
        Feel free to say hello at{" "}
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
      <Text marginTop={{ base: "10px", lg: "30px" }} display="inline-block">
        <Link
          cursor="pointer"
          textStyle="body-bold"
          color="purple.400"
          display="inline-block"
          href="https://www.linkedin.com/in/jennyvong/"
          isExternal
        >
          LinkedIn
        </Link>
        <Text display="inline-block" textStyle="body-regular">
          &nbsp; | &nbsp;
        </Text>
        <Link
          cursor="pointer"
          textStyle="body-bold"
          color="purple.400"
          display="inline-block"
          href="https://github.com/JennyVong"
          isExternal
        >
          Github
        </Link>
      </Text>
      <Text marginTop={{ base: "10px", lg: "30px" }} textStyle="body-regular">
        Created & designed by Jenny Vong
      </Text>
      <Text textStyle="body-regular">© Vong</Text>
    </Flex>
  );
};

export default Footer;
