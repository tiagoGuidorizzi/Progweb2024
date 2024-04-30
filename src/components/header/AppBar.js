import React from "react";
import { Header } from "grommet";

const AppBar = (props) => (
     <Header
       background="#001969"
       pad={{ left: "medium", right: "small", vertical: "small" }}
       elevation="large"
       {...props}
     />
    );

export {AppBar};