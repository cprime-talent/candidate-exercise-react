import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/getAll");
      setUser(response.data);
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios
      .delete(`http://localhost:5000/api/delete/${userId}`)
      .then((response) => {
        setUser((prevUser) => prevUser.filter((user) => user._id !== userId));
        console.log(response);
        toast.success("user deleted successfully", { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="userTable">
      <Link to={"/addUser"} className="addButton">
        Add User
      </Link>
      <table border={2} cellPadding={15} cellSpacing={1}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>User full name</th>
            <th>User place</th>
            <th>User phone no</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{user.place}</td>
                <td>{user.phoneNo}</td>
                <td className="actionButtons">
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                  <Link to={`/edit/` + user._id}>Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
