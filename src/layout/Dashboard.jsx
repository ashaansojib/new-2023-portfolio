import React from "react";
import Aside from "../pages/dashboard/aside/Aside";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-4 max-w-screen-xl mx-auto">
      <div className="w-[280px] border">
        <Link to="/" className="text-center font-semibold text-2xl p-2">AshaAnSojib</Link>
        <Aside />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
