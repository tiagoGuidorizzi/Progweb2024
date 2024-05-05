import React from "react";

import { Box, Grid, Page, Text, Image } from "grommet";

const Perfil = () => {
    return (
    <Page> 
        <Grid
        rows={['medium', 'medium']}
        columns={['20%', '80%']}
        gap=""

        areas={[
            
            { name: 'perfil', start: [0, 0], end: [0, 1] },
            { name: 'filmes', start: [1, 0], end: [1, 1] },
        ]}
        >
        <Box 
            gridArea="perfil" 
            background="brand"
            align="center"
            justify="top"
        > 
            <Text size="xlarge"> Perfil </Text>
            <Box>
                <Image></Image>
            </Box>
        </Box>
        <Box gridArea="filmes" background="light-4">
        </Box>
        </Grid>
    </Page>
    );
}

export {Perfil};