import React, { useEffect, useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import "./Slideshow.css";

const Slideshow = (): React.ReactElement => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index, colors.length]);
  return (
    <Container
      margin="0 auto"
      overflow="hidden"
      width="500px"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      <Container whiteSpace="nowrap" transition="ease 1000ms">
        {colors.map((backgroundColor, index) => (
          <Container
            display="inline-block"
            height="400px"
            width="100%"
            key={index}
            style={{ backgroundColor }}
          />
        ))}
      </Container>
      <Flex textAlign="center">
        {colors.map((_, idx) => (
          <Container
            key={idx}
            display="inline-block"
            height="20px"
            width="20px"
            borderRadius="50%"
            cursor="pointer"
            margin="15px 7px 0px"
            backgroundColor="#c4c4c4"
          ></Container>
        ))}
      </Flex>
    </Container>
  );
};

export default Slideshow;
