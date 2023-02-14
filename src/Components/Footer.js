import React from "react";

const Footer = () => {
  return (
    <div style={{ borderTop: "2px solid black", marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p>
          Made with<span style={{ color: "red" }}> ❤ </span>mIrfan
        </p>
      </div>
      <h4>
        This app was made just to demonstrate the Shopping Cart concept in React
      </h4>
    </div>
  );
};

export default Footer;
