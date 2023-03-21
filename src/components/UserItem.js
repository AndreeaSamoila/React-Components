import { Box, Typography } from "@mui/material";

export function UserItem({ name, email }) {
    return (
        <Box>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="body1">{email}</Typography>
        </Box>
    );
}
