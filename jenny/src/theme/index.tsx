import { extendTheme } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

import colors from "./colors";
import textStyles from "./textStyles";

const customTheme = extendTheme({
  styles: {
    global: (props: { colorMode: string; theme: Dict }) => ({
      "html, body": props.theme.textStyles["body-regular"],
    }),
  },
  fonts: {
    heading: `'PT Serif', sans-serif`,
    body: `'PT Serif', sans-serif`,
  },
  textStyles,
  colors,
});

export default customTheme;
