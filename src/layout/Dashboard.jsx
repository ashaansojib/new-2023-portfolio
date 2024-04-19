import React from "react";
import Aside from "../pages/dashboard/aside/Aside";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex gap-4 max-w-screen-xl mx-auto">
      <div className="w-[280px] border">
        <Aside />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
