"use client";
import React from "react";
import TopNavBar from "./TopNavBar";
import Sidebar from "./SideBar";
import Card from "../Card";

const AllNavBar: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <TopNavBar />
      <div className="flex flex-grow">
        <Sidebar />
        {/* Main content area */}
        <div className="flex-grow p-6">
          {/* Create a responsive grid layout for the cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNavBar;
