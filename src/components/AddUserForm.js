import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export function AddUserForm({ onFormSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Submitted");
        const user = {
            name,
            email,
        };
        console.log("New user is", user);
        onFormSubmit(user);
        setEmail("");
        setName("");
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
            <Button type="submit" variant="contained">
                Submit
            </Button>
        </Box>
    );
}
