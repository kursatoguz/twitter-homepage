import React from "react";
import { BsChevronDown } from "react-icons/bs";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineSmile,
} from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
const SendTweet = () => {
  return (
    <div className="send-container">
      <div className="send-top">
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="user"
          className="img tweets-img"
        />
        <div className="visible-btn">
          <p>Herkes</p>
          <i>
            <BsChevronDown />
          </i>
        </div>
      </div>
      <div className="send-center">
        <textarea name="tweet" rows="4" placeholder="Neler Oluyor?"></textarea>
      </div>
      <div className="send-bottom">
        <div className="send-icons">
          <i>
            <AiOutlinePicture />
          </i>
          <i>
            <AiOutlineFileGif />
          </i>
          <i>
            <RiSurveyLine />
          </i>
          <i>
            <AiOutlineSmile />
          </i>
          <i>
            <BiTimer />
          </i>
          <i>
            <CiLocationOn />
          </i>
        </div>
        <button className="btn tweet-btn">Tweetle</button>
      </div>
    </div>
  );
};

export default SendTweet;
