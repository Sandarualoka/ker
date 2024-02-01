import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>
        {" "}
        Dashboard<Link to="/products">Go to Products</Link>
      </p>
    </div>
  );
};

export default Dashboard;
