import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Trends from "./components/trends/Trends";
import Tweets from "./components/tweets/Tweets";
function App() {
  return (
    <>
      <div className="content container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="tweets">
          <Tweets />
        </div>
        <div className="trends">
          <Trends />
        </div>
      </div>
    </>
  );
}

export default App;
