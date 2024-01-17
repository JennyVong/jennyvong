import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";

export type JobTileProps = {
  year: string;
  company: string;
  position: string;
  desc: string;
};

const JobTile = ({
  year,
  company,
  position,
  desc,
}: JobTileProps): React.ReactElement => {
  return (
    <Grid templateColumns={{ base: "1", lg: "repeat(2, 1fr)" }}>
      <Flex
        marginBottom={{ base: "10px", md: "20px", lg: "130px" }}
        alignItems="center"
        flexDirection="column"
      >
        <Flex>
          <Text textStyle="title-small">{position} &nbsp;- &nbsp;</Text>
          <Text textStyle="title-small" color="purple.400">
            {company}
          </Text>
        </Flex>
        <Text alignSelf="center" textStyle="body-regular">
          {year}
        </Text>
      </Flex>
      <Text
        display="flex"
        justifySelf="center"
        maxW={{ base: "200px", md: "300px" }}
        textStyle="body-regular"
      >
        {desc}
      </Text>
    </Grid>
  );
};

export default JobTile;
