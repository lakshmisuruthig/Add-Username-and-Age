import React,{ useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import classes from './UsernameAgeForm.module.css'
const UsernameAgeForm = (props) => {
    const [enteredName,setEnteredName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError]=useState();
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
     const submitHandler =(event) => {
        event.preventDefault();
        if((enteredName.trim().length === 0) || (enteredAge.trim().length === 0)){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid age',
                message:'Please enter a valid age (>0).'
            })
            return;
        }
       
        props.onAddUser(enteredName,enteredAge);
        console.log(enteredName,enteredAge);
        setEnteredName('');
        setEnteredAge('');
    } 
    const errorHandler = () => {
        setError(null);
    }
    return(
        <div>
          {error && <Modal title = {error.title} message={error.message} onConfirm = {errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username</label>
                <div>
                  <input id="username" type ="text"  value ={enteredName} onChange={nameChangeHandler}/>
                </div>
                
            </div>
            <div>
                <label htmlFor="age">Age(Years)</label>
                <div>
                  <input id="age" type ="number" value={enteredAge} onChange={ageChangeHandler}/>
                </div>
            </div>
          <Button type="submit">Add User</Button>
        </form>
        
        </Card>
        </div>
    );
}
export default UsernameAgeForm;