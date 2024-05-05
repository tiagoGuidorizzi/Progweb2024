import React from "react";
import { Box, Text, ResponsiveContext, Nav } from "grommet";
import { AppBar } from "./AppBar";
import { NavBar } from "../NavBar";
import { Link } from "react-router-dom";
const items = [{ label: "Cineboxd", href: "/Home" }];

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {() => (
      <AppBar>
        <Box
          direction="row"
          justify="between"
          alignSelf="center"
          gap="medium"
          pad={{ top: "large", horizontal: "medium" }}
        >
          <Nav direction="row">
            {items.map((item) => (
              <Link to={item.href} color="none">
                <Text size="medium" color="white">
                  {" "}
                  {item.label}{" "}
                </Text>
              </Link>
            ))}
          </Nav>
        </Box>

        <Box
          direction="row"
          justify="between"
          alignSelf="center"
          gap="medium"
          pad={{ top: "large", horizontal: "medium" }}
        >
          <NavBar />
        </Box>
      </AppBar>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };
