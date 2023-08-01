import { useState } from "react"
import Register from "./Register"
import { Link } from "react-router-dom";

import { useAuth } from "../../store/Auth";

const Login = ({ isLogin, setIsLogin }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const user = useAuth();

    const handleUserNameChange = (e) => {
        setUsername(e.target.value)
        console.log(username);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        user.login(username, password)
    }

    if (isLogin === 1) {
        return (
            <>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username"
                        onChange={e => handleUserNameChange(e)}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password"
                        onChange={e => handlePasswordChange(e)}
                    />
                    <button
                        onClick={e => handleLoginSubmit(e)}
                    >Submit</button>
                </form>

                <Link href="/register">Register</Link>
            </>
        )
    } else {
        return <Register isLogin={isLogin} />
    }
}

export default Login