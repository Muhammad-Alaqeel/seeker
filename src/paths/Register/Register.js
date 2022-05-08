import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setloginError] = useState(null);
  const [password2, setpassword2] = useState("");
  const [name, setname] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users/register", {
        password,
        email,
        password2,

        name,
      })
      .then((response) => {
        console.log(response.data);
        if (response?.data?.message == "registered successfully") {
          alert("registered successfully");
          navigate("/login");
        } else {
          setloginError("Could not regster");
        }
      })
      .catch((err) => {
        setloginError(err.response.data.message);
      });
  };
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/", { replace: true });
      navigate(0);
    }
  });
  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <form onSubmit={handleRegister}>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            type="text"
            id="registerName"
            placeholder="Name"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            id="registerEmail"
            placeholder="email"
            className="form-control"
          />
        </div>


        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="password"
            type="password"
            id="registerPassword"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
          <input
            value={password2}
            onChange={(e) => {
              setpassword2(e.target.value);
            }}
            placeholder="repeat password"
            type="password"
            id="registerRepeatPassword"
            className="form-control"
          />
        </div>
        {loginError && <div className="alert alert-danger">{loginError}</div>}

        <button type="submit" className="btn btn-primary btn-block mb-3">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
