import React, { useRef } from "react";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Link,
  useDisclosure,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export type MenuBarProps = {
  aboutScrollCallback: () => void;
  experienceScrollCallback: () => void;
  projectScrollCallback: () => void;
  contactScrollCallback: () => void;
};

const MenuBar = ({
  aboutScrollCallback,
  experienceScrollCallback,
  projectScrollCallback,
  contactScrollCallback,
}: MenuBarProps): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Flex display={{ lg: "none" }}>
      <Button
        position="sticky"
        ref={btnRef}
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon fontSize="1.5rem" />}
        variant="nav"
        onClick={onOpen}
      >
        Open
      </Button>
      <Drawer
        size={{ base: "sm", md: "md" }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="black.50" position="fixed" />
        <DrawerContent alignItems="center">
          <DrawerCloseButton color="white.default" alignSelf="end" />
          <DrawerBody>
            <Flex marginTop="50px" flexDirection="column">
              <Button
                _active={{ color: "purple.400" }}
                variant="nav"
                onClick={() => [aboutScrollCallback()]}
              >
                <Text _hover={{ color: "purple.400" }} textStyle="title-small">
                  ABOUT
                </Text>
              </Button>
              <Button variant="nav" onClick={() => experienceScrollCallback()}>
                <Text _hover={{ color: "purple.400" }} textStyle="title-small">
                  EXPERIENCE
                </Text>
              </Button>
              <Button variant="nav" onClick={() => projectScrollCallback()}>
                <Text _hover={{ color: "purple.400" }} textStyle="title-small">
                  WORKS
                </Text>
              </Button>
              <Button variant="nav" onClick={() => contactScrollCallback()}>
                <Text _hover={{ color: "purple.400" }} textStyle="title-small">
                  CONTACT
                </Text>
              </Button>
              <Button variant="nav">
                <Link
                  textStyle="title-small"
                  href="https://drive.google.com/file/d/1UFtT9oNuYKB2HwCJw-tYHYLbpdI-2AbR/view?usp=sharing"
                  isExternal
                >
                  <Text
                    _hover={{ color: "purple.400" }}
                    textStyle="title-small"
                  >
                    RESUME
                  </Text>
                </Link>
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MenuBar;
