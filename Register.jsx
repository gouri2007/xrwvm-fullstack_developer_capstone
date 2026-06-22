import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
          className="form-control"
        /><br />

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="form-control"
        /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="form-control"
        /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="form-control"
        /><br />

        <button type="submit" className="btn btn-primary">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;
