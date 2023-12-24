import { useState } from 'react'
import './App.css'
import Home from "./Home.tsx"
import AuthPage from "./components/auth/AuthPage.tsx"
import ThemeSwitcher from "./components/ThemeSwitcher.tsx"

function App() {
  // TODO: make the login for the user authentication
  const [validUser, setValidUser] = useState(true)

  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        {validUser ? <Home /> : <AuthPage />}
        <ThemeSwitcher />
      </div>
    </>
  )
}

export default App
