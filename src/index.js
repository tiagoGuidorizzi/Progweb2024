import React, { Component } from "react";
import { render } from "react-dom";

import {
  Box,
  Grommet, 
  Header,
  Page, 
  PageContent, 
  PageHeader, 
  Text 
} from "grommet";

import {
  Slider,
} from "./components/slider/Slider";

const theme = {
  global: {
    colors: {
      brand: "#001969",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "medium" }}
    elevation="medium"
    {...props}
  />
);

class App extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <Page>
          <AppBar>
            <Text size="2xl">Cineboxd</Text>
          </AppBar>
          <PageContent>
            <PageHeader title="Welcome to Grommet!" />
            <Box height="small" width="xxlarge" overflow="hidden">
              <Slider />
            </Box>
          </PageContent>
        </Page>
      </Grommet>
    );
  }
}

render(<App />, document.getElementById("root"));
