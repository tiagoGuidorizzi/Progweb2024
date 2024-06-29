import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Grommet,
} from "grommet";
import {NavHeader, ProtectedRoute} from "./components/index.js";
import { customTheme } from "./theme";
import { Home,Perfil, Favoritos, Login } from "./pages";



function App() {
    return (
        <Grommet theme={customTheme} full>
            <Router>
                <NavHeader />
                <Routes>
                    <Route path="/" exact element={<Login />} /> 
                    <Route path="/home" element={<ProtectedRoute component={Home} />} />
                    <Route path="/Perfil" element={<Perfil />}/>
                    <Route path="/Favoritos" element={<Favoritos />}/>
                </Routes>
            </Router>
        </Grommet>
    );
}

export default App;
