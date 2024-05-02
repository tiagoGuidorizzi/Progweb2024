import React, { Component } from "react";
import { render } from "react-dom";

import {
  Box,
  Grommet,
} from "grommet";

import {NavHeader, Slider, Destaque, Categoria, MiniSlider} from "./components/index.js";
import { customTheme } from "./theme";



class App extends Component {
  render() {
    return (
      <Grommet theme={customTheme} full>
        <NavHeader />
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
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
