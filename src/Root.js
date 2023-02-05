import React from "react";

import { Outlet } from "react-router-dom";
import { SearchBar } from "./components/SearchBar";

export default function Root() {
  return (
    <div className="w-screen bg-zinc-900 flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl">
        <SearchBar />
        <Outlet />
      </div>
    </div>
  );
}
