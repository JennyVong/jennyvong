import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

export type JobTileProps = {
  year: string;
  company: string;
  desc: string;
  image: string;
  size: string;
};

const JobTile = ({
  year,
  company,
  desc,
  image,
  size,
}: JobTileProps): React.ReactElement => {
  const bs = size + "px";
  return (
    <Box marginBottom="50px">
      <Flex alignItems="center">
        <Text marginRight="20px" color="gray.50" textStyle="body-regular">
          {year}
        </Text>
        <Image marginTop="5px" boxSize={bs} src={image} alt="logo" />
        <Box marginLeft="30px">
          <Text textStyle="title-small">{company}</Text>
          <Text textStyle="body-regular">{desc}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default JobTile;
