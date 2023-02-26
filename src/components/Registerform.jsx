import React, { useState } from "react";
import './Registerfrom.css'
import { Link, useNavigate } from "react-router-dom";

const Registerform = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
          const response = await fetch('http://localhost:7000/api/register',  {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: { 'Content-Type':'application/json' }
        });
        if (response.status === 200){
          alert('registration successful');
          navigate('/login')
        } else {
          alert('registration failed');
        }
      }    

    return(
        <>
            <div className="register">
                <form onSubmit={register}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" placeholder="Passwors" value={password}  onChange={(e) => setPassword(e.target.value)} />
                    <button>Register</button>
                </form>
                <h4>Already have an account??<Link>Login here</Link></h4>
            </div>
        </>
    )
}

export default Registerform;