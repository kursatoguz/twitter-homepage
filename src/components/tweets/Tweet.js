import React from "react";
import "./tweets.css";
import { GiConfirmed } from "react-icons/gi";
import { IoIosMore } from "react-icons/io";
import { RxShare2 } from "react-icons/rx";
import { BiMessageRounded, BiHeart } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoIosStats } from "react-icons/io";
const Tweet = () => {
  return (
    <div className="single-tweet">
      <div className="tweet-head">
        <div className="tweet-head-left">
          <img
            src="https://picsum.photos/200/300"
            alt="image"
            className="img tweets-img"
          />
          <p className="name">User Name</p>
          <i className="confirm-icon">
            <GiConfirmed />
          </i>
          <p className="username">@username</p>
          <p className="time">4d</p>
        </div>
        <div className="tweet-head-right more-icon">
          <IoIosMore />
        </div>
      </div>
      <div className="tweet-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nostrum deserunt dolorum alias neque pariatur eum, officia quam vel
          minus tempora animi quia asperiores enim maxime? Facere laboriosam
          harum veniam maiores tenetur quibusdam quaerat reprehenderit! Error
          quo alias maiores.
        </p>
      </div>
      <div className="tweet-image">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="randomimage"
        />
      </div>
      <div className="buttons">
        <div className="single-button">
          <i className="icon">
            <BiMessageRounded />
          </i>

          <p>12</p>
        </div>
        <div className="single-button">
          <i className="icon">
            <AiOutlineRetweet />
          </i>

          <p>22</p>
        </div>
        <div className="single-button">
          <i className="icon">
            <BiHeart />
          </i>
          <p>87</p>
        </div>
        <div className="single-button">
          <i className="icon">
            <IoIosStats />
          </i>
          <p>1241</p>
        </div>
        <div className="single-button">
          <i className="icon">
            <RxShare2 />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
