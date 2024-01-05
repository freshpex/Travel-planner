import "react";
import "./Dashboard.css";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SearchBar title="Travel Planner" /> 
    </div>
  );
};

export default Dashboard;
