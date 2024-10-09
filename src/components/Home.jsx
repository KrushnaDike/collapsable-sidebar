import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Box p="8">
      <Heading>Welcome to the Home Page!</Heading>
      <Text mt="4">
        This is a simple home page with a foldable sidebar and a navigation bar
        at the top. You can navigate to different pages using the links in the
        sidebar and navbar.
      </Text>
    </Box>
  );
};

export default Home;
