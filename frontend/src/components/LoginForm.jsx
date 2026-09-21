import { useState } from "react"
import { login } from "../store/authStore"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()
    

    const handleLogin = async () =>{
        if(!username|| !password){
            alert("Please enter username and password")
            return
        }
        try {
            const data = await login({username,password})
            console.log("this is data",data);
            localStorage.setItem("user", JSON.stringify(data.user))
            
        } catch (error) {
            console.error("Error during login:", error);
            alert("Login failed. Please try again.");
            return;
            
        }
        navigate("/tasks")
        
    }
    

  return (
    <form onSubmit={(event) => { event.preventDefault(); handleLogin() }}>
      <label className="field-label" htmlFor="login-username">Username</label>
      <input id="login-username" className="field-input" type="text" autoComplete="username" placeholder="Enter your username" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <label className="field-label" htmlFor="login-password">Password</label>
      <input id="login-password" className="field-input" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button className="primary-button" style={{ marginTop: '1.5rem' }} type="submit">Sign in</button>
    </form>
  )
}

export default LoginForm