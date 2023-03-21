import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export function AddUserForm({ onFormSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [phone, setPhone] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleUserNameChange(event) {
         setUserName(event.target.value)
    }
    function handlePhoneChange(event) {
        setPhone(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted");
        const user = {
            name,
            email,
            username,
            phone
        };
        console.log("New user is", user);
        onFormSubmit(user);
        setEmail("");
        setName("");
        setUserName("");
        setPhone("");
    }
    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                value={name}
                onChange={handleNameChange}
                margin="normal"
                fullWidth
                label="Name"
                type="text"
                required
            />
            <TextField
                value={email}
                onChange={handleEmailChange}
                margin="normal"
                fullWidth
                label="Email"
                type="email"
                required
            />
            <TextField
                value={username}
                onChange={handleUserNameChange}
                margin="normal"
                fullWidth
                label="UserName"
                type="text"
                required
            />
            <TextField
                value={phone}
                onChange={handlePhoneChange}
                margin="normal"
                fullWidth
                label="Phone"
                type="text"
                required
            />
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    );
}
