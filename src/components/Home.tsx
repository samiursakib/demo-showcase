"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
