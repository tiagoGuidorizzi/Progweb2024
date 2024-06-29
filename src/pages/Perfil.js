import React from "react";

import { Box, Grid, Page, Text, Avatar } from "grommet";
import { AddCircle, Favorite } from "grommet-icons";

const src ="./avatar.jpg"

const Perfil = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
    <Page
        justify="center"
    > 
        <Box
            margin={{top:"medium"}}
            justify="center"
            direction="row"
        >
            <Grid
                rows={['xsmall', 'medium', 'medium']}
                columns={['medium', 'medium']}
                gap="small"
                areas={[
                    { name: 'headerPerfil', start: [0, 0], end: [1, 0] },
                    { name: 'foto', start: [0, 1], end: [0, 1] },
                    { name: 'descricao', start: [1, 1], end: [1, 1] },
                    { name: 'filmes', start: [0, 2], end: [1, 2] },
                ]}
            >
                <Box 
                    gridArea="headerPerfil" 
                    background="brand"
                    direction="row"
                    alignContent="around"
                    justify="between"
                >
                    <Box
                        justify="center"
                        align="center"
                        margin={{left:"small"}}
                    >
                        <Text size="large">Perfil</Text>
                    </Box>
                </Box>
                <Box 
                    gridArea="foto" 
                    background="light-5"
                    justify="center"
                    align="center"
                    direction="column"

                >
                    <Avatar size="70%" round="xlarge" src={src} margin={{bottom:"medium"}}/>
                    <Text>{user.username}</Text>
                </Box>
                <Box 
                    gridArea="descricao" 
                    background=""
                    justify="center"
                    align="center"
                    direction="column" 
                    fill="true"
                >
                    <Grid
                        rows={['xsmall', 'xsmall', 'xsmall', 'xsmall']}
                        columns={['medium']}
                        gap=""
                        areas={[
                            { name: 'NomeUsuario', start: [0, 0], end: [0, 0] },
                            { name: 'Reviews', start: [0, 1], end: [0, 1] },
                            { name: 'Data', start: [0, 2], end: [0, 2] },
                            { name: 'Local', start: [0, 3], end: [0, 3] },
                        ]}
                    >
                        <Box
                            gridArea="NomeUsuario" 
                            border={{color:"black", side:"bottom"}} 
                            background="light-2"
                            justify=""
                            align="center"
                            direction="row"
                        >
                            <Text margin={{left: "small"}} weight="bold"> Usuario:&ensp;</Text>
                            <Text>{user.name}</Text>
                        </Box>
                        <Box
                            gridArea="Reviews" 
                            border={{color:"black", side:"bottom"}} 
                            background="brand"
                            justify=""
                            align="center"
                            direction="row"
                        >
                            <Text margin={{left: "small"}} weight="bold"> Reviews:&ensp;</Text>
                            <Text>{user.reviews}</Text>
                        </Box>
                        <Box
                            gridArea="Data" 
                            border={{color:"black", side:"bottom"}} 
                            background="light-2"
                            justify=""
                            align="center"
                            direction="row"
                        >
                            <Text margin={{left: "small"}} weight="bold"> Membro Desde:&ensp;</Text>
                            <Text>{user.membroDesde}</Text>
                        </Box>
                        <Box
                            gridArea="Local"
                            background="brand"
                            justify=""
                            align="center"
                            direction="row"
                        >
                            <Text margin={{left: "small"}} weight="bold"> Local&ensp;</Text>
                            <Text>{user.local}</Text>
                        </Box>
                    </Grid>
                </Box> 
                <Box 
                    gridArea="filmes" 
                    background="light-6"
                    align="center"
                    justify="between"
                >
                    <Text size="large" weight="bold">Filmes</Text>
                </Box> 
            </Grid>
        </Box>
    </Page>
    );
}

export {Perfil};