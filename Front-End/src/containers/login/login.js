import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions/ProductAction";
import Header from "../Header";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (emailRegex.test(event.target.value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      dispatch(setUser(user.name));
      navigate("/");
    } else {
      // login failed
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="log">
        {isLogin ? (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <input type="submit" value="login" disabled={emailError} />
            </form>
            <button onClick={toggleForm} className="button">
              Switch to Sign Up
            </button>
          </div>
        ) : (
          <div>
            <h2>Sign Up</h2>
            <form>
              <input type="text" name="name" placeholder="Name" />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <input type="password" name="password" placeholder="Password" />
              <br />
              <input type="submit" value="sign up" disabled={emailError} />
            </form>
            <button onClick={toggleForm} className="button">
              Switch to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
