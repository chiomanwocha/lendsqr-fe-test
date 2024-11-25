import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./shell.scss";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Sidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Shell;
