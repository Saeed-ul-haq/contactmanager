import React from "react";
import form from "./form.css";
export default function Form() {
  return (
    <div className="form-container">
      <div className="avatar"></div>
      <div className="title">Arsene Awounou</div>
      <div className="sub-title">underscoDE</div>
      <form>
        <div className="username">
          <i className="fa fa-user" />
          <input type="text" className="name-input" placeholder="Username" />
        </div>
        <div className="password">
          <i className="fa fa-key"></i>
          <input
            type="password"
            className="pass-input"
            placeholder="Password"
          />
        </div>
        <input className="submit-input" type="submit" value="Login" />
        <div className="links">
          <a href="/#">Forgot password ?</a> | <a href="/#">Sign in</a>
        </div>
      </form>
    </div>
  );
}
