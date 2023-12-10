import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home.tsx"
import Login from "./components/auth/login.tsx"
import ThemeSwitcher from "./components/ThemeSwitcher.tsx"

function App() {

  return (
    <>
      
      <div className = " flex flex-col justify-center items-center">
        <ThemeSwitcher/>
      <Home/>
      <Login/>
      </div>
    </>
  )
}

export default App
