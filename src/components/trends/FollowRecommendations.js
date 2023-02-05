import React from "react";
import "./trends.css";
const FollowRecommendations = () => {
  return (
    <div className="trends-container">
      <h3>Kimi takip etmeli</h3>
      <div className="user-infos rec-users">
        <div className="image-name">
          <img
            src="https://picsum.photos/200/300"
            alt="image"
            className="img"
          />
          <div className="user-name">
            <p className="name">John Doe</p>
            <p className="username">@johndoe</p>
          </div>
        </div>
        <button className="btn follow-btn">Takip et</button>
      </div>
      <div className="user-infos rec-users">
        <div className="image-name">
          <img
            src="https://picsum.photos/200/300"
            alt="image"
            className="img"
          />
          <div className="user-name">
            <p className="name">John Doe</p>
            <p className="username">@johndoe</p>
          </div>
        </div>
        <button className="btn follow-btn">Takip et</button>
      </div>
      <div className="user-infos rec-users">
        <div className="image-name">
          <img
            src="https://picsum.photos/200/300"
            alt="image"
            className="img"
          />
          <div className="user-name">
            <p className="name">John Doe</p>
            <p className="username">@johndoe</p>
          </div>
        </div>
        <button className="btn follow-btn">Takip et</button>
      </div>
      <p className="show-more">Daha fazla goster</p>
    </div>
  );
};

export default FollowRecommendations;
