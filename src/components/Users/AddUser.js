import React, { useState } from "react";
import './AddUser.css'
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredNameValue ,setenteredNameValue] = useState('')
  const [enteredAgeValue,setenteredAgeValue] =useState('')

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredNameValue,enteredAgeValue)
    setenteredNameValue('')
    setenteredAgeValue('')
    
  };
  const userNameHandler = (event) =>{
    setenteredNameValue(event.target.value)
  }

  const userAgeHandler =(event) =>{
    setenteredAgeValue(event.target.value)

  }

  return (
    <Card className="input">
      <form  onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredNameValue} onChange={userNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAgeValue} onChange={userAgeHandler}/>
        <Button type="submit">Add USer</Button>
       
      </form>
    </Card>
  );
};

export default AddUser;
