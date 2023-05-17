import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register/Register.css"

export default function SignUp() {

    const Register_URL = "/register/signUp";

    const navigate = useNavigate();
    const redirectTrainer = () =>{
        navigate('/trainer')
    };

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChange = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(event.target.value)
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(Register_URL,{
          name: username,
          password: password,
        })
        .then(function(response: any){
          console.log(response);
        })
        .catch(function(error: any){
          console.error(error);
        });
    }
    return(
        <div className="SignUp">
        <header className="Register-header">
          <h1 className="Register-h1"> What's your account ? </h1>
        </header>
        <form onSubmit={handleSubmit} action="register" className="Register-form">
          <label><b>Username : </b></label>
          <input type="text" placeholder="Enter Username" name="usrname" required onChange={(e)=>handleChange(setUserName, e)}></input>
          
          <label><b> Password : </b></label>
          <input type="password" placeholder="Enter Password" name="pwd" required onChange={(e)=>handleChange(setPassword, e)}></input>
  
          <button type="submit" className="Register-btt" onClick={(redirectTrainer)}>Register</button>
        </form>
      </div>        
    )
}