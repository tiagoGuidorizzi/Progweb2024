import React from "react";
import { Header } from "grommet";

const AppBar = (props) => (
     <Header
       background="#001969"
       pad={{vertical: "small"}}  s
       {...props}
     />
    );

export {AppBar};