import React from "react";
import { Box, Button, Form, Heading, Text, TextInput } from "grommet";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [valueEmail, setValueEmail] = React.useState('');
    const [valueSenha, setValueSenha] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/users', {
                params: {
                    username: valueEmail,
                    password: valueSenha,
                },
            });

            if (response.data.length > 0) {
                const user = response.data[0];
                
                const now = new Date();
                const day = String(now.getDate()).padStart(2, '0');
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const year = now.getFullYear();
                const loginDate = `${day}-${month}-${year}`;
                
                user.loginDate = loginDate;
                sessionStorage.setItem('user', JSON.stringify(user));
                navigate('/perfil');
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            console.error(err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <Box 
            margin={{ top: "xlarge" }}
            justify="center"
            direction="row"
            background={{ image: "/public/background.png" }}
        >
            <Form onSubmit={handleLogin}>
                <Box>
                    <Heading size="small" textAlign="center">Sign In</Heading>
                    <Box>
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
                            type="password"
                            placeholder="Senha"
                            value={valueSenha}
                            onChange={event => setValueSenha(event.target.value)}
                        />
                    </Box>
                    <Box>
                        <Button margin={{ top: "small" }} justify="center" primary label="Entrar" background="brand" type="submit" />
                    </Box>
                    {error && <Text color="status-critical">{error}</Text>}
                </Box>
            </Form>
        </Box>
    );
}

export { Login };
