import React,{ useState } from 'react';
import './App.css';
import UsernameAgeForm from './Components/Form/UsernameAgeForm';
import UserList from './Components/UserList/UserList';

function App() {
  const[userList,setUserList]=useState([]);

  const submitHandler = (uName,uAge) => {
    setUserList((prevUserList)=>{
      return [...prevUserList , {name:uName,age:uAge,id:Math.random().toString()}]
    });
  }
  return (
    <div>
      <UsernameAgeForm onAddUser = {submitHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
