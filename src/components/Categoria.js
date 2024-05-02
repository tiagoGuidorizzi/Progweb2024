import React from "react";
import { Box, Text } from "grommet";

const Categoria = () => (
    <Box
        direction="row"
        justify="center"
        
        gap="small"
        pad={{ top: "medium", horizontal:"xxsmall", bottom:"small"}}
        >
        <Text size="large" margin="none"weight="bold" color="black"> Categoria </Text>
    </Box>
);

export {Categoria};