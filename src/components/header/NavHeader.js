import React from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import { AppBar } from "./AppBar";
import {NavBar} from "../NavBar"
const NavHeader = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <AppBar>
                <Box
                    direction="row"
                    justify="between"
                    alignSelf="center"
                    gap="medium"
                    pad={{ top: "large", horizontal: "medium" }}
                >
                    <Anchor
                        href="/"
                        color="none"
                        label={
                            size !== "xsmall" &&
                            size !== "small" && <Text size="medium" color="white">Cineboxd</Text>
                        }
                    />
                </Box>
                <Box
                    direction="row"
                    justify="between"
                    alignSelf="center"
                    gap="medium"
                    pad={{ top: "large", horizontal: "medium" }}
                >                
                    <NavBar/>
                </Box>
            </AppBar>

        )}
    </ResponsiveContext.Consumer>
);

export {NavHeader};