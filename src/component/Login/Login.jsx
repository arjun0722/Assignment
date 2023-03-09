import React, { useState } from "react";
import { loginUser } from "../../utils/Helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/userSlice";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*
   * Login details set in redux
   *
   */

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await loginUser(email, password);
    if (res) {
      dispatch(add(res));
      navigate("/home");
    }
  };

  return (
    <div className="con_login">
      <span className="login_title">Sign In</span>
      <div className="main_Login">
        <div class="input">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="input">
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button className="login_button" onClick={(e) => handleLogin(e)}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
