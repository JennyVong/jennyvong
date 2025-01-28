import React from "react";
import { Flex, Button, HStack, Text, Link } from "@chakra-ui/react";

export type NavProps = {
  aboutScrollCallback: () => void;
  experienceScrollCallback: () => void;
  projectScrollCallback: () => void;
  contactScrollCallback: () => void;
};

const NavBar = ({
  aboutScrollCallback,
  experienceScrollCallback,
  projectScrollCallback,
  contactScrollCallback,
}: NavProps): React.ReactElement => {
  return (
    <Flex
      display={{ base: "none", lg: "flex" }}
      bgColor="black.50"
      position="fixed"
      h="100px"
      w="100%"
      align="center"
      justify="end"
    >
      <HStack as="nav" spacing="10" padding="50px">
        <Button
          _active={{ color: "purple.400" }}
          variant="nav"
          onClick={() => aboutScrollCallback()}
        >
          <Text _hover={{ color: "purple.400" }} textStyle="title-small">
            ABOUT
          </Text>
        </Button>
        <Button variant="nav" onClick={() => experienceScrollCallback()}>
          <Text _hover={{ color: "purple.400" }} textStyle="title-small">
            EXPERIENCE
          </Text>
        </Button>
        <Button variant="nav" onClick={() => projectScrollCallback()}>
          <Text _hover={{ color: "purple.400" }} textStyle="title-small">
            WORKS
          </Text>
        </Button>
        <Button variant="nav" onClick={() => contactScrollCallback()}>
          <Text _hover={{ color: "purple.400" }} textStyle="title-small">
            CONTACT
          </Text>
        </Button>
        <Button variant="nav">
          <Link
            textStyle="title-small"
            href="https://drive.google.com/file/d/1UFtT9oNuYKB2HwCJw-tYHYLbpdI-2AbR/view?usp=sharinghttps://drive.google.com/file/d/1UFtT9oNuYKB2HwCJw-tYHYLbpdI-2AbR/view?usp=sharing"
            isExternal
          >
            <Text _hover={{ color: "purple.400" }} textStyle="title-small">
              RESUME
            </Text>
          </Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
