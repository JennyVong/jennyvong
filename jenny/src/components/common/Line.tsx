import React from "react";

import { Container } from "@chakra-ui/react";

const Line = (): React.ReactElement => {
  return (
    <Container
      display="flex"
      borderRadius="100%"
      height="1px"
      backgroundColor="white"
      maxW={{ base: "50px", md: "700px", lg: "1300px" }}
    ></Container>
  );
};

export default Line;
