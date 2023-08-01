import { useState } from "react"
import { Link } from "react-router-dom";
import { useAuth } from "../../store/Auth";

const Register = () => {


    const [userRegisterDetails, setUserRegisterDetails] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: ""
    });

    const handleChange = (e) => {
        setUserRegisterDetails({
            ...userRegisterDetails,
            [e.target.name]: e.target.value
        })
        console.log(userRegisterDetails)
    }

    const user = useAuth();

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        validationCheck()
        user.register(userRegisterDetails)
        // else
        // alert("Enter valid fields")
    }

    const validationCheck = () => {
        if (!userRegisterDetails.username && !userRegisterDetails.email && !userRegisterDetails.password && !userRegisterDetails.confirm_password && !userRegisterDetails.phone) {
            return false
        }
    }

    return (
        <>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"
                    onChange={e => handleChange(e)}
                />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"
                />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password"
                />

                <label htmlFor="password">Confirm Password</label>
                <input type="text" name="confirm_password" id="confirm_password"
                />
                <label htmlFor="password">Phone</label>
                <input type="text" name="phone" id="phone"
                />
                <button
                    onClick={e => handleRegisterSubmit(e)}
                >Submit</button>
            </form>
            <Link to="/login">Login Here</Link>
        </>
    )
}

export default Register