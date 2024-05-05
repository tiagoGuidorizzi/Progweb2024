import React from "react";

import { Box } from "grommet";

import { Slider, Destaque, Categoria, MiniSlider } from "../components/index.js";



const Home = () => {
    return (
        <Box>
            <Destaque />
            <Slider />
            <Box 
            elevation="medium"
            >
            <Categoria />
            <MiniSlider />
            </Box>
            <Box 
            elevation="medium"
            >
            <Categoria />
            <MiniSlider />
            </Box>
            <Box 
            elevation="medium"
            >
            <Categoria />
            <MiniSlider />
            </Box>
        </Box>
    );
}

export {Home};