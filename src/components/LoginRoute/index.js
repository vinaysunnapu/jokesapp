import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

const dummyData = {
  username: "vinay",
  password: "vinay1234",
};

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userCond, setUserCond] = useState(false);
  const [passCond, setPassCond] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmitButton = (event) => {
    event.preventDefault();
    if (username === "" && password === "") {
      setUserCond(true);
      setPassCond(true);
    } else {
      if (username === dummyData.username && password === dummyData.password) {
        setError(false);

        history.replace("/home");
      } else {
        setError(true);
      }
    }
  };

  const onBlurPassword = (event) => {};

  const onChangeUsername = (event) => {
    if (event.target.value !== "") {
      setUserCond(false);
      setUsername(event.target.value);
    } else {
      setUserCond(true);
    }
  };

  const onChangePassword = (event) => {
    if (event.target.value !== "") {
      setPassCond(false);
      setPassword(event.target.value);
    } else {
      setPassCond(true);
    }
  };

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={onSubmitButton}>
        <h1 className="heading">Login Form</h1>
        <div>
          <label className="label" htmlFor="username">
            USERNAME
          </label>
          <br />
          <input
            className="input"
            type="text"
            htmlFor="username"
            onChange={onChangeUsername}
            value={username}
          />
          {userCond && <p>Required</p>}
        </div>
        <div>
          <br />
          <label className="label" htmlFor="password">
            PASSWORD
          </label>
          <br />
          <input
            className="input"
            type="password"
            htmlFor="password"
            onChange={onChangePassword}
            onBlur={onBlurPassword}
            value={password}
          />
          {passCond && <p>Required</p>}
        </div>
        <br />
        <button type="submit" className="button">
          Submit
        </button>
        {error && <p>username and password didn't match</p>}
      </form>
    </div>
  );
};

export default Login;
