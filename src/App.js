import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHandler = (UName, UAge) => {
    setusersList((prevUserList) => {
      return [...prevUserList, { name: UName, age: UAge, id: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
