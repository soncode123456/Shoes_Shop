import React, { useState } from "react";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleValidation = () => {
    let formIsValid = true;
    let newErrors = { email: "", password: "" };

    // Email Validation
    if (!email) {
      formIsValid = false;
      newErrors.email = "Email cannot be empty";
    }

    // Password Validation
    if (!password) {
      formIsValid = false;
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation(" ")) {
      alert("Vui lòng nhập đầy đủ thông tin đăng nhập.");
    } else {
      alert("đăng nhập thành công");
    }
  };

  return (
    <div className="container">
      <div className="login-container shadow p-3 mb-5 bg-white rounded">
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <a href="/Register">Register now? </a>
            <button type="submit" className="btn btn-success">
              LOGIN
            </button>
          </div>
          <hr />
        </form>
        <button className="btn btn-primary w-100 mt-3">
          <i className="bi bi-facebook" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
