import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useracc } from "../data1";
import LoginForm from "./LoginForm";
import "../cssComponents/buttons.css";
import "../cssComponents/singin.css";

export default function SingIn() {
  const logedInUser = localStorage.getItem("USER");
  const [user, setUser] = useState(
    logedInUser ? JSON.parse(logedInUser) : null
  );
  const [error, setError] = useState("");

  const Login = (details) => {
    const user = useracc.find(
      (x) => x.email === details.email && x.password === details.password
    );
    if (user) {
      setUser(user);
      localStorage.setItem("USER", JSON.stringify(user));
    } else {
      setError(<h3>Details do not mach</h3>);
    }
  };

  const Logout = () => {
    console.log("Logaout");
    setUser(null);
    localStorage.removeItem("USER");
  };

  return (
    <div className="singin-form">
      {user ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button className="all-btn" onClick={Logout}>
            Logout
          </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}
