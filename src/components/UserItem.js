import { Box, Typography } from "@mui/material";
import Button from '@mui/material/Button';



export function UserItem({ name, email, username, phone, id, deleteUser }) {

    return (
        <Box>
            <Typography variant="h2">{name}</Typography>
            <Typography variant="body1">{email}</Typography>
            <Typography variant="body1">{username}</Typography>
            <Typography variant="body1">{phone}</Typography>
            <Button variant="outlined"
                    onClick={() => deleteUser(id)}>Delete User</Button>
        </Box>


    );

}


