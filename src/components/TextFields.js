import { Box, TextField } from "@mui/material";

export function TextFields() {
    const isError = false;
    return (
        <Box sx={{ my: 4 }}>
            <TextField
                margin="normal"
                error={isError}
                helperText={isError && "Incorrect entry."}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
            />
            <TextField
                margin="normal"
                id="filled-basic"
                label="Filled"
                variant="filled"
            />
            <TextField
                margin="normal"
                id="standard-basic"
                label="Standard"
                variant="standard"
            />
        </Box>
    );
}
