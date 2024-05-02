import React from "react";
import { Add } from 'grommet-icons';
import { Box, Button } from "grommet";

export const Botao = () => (
        <Box pad={{bottom: "30px"}} gap="large" justify="center">
        {/* Out of the Box Button */}
        <Box align="center" round="xlarge" >
            <Button icon={<Add />} label="Add" onClick={() => {}} />
        </Box>
        </Box>
  );

export {Botao as BotaoAddLista};