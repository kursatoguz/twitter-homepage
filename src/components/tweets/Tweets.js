import React from "react";
import Header from "./Header";
import Tweet from "./Tweet";
import SendTweet from "./SendTweet";
const Tweets = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="header-container">
      <Header />
      <SendTweet />
      <div className="tweets-container">
        {arr.map((item) => (
          <Tweet key={item} />
        ))}
      </div>
    </div>
  );
};

export default Tweets;
