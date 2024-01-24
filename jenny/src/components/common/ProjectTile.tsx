import React from "react";

import { Flex, Text, Grid, Image, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export type ProjectTileProps = {
  title: string;
  type: string;
  techs: string;
  desc: string;
  link?: string;
  glink: string;
  img: string;
  altText: string;
};

const ProjectTile = ({
  title,
  type,
  techs,
  desc,
  link,
  glink,
  img,
  altText,
}: ProjectTileProps): React.ReactElement => {
  return (
    <Grid
      marginBottom="130px"
      templateColumns={{ base: "1", lg: "repeat(2, 1fr)" }}
    >
      <Image src={img} alt={altText} />
      <Flex marginLeft={{ base: "0px", lg: "60px" }} flexDirection="column">
        {link ? (
          <Link
            cursor="pointer"
            textStyle="title-small-bold"
            color="purple.400"
            display="inline-block"
            href={link}
            isExternal
          >
            {title} <ExternalLinkIcon mx="2px" />
          </Link>
        ) : (
          <Text textStyle="title-small-bold" color="purple.400">
            {title}
          </Text>
        )}
        <Text textStyle="body-bold">{type}</Text>
        <Text
          maxW={{ base: "200px", md: "300px" }}
          textStyle="body-regular"
          marginTop="30px"
        >
          {desc}
        </Text>
        <Text marginTop="20px" textStyle="body-bold" color="purple.400">
          Technologies:
        </Text>
        <Text textStyle="body-regular">{techs}</Text>
        <Text marginTop="20px" textStyle="body-regular" display="inline-block">
          View source code on{" "}
          <Link
            cursor="pointer"
            textStyle="body-regular"
            color="purple.400"
            display="inline-block"
            href={glink}
            isExternal
          >
            Github <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </Flex>
    </Grid>
  );
};

export default ProjectTile;
