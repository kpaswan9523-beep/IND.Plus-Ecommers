import React, { useState } from "react";
import './Logi.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "12345") {
            setMessage("Login Successful ✅");
        } else {
            setMessage("Invalid Email or Password ❌");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Login</button>

            </form>

            <p>{message}</p>

        </div>
    );
}

export default Login;