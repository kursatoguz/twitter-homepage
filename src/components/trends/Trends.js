import React from "react";
import "./trends.css";
import TrendTopics from "./TrendTopics";
import TrendsFooter from "./TrendsFooter";
import FollowRecommendations from "./FollowRecommendations";
import { CiSearch } from "react-icons/ci";
const Trends = () => {
  return (
    <>
      <div className="search">
        <i className="search-icon">
          <CiSearch />
        </i>
        <input type="text" placeholder="Twitter'da Ara" />
      </div>
      <TrendTopics />
      <FollowRecommendations />
      <TrendsFooter />
    </>
  );
};

export default Trends;
