import { useState } from "react"
import { register } from "../store/authStore"
import { useNavigate } from "react-router-dom"

const RegisterForm = () => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const navigate = useNavigate()
    const handleRegister = async () =>{
        if(!username || !password){
            alert("Please enter username and password")
            return
        }
        try {
            
            await register({ username, password })
            alert("Registered successfully");
            navigate("/"); // Redirect to login after registration
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Registration failed. Please try again.");
        }
    }

  return (
    <form onSubmit={(event) => { event.preventDefault(); handleRegister() }}>
      <label className="field-label" htmlFor="register-username">Username</label>
      <input className="field-input" type="text" id="register-username" autoComplete="username" placeholder="Choose a username" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <label className="field-label" htmlFor="register-password">Password</label>
      <input className="field-input" type="password" id="register-password" autoComplete="new-password" placeholder="Create a password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button className="primary-button" style={{ marginTop: '1.5rem' }} type="submit">Create account</button>
    </form>
  )
}

export default RegisterForm