import React from "react";
import { Anchor, Box, Text, ResponsiveContext, Heading } from "grommet";

const Destaque = () => (
    <Box
        direction="row"
        justify="center"
        
        gap="small"
        pad={{ top: "medium", horizontal:"xxsmall", bottom:"none"}}
        >
            <Heading size="small" margin="none"weight="bold" color="black"> Destaques </Heading>
    </Box>
);

export {Destaque};