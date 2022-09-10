import "./login.css";
import "./form.css";
import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
const Login = ({ setAuth }) => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [message, setAlertMessage] = useState("");
  const [cookies, setCookie] = useCookies("username");
  let { decodedToken, isExpired, reEvaluateToken } = useJwt(cookies.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies && cookies.user) {
      reEvaluateToken(cookies.user);
    } else {
      reEvaluateToken("");
      setAuth(false);
    }
    if (decodedToken)
      if (decodedToken.id && !isExpired) {
        setAuth(true);
        console.log(decodedToken, isExpired);
        navigate("/");
      }
  }, [cookies, decodedToken]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let promise = await fetch(`http://127.0.0.1:4000/api/v1/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    });
    const response = await promise.json();
    if (response.token) {
      setCookie("user", response.token);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    if (response.status === "success") {
      setAuth(true);
    }
    setAlertMessage(response.message);
    setAlert(true);
  };

  return (
    <>
      <Modal setAlert={setAlert} alert={alert} message={message} />
      <div className="login__container">
        <div className="login__container__heading">Login</div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              id="username"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="username" className="">
              Username
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="">
              Password
            </label>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
