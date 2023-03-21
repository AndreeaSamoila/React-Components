import { Box } from "@mui/material";
import { UserItem } from "./UserItem";

export function UserList({ users, handleDeleteUser }) {
// (props)
// props.users
// props.handleDeleteUser

    return (
        <Box>

            {users.map((user, index) => (
                <UserItem key={index} email={user.email} name={user.name} username={user.username} phone={user.phone} id={user.id}
                          deleteUser={handleDeleteUser}
                    />
            ))}
        </Box>

    );

}

// https://jsonplaceholder.typicode.com/users