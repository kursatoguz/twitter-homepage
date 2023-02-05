import React from "react";
import "./tweets.css";
const Header = () => {
  return (
    <div className="header-center">
      <h3>Anasayfa</h3>
      <div className="options">
        <p>
          <span>Sana ozel</span>
        </p>
        <p>
          <span className="active">Takip edilenler</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
