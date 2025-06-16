import React ,{useState,useContext} from "react";
import  userContext from "../context/userContext.js";




function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)


    const Submit = (e) => {
        e.preventDefault();
        console.log("login submitted")
        setUser({userName,password})

    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text"  placeholder=" enter your name" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
            <input type="password"  placeholder=" enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={Submit}> Login</button>

        </div>
    )
}

export default Login