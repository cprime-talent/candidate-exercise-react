import Login from "./pages/auth/login/Login";
import Header from "./pages/header/Header";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import User from "./pages/getuser/User";
import AddUser from "./pages/adduser/AddUser";
import Edit from "./pages/updateuser/Edit";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/addUser" element={<AddUser></AddUser>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </>
  );
}

export default App;
