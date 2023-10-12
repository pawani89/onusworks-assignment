import { Button, TextField } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import useTextFieldHandler from "../../hooks/useTextFieldHandler";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { data: username, setData: handleUsernameChange } = useTextFieldHandler("");
    const { data: password, setData: handlePaswordChange } = useTextFieldHandler("");
    const [error, setError] = useState(false)
    let setUsername = localStorage.getItem("username");
    let setPassword = localStorage.getItem("password");
    let navigate = useNavigate();
    const handleLogin = () => {
        console.log("jsnjdnsds a:", setPassword, setUsername, username, password)
        if (setPassword !== password || setUsername !== username) {
            setError(true)
        } else {
            setError(false);
            localStorage.setItem("loggedin", "true");
            navigate('/home')

        }
    }
    return (
        <>
            <TextField
                label="Name"
                variant="standard"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleUsernameChange(e.target.value)}
                value={username} />
            <TextField
                label="Password"
                type="password"
                variant="standard"
                onChange={(e: ChangeEvent<HTMLInputElement>) => handlePaswordChange(e.target.value)}
                value={password} />
            {
                error ? <p>The username or password is wrong</p> : null
            }
            <Button onClick={handleLogin} variant="contained">
                Login
            </Button>
        </>
    )
}

export default Login;