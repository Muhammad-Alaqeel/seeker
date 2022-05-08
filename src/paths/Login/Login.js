import axios from "axios";// for post data
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login() {
    //Declare React States for error messages
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [loginError, setloginError] = useState(null);


    const handleLogin = (e) => {
        //Prevent page reload
        e.preventDefault();
        axios
            .post("http://localhost:8080/users/login", {password, email})
            .then((response) => {
                console.log(response.data);
                if (response?.data?.message == "Success login") {
                    localStorage.setItem("token", response.data.data.token);
                    navigate("/");
                }
            })
            .catch(() => {
                setloginError("Could not login");
            });
    };


    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/", {replace: true});
            navigate(0);
        }
    });
    return (
        <div style={{maxWidth: "400px", margin: "2rem auto"}}>
            <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                    />
                    <label>
                        Email address
                    </label>
                </div>

                <div className="form-outline mb-4">
                    <input
                        type="password"

                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                    />
                    {loginError && <div className="alert alert-danger">Login error</div>}

                </div>
                <label>password</label>


                <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign in
                </button>


            </form>
        </div>
    );
}

export default Login;
