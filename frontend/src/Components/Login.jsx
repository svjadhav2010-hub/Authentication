import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => 
        {
          if (res.data === "Success") 
          {
            navigate("/home");
          } 
          else 
          {
            alert("Invalid Credentials");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign In</h2>
        <form action={""} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p className="text-center">
            You are agree to{" "}
            <span
              className="text-decoration-underline"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              Terms
            </span>{" "}
            and{" "}
            <span
              className="text-decoration-underline"
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => (e.target.style.color = "blue")}
              onMouseLeave={(e) => (e.target.style.color = "black")}
            >
              Policies
            </span>
          </p>
          <Link
            to="/signup"
            className="btn btn-light border w-100 rounded-0 text-decoration-none"
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.transition = "0.3s";
              e.target.style.backgroundColor = "#0d6efd";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            New User Signup Here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;