import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const user = {
    role: {
      permissions: [
        "Manage Status",
        "Manage Department",
        "Manage Clients",
        "Manage Projects",
      ],
    },
  };

  return (
    <Router>
      <Box>
        {/* Sidebar */}
        <Sidebar
          user={user}
          collapsed={collapsed}
          toggleSidebar={toggleSidebar}
        />

        {/* Navbar */}
        <Navbar collapsed={collapsed} />

        {/* Main content */}
        <Box ml={collapsed ? "80px" : "250px"} mt="80px" p="4">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
