import React, { useState } from "react";
import "./AddUser.css";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const users = {
    fname: "",
    lname: "",
    place: "",
    phoneNo: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/create", user)
      .then((response) => {
        console.log(response);
        toast.success("User Created Successfully", { position: "top-right" });
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="addUser">
      <Link to={"/user"}>Back</Link>
      <h3>Add new user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name </label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">last name </label>
          <input
            type="text"
            id="lname"
            name="lname"
            autoComplete="off"
            placeholder="Last Name"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="place">Place name </label>
          <input
            type="text"
            id="place"
            name="place"
            autoComplete="off"
            placeholder="Place Name"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="phoneNo">Phone No </label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            autoComplete="off"
            placeholder="Phone No"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
