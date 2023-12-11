import React from 'react'
import {useState} from 'react'
import {useForm} from "react-hook-form"


export default function register() {
  const [email, setEmail] = useState("")
  const [passowrd, setPassword] = useState("")

  const [error, setError] = useState("")

  function registerHandler(e) {
    
    e.preventDefault();
    const value = e.target;
    const data = new FormData(value);
    const passwordValue = data.get("password");
    const emailValue = data.get("email");

    if(passwordValue.length === 0 || emailValue.length === 0){
      setError("Please insert the requried data");
    }else{
      setPassword(passwordValue);
      setEmail(emailValue);
    }
  }
  
  return (
    <form onSubmit={registerHandler} className="  flex flex-col justify-center gap-6 h-fit " >
        <h3 className=" font-extrabold  uppercase ">Create Account</h3>
        <input type="text" name="firstName" placeholder="FirstName" onChange={() => {setError("")}}/>
        <input type="text" name="lastName" placeholder="LastName" onChange={() => {setError("")}}/>
        <input type="email" name="email" placeholder="abc@example.com" onChange={() => {setError("")}}/>
        <input type="password" name="password"/>
        <button className=" black-button" type="submit" onChange={() => {setError("")}}>SignUp</button>
        <span className="text-red-600 text-sm h-5">{error}</span>     
    </form>
  );
}
