import React, { Component } from "react";
import { render } from "react-dom";

import {
  Grommet, 

} from "grommet";

import {Slider} from "./components/slider/Slider";

import { customTheme } from "./theme";



class App extends Component {
  render() {
    return (
      <Grommet theme={customTheme} full>
        <Slider />
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
