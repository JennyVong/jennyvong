import React from "react";
import { Flex, Text, Grid, Link, Image } from "@chakra-ui/react";

export type JobTileProps = {
  year: string;
  company: string;
  position: string;
  desc: string;
  link: string;
  img: string;
};

const JobTile = ({
  year,
  company,
  position,
  desc,
  link,
  img,
}: JobTileProps): React.ReactElement => {
  return (
    <Grid
      marginBottom={{ base: "100px", lg: "0px" }}
      templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
    >
      <Flex
        marginBottom={{ base: "10px", md: "20px", lg: "130px" }}
        alignItems={{ base: "start", lg: "center" }}
        flexDirection="column"
      >
        <Flex>
          <Text textStyle="title-small">{position} &nbsp;- &nbsp;</Text>
          <Link
            cursor="pointer"
            textStyle="title-small"
            color="purple.400"
            href={link}
            isExternal
          >
            {company}
          </Link>
        </Flex>
        <Text
          alignSelf={{ base: "start", lg: "center" }}
          textStyle="body-regular"
        >
          {year}
        </Text>
      </Flex>
      <Image
        marginBottom={{ base: "10px", md: "20px", lg: "130px" }}
        src={img}
        alignSelf="start"
        justifySelf={{ base: "center", md: "start", lg: "center" }}
      />
      <Text
        display="flex"
        justifySelf={{ base: "start", lg: "center" }}
        maxW={{ base: "300px", md: "420px", lg: "300px" }}
        textStyle="body-regular"
      >
        {desc}
      </Text>
    </Grid>
  );
};

export default JobTile;
