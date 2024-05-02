import React, { Component } from "react";
import { render } from "react-dom";

import {
  Box,
  Grommet,
  Nav, 

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
        <Box >
          <Categoria />
          <MiniSlider />
        </Box>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
