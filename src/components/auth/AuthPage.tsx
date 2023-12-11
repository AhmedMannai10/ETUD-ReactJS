import React, {useState} from 'react'
import Login from './Login.tsx'
import Register from './Register.tsx'

export default function AuthPage() {
  
  // toggle between login and signup
  const [isLogin, setLogin] = useState(true)

  return (
    <div className="fixed w-full top-0 bottom-0 flex flex-col justify-center items-center">
    <div className="border-2 p-10 rounded-lg max-w-md min-w-sm ">
      {
        isLogin ? <Login/> : <Register/>
      } 
        <button className="w-full dark:text-gray-400 text-sm 
          dark:hover:text-gray-200 " onClick={() => {setLogin(!isLogin)}}>{isLogin ? "Create Account": "Login"}</button>
    </div>
    </div>
  )
}   
