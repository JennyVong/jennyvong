import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import textStyles from "./textStyles";

const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        font: textStyles["body-regular"],
        background: colors["background"],
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    heading: `'PT Serif', sans-serif`,
    body: `'PT Serif', sans-serif`,
  },
  textStyles,
  colors,
});

export default customTheme;
