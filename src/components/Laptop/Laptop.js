import React from "react";
import "./Laptop.css";

const Laptop = () => {
  return (
    <div
      className="d-flex bg-danger w-100 justify-content-center align-items-center laptop-body"
      style={{ height: "100vh" }}
    >
      <div className="laptop">
      <h1>DEV</h1>
        <div className="keyboard">
            <div className="keys"></div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;
