import React, { Component } from "react";
import { render } from "react-dom";

import {
  Grommet,
  Nav, 

} from "grommet";

import {Slider} from "./components/slider/Slider";
import {NavHeader} from "./components/header/NavHeader";

import { customTheme } from "./theme";
import { Destaque } from "./components/Destaque";



class App extends Component {
  render() {
    return (
      <Grommet theme={customTheme} full>
        <NavHeader />
        <Destaque />
        <Slider />

      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
