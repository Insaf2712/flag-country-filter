import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";

const Navbar = ({ setMode, mode }) => {
  return (
    <nav
      className={`flex justify-between px-8 md:px-12 lg:px-18 items-center h-18 shadow ${mode ? "bg-slate-700 text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-base md:text-lg lg:text-xl  font-bold">
        Where in the world?
      </h1>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setMode(!mode)}
      >
        {mode ? (
          <>
            <BiSun />
            <span className="text-sm md:text-lg">Light Mode</span>
          </>
        ) : (
          <>
            <BiMoon />
            <span className="text-sm md:text-lg">Dark Mode</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
