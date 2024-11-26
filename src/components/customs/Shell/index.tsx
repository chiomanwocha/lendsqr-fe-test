import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "./shell.scss";

const Shell = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shell">
      <Navbar open={open} setOpen={setOpen} />
      <div className="body">
        <Sidebar setOpen={setOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Shell;
