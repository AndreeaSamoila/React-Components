import { Box } from "@mui/material";
import { UserItem } from "./UserItem";

export function UserList({ users }) {
    return (
        <Box>
            {users.map((user, index) => (
                <UserItem key={index} email={user.email} name={user.name} />
            ))}
        </Box>
    );
}

// https://jsonplaceholder.typicode.com/users