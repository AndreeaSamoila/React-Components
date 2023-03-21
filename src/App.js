import "./App.css";
import { Buttons } from "./components/Buttons"
import { ChangeLocationSection } from "./components/ChangeLocationSection";
import { Typography } from "@mui/material";
import { TextFields } from "./components/TextFields";
import { useEffect, useState } from "react";
import { getUsers } from "./services/getusers";
import { UserList } from "./components/UserList";
import { AddUserForm } from "./components/AddUserForm";

function App() {
  const [apiUsers, setApiUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setApiUsers);
  }, []);

  function addNewUser(newUser) {
    const newApiUsers = [newUser, ...apiUsers];
    setApiUsers(newApiUsers);
  }
  function deleteUser(id) {
      const users = apiUsers.filter(user => user.id !== id)
      setApiUsers(users);
  }

  return (
      <div className="App">
        <Typography variant="h3">Sesiunea 31</Typography>
        <Buttons />
        <TextFields />
        <ChangeLocationSection />

        <AddUserForm onFormSubmit={addNewUser} />

        <UserList users={apiUsers} handleDeleteUser={deleteUser}/>   //ii pasez lui userlist un prop
      </div>
  );
}

export default App;
