import React from "react";
import { Flex, Text, Container, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Menu = (): React.ReactElement => {
  return (
    <Container
      position="sticky"
      top="0"
      color="white"
      height="100vh"
      maxW="sm"
      backgroundColor="purple.400"
      margin="0"
      marginRight="60px"
    >
      <Flex
        marginLeft="60px"
        paddingRight="10%"
        flexDirection="column"
        alignItems="start"
      >
        <Flex marginTop="120px" marginBottom="80px" flexDirection="column">
          <Text marginBottom="10px" textStyle="title-large">
            Hi, I'm Jenny :D
          </Text>
          <Text textStyle="body-regular">
            I’m a software engineer passionate about breaking down boundaries
            and making technology more accessible.
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text marginBottom="10px" textStyle="body-regular" id="about">
            about
          </Text>
          <Text marginBottom="10px" textStyle="body-regular" id="about">
            works
          </Text>
          <Link href="https://chakra-ui.com" isExternal>
            resume <ExternalLinkIcon mx="2px" />
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Menu;
