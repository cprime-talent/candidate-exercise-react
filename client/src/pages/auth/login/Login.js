import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("email:", formData.email);
    console.log("password:", formData.password);

    try {
      console.log("try");
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!result.token) {
        console.log("no result found");
        toast.error("Invalid Credential", { position: "top-right" });
      } else {
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/user");
        toast.success("Login Successfully", { position: "top-right" });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setFormData({
        email: "",
        name: "",
        password: "",
      });
    }
  };

  return (
    <div className="center-form">
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
