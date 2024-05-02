import React from "react";
import { Box, Heading } from "grommet";

const Categoria = () => (
    <Box
        direction="row"
        justify="center"
        gap="small"
        pad={{ top: "medium", horizontal:"xxsmall", bottom:"small"}}
        >
        <Heading size="small" margin="none"weight="bold" color="black"> Categoria </Heading>
    </Box>
);

export {Categoria};