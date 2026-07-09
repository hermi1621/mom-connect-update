import "../styles/login.css";

import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    async function handleLogin(e) {

        e.preventDefault();

        try {

            const response = await API.post(

                "/auth/login",

                {

                    email,

                    password

                }

            );

            localStorage.setItem(

                "token",

                response.data.token

            );

            localStorage.setItem(

                "user",

                JSON.stringify(response.data.user)

            );

            alert("Login successful!");

            navigate("/dashboard");

        }

        catch (error) {

            alert(

                error.response?.data?.message ||

                "Login failed"

            );

        }

    }

    return (

        <div className="login-page">

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <h1>

                    Welcome Back 💜

                </h1>

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                    required

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                    required

                />

                <button>

                    Login

                </button>

                <p>

                    Don't have an account?

                    <Link to="/signup">

                        Sign Up

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Login;