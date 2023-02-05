import React from "react";
import Data from "./trendData.json";
import "./trends.css";
import { IoIosMore } from "react-icons/io";

const TrendTopics = () => {
  const [trendData, setTrendData] = React.useState(Data.trends);

  return (
    <div className="trends-container margin">
      <h3>Turkiye gundemleri</h3>
      {trendData.map((trend, index) => {
        return (
          <div className="trend" key={trend.id}>
            <div className="trend-infos">
              <div className="categories">
                <p className="category small">
                  {index + 1} • {trend.category}• Gundemdekiler
                </p>
              </div>
              <div className="more-icon">
                <IoIosMore />
              </div>
            </div>
            <div className="trend-name">
              <p>
                {trend.name} {index + 1}
              </p>
            </div>
            <div className="trend-tweets small">
              <p>{trend.numberOfTweets} B Tweet</p>
            </div>
          </div>
        );
      })}
      <p className="show-more">Daha fazla goster</p>
    </div>
  );
};

export default TrendTopics;
