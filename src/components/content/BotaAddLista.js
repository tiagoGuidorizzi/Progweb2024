import React from "react";
import { Add } from 'grommet-icons';
import { Box, Button, Text } from "grommet";

const Botao = () => {
    <Box pad="large" gap="large">
        <Box align="center">
            <Button hoverIndicator="light-1" onClick={() => {}} active>
                <Box pad="small" direction="row" align="center" gap="small">
                    <Add />
                    <Text>Add</Text>
                </Box>
            </Button>
        </Box>
    </Box>
}

export {Botao as BotaoAddLista};