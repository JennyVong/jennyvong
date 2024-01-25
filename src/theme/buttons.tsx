import type { ComponentStyleConfig } from "@chakra-ui/theme";

const Button: ComponentStyleConfig = {
  variants: {
    nav: {
      background: "transparent",
      color: "purple.400",
      _hover: {
        color: "purple.400",
      },
      _active: {
        color: "purple.400",
      },
    },
  },
};

export default Button;
