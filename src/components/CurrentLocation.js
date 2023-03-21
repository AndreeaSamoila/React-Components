import { Typography } from "@mui/material";

export function CurrentLocation({ city }) {
    return (
        <Typography variant="body1">
            Orasul este <strong>{city}</strong>
        </Typography>
    );
}
