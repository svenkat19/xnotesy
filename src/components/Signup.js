import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const host = "http://localhost:5000";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    nameInput: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { nameInput, email, password, confirmPassword } = credentials;

    try {
      const response = await fetch(`${host}/api/auth/createUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.nameInput,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/login");
      } else {
        console.log(json);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="nameInput">Name *</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter name"
            required
            name="nameInput"
            onChange={onChange}
            minLength={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address *</label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            name="email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
            name="password"
            onChange={onChange}
            minLength={5}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confimPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
            name="confirmPassword"
            onChange={onChange}
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
