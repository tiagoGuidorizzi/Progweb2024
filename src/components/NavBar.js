import React from "react";
import { Box, Text, Nav } from "grommet";
import { Link } from "react-router-dom";


const items = [
    { label: 'Favoritos', href: '/Home' },
    { label: 'Meu Perfil', href: '/Perfil'},
  ];

const NavBar = () => (
        <Nav direction="row">
        {   items.map((item) => (
            <Box>
                <Link
                    to={item.href}
                    color="none">
                  <Text size="medium" color="white"> {item.label} </Text>  
                </Link> 
            </Box>
          ))}
        </Nav>
);

export {NavBar};