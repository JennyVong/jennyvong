import React from "react";

import { Flex, Text, Grid, Image, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export type ProjectTileProps = {
  title: string;
  type: string;
  techs: string;
  desc: string;
  link: string;
  img: string;
  altText: string;
};

const ProjectTile = ({
  title,
  type,
  techs,
  desc,
  link,
  img,
  altText,
}: ProjectTileProps): React.ReactElement => {
  return (
    <Grid templateColumns={{ base: "1", lg: "repeat(2, 1fr)" }}>
      <Image src={img} alt={altText} />
      <Flex flexDirection="column">
        <Text textStyle="title-small" color="purple.400">
          {title}
        </Text>
        <Text textStyle="body-bold">{type}</Text>
        <Text textStyle="body-regular">{desc}</Text>
        <Text textStyle="body-bold" color="purple.400">
          Technologies:
        </Text>
        <Text textStyle="body-regular">{techs}</Text>
        <Text textStyle="body-regular" display="inline-block">
          View source code on{" "}
        </Text>
        <Link href={link} isExternal>
          Github <ExternalLinkIcon mx="2px" />
        </Link>
      </Flex>
    </Grid>
  );
};

export default ProjectTile;
