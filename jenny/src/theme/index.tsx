import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import textStyles from "./textStyles";
import Button from "./buttons";

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        font: textStyles["body-regular"],
        bg: "#060312",
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "Dark",
  },
  fonts: {
    heading: `'PT Serif', sans-serif`,
    body: `'PT Serif', sans-serif`,
  },
  textStyles,
  colors,
  breakpoints,
  components: {
    Button,
  },
});

export default customTheme;
