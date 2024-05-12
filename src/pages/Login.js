import React from "react";
import { Box, Button, Form, Heading, Text ,TextInput } from "grommet";



const Login = () => {
    const [valueEmail, setValueEmail] = React.useState('');
    const [valueSenha, setValueSenha] = React.useState('');
    return (
        <Box 
        margin={{top:"xlarge"}}
        justify="center"
        direction="row"
        background={{image:"/public/background.png"}}
        >
            <Form>
                <Box
                >
                    <Heading size="small" textAlign="center"> Sign In</Heading>
                    <Box >
                        <Text>Email</Text>
                        <TextInput
                            placeholder="Email"
                            value={valueEmail}
                            onChange={event => setValueEmail(event.target.value)}
                        />
                    </Box>
                    <Box>
                        <Text>Senha</Text>
                        <TextInput
                            placeholder="Senha"
                            value={valueSenha}
                            onChange={event => setValueSenha(event.target.value)}
                        />
                    </Box>
                    <Box>
                        <Button margin={{top:"small"}} justify="center" primary label="Entrar" background="brand" type="submit" href="/Home"/>
                    </Box>
                </Box>
            </Form>
        </Box> 
    );
}

export {Login};