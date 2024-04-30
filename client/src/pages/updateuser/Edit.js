import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../adduser/AddUser.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = {
    fname: "",
    lname: "",
    place: "",
    phoneNo: "",
  };
  const [user, setUser] = useState(users);
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/getOne/${id}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/update/${id}`, user)
      .then((response) => {
        console.log(response);
        toast.success("User updated Successfully", { position: "top-right" });
        navigate("/user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to={"/user"}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name </label>
          <input
            type="text"
            id="fname"
            name="fname"
            autoComplete="off"
            placeholder="First Name"
            value={user.fname}
            onChange={inputChangeHandler}
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
            value={user.lname}
            onChange={inputChangeHandler}
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
            value={user.place}
            onChange={inputChangeHandler}
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
            value={user.phoneNo}
            onChange={inputChangeHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
