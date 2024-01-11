import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

export type JobTileProps = {
  year: string;
  company: string;
  desc: string;
  image: string;
};

const JobTile = ({
  year,
  company,
  desc,
  image,
}: JobTileProps): React.ReactElement => {
  return (
    <Box maxW="2xl">
      <Flex alignItems="center">
        <Text color="gray.50" textStyle="body-regular">
          {year}
        </Text>
        <Image paddingTop="15px" boxSize="80px" src={image} alt="logo" />
        <Box>
          <Text textStyle="title-small">{company}</Text>
          <Text textStyle="body-regular">{desc}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default JobTile;
