import React from "react";

import { Container } from "@chakra-ui/react";

export type LineProps = {
  refs: any;
};

const Line = ({ refs }: LineProps): React.ReactElement => {
  return (
    <Container
      ref={refs}
      display="flex"
      borderRadius="100%"
      height="1px"
      backgroundColor="white"
      maxW={{ base: "500px", md: "700px", lg: "1300px" }}
    ></Container>
  );
};

export default Line;
