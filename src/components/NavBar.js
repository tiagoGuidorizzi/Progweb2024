import React from "react";
import { Anchor, Box, Text } from "grommet";

const NavBar = () => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            href="/"
            color="none"
            
            label={ <Text size="medium" color="white"> Favoritos </Text>}              
        />
        <Box width={10}/>
        <Anchor
            href="/"
            color="none"
            label={ <Text size="medium" color="white"> Meu Perfil</Text>}              
        />
    </Box>
);

export {NavBar};