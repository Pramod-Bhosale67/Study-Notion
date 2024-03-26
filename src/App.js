import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/login" element = {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element = {<SignUp setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path="/dashboard" element = {
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard/>
            </PrivateRoute>
        }/>
      </Routes>

  </div>
  );
}

export default App;
