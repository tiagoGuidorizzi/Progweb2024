import React from "react";
import { Box, Heading } from "grommet";

const Destaque = () => (
    <Box
        direction="row"
        justify="center"
        
        gap="small"
        pad={{ top: "medium", horizontal:"xxsmall", bottom:""}}
        >
        <Heading size="small" margin="none"weight="bold" color="black"> Destaques </Heading>
    </Box>
);

export {Destaque};