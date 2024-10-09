import React from "react";
import { Flex, Button, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <Flex
      as="header"
      bg="blue.600"
      color="white"
      justify="space-between"
      p="4"
      position="fixed"
      w="100%"
      top="0"
      left={collapsed ? "150px" : "310px"}
      zIndex="1100"
    >
      <HStack spacing={6}>
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate("/about")}>
          About
        </Button>
        <Button variant="link" colorScheme="whiteAlpha" onClick={() => navigate("/contact")}>
          Contact
        </Button>
      </HStack>
      <Button variant="solid" colorScheme="whiteAlpha">
        Login
      </Button>
    </Flex>
  );
};

export default Navbar;
