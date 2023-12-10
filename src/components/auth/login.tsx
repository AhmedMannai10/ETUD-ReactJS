import React from 'react'
import {useState} from 'react'
import {useForm} from "react-hook-form"


export default function login() {
  const [email, setEmail] = useState("")
  const [passowrd, setPassword] = useState("")

  function loginHandler(e) {
    e.preventDefault();
    const value = e.taget.value;
    console.log(value);
  }
  
  return (
    <form onSubmit={loginHandler} className=" fixed z-99 flex flex-col justify-center gap-6 h-fit top-40 border-2 p-10 rounded-lg" >
        <h3 className=" font-extrabold  uppercase ">Login</h3>
        <input type="email" name="email" placeholder="abc@example.com"/>
        <input type="password" name="password"/>
        <button className=" black-button" type="submit">Login</button>
        <span>{email}</span>     
    </form>
  );
}
