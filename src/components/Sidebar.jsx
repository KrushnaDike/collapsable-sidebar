import React, { Fragment, useState } from "react";
import {
  MdDashboard,
  MdOutlinePendingActions,
  MdSettings,
  MdTaskAlt,
} from "react-icons/md";
import { FaTasks, FaTrashAlt, FaUsers } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import mainlogo from "../assets/mainlogo.png";
import {
  Box,
  Button,
  IconButton,
  VStack,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const linkData = [
  {
    key: "dashboard",
    icon: <MdDashboard color="#1890ff" />,
    label: "Dashboard",
    to: "/dashboard",
    permission: "Manage Status",
  },
  {
    key: "departments",
    icon: <MdOutlinePendingActions color="#fa8c16" />,
    label: "Departments",
    to: "/departments",
    permission: "Manage Department",
  },
  {
    key: "clients",
    icon: <FaUsers color="#52c41a" />,
    label: "Clients",
    to: "/clients",
    permission: "Manage Clients",
  },
  {
    key: "projects",
    icon: <FaTasks color="#13c2c2" />,
    label: "Projects",
    to: "/projects",
    permission: "Manage Projects",
  },
];

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const filteredLinks = linkData;

  return (
    <Fragment>
      <IconButton
        onClick={toggleSidebar}
        icon={<HamburgerIcon />}
        position="fixed"
        top="16px"
        left={collapsed ? "90px" : "260px"}
        zIndex="1000"
        color="gray.500"
        aria-label="Toggle sidebar"
      />

      <Box
        as="nav"
        w={collapsed ? "80px" : "250px"}
        h="100vh"
        bg="white"
        borderRight="1px solid #f0f0f0"
        position="fixed"
        transition="width 0.3s ease"
        zIndex="100"
      >
        {/* Logo section */}
        <Flex
          justify="center"
          align="center"
          h={collapsed ? "80px" : "120px"}
          transition="height 0.3s ease"
          mt={"-5rem"}
        >
          {/* <Image src={mainlogo} boxSize={collapsed ? "40px" : "80px"} /> */}
          Krushna
        </Flex>

        {/* Navigation links */}
        <VStack
          align="stretch"
          mt={4}
          spacing={2}
          px={collapsed ? 0 : 4}
          fontWeight="600"
        >
          {filteredLinks.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              justifyContent={collapsed ? "center" : "flex-start"}
              leftIcon={item.icon}
              onClick={() => navigate(item.to)} // link to redirect to page
              w="100%"
            >
              {!collapsed && <Text>{item.label}</Text>}
            </Button>
          ))}
        </VStack>
      </Box>
    </Fragment>
  );
};

export default Sidebar;
